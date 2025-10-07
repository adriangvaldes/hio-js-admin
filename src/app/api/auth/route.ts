import { signUpCreateSchema } from "@/lib/auth_prisma";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "your-default-secret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "your-default-refresh-secret";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = signUpCreateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.message }, { status: 400 });
    }

    const { email, password, name } = validation.data;

    let user = await prisma.user.findUnique({ where: { email } });

    // If user doesn't exist, create one (Sign Up)
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
      }
    }

    const accessToken = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    (await cookies()).set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.json({ accessToken });
  } catch (error) {
    console.error("Login/Register Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
