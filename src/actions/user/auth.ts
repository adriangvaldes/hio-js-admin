"use server";

import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginSchema, LoginT } from "@/lib/auth_prisma";
import { ApiResponse } from "@/lib/typeGuard";
import { ApiErrorMessages } from "@/lib/models/Errors";
import { useUserSessionStore } from "@/store/userSession";
import { UserSession } from "@/types/userSession";

const JWT_SECRET = process.env.JWT_SECRET || "your-default-secret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "your-default-refresh-secret";

export async function signIn(values: LoginT): Promise<ApiResponse<UserSession>> {
  const validation = loginSchema.safeParse(values);
  if (!validation.success) {
    return {
      success: false,
      error: { message: ApiErrorMessages.INVALID_DATA, statusCode: 400 },
    };
  }

  const { email, password } = validation.data;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return {
        success: false,
        error: { message: ApiErrorMessages.INVALID_CREDENTIALS, statusCode: 401 },
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        error: { message: ApiErrorMessages.INVALID_CREDENTIALS, statusCode: 401 },
      };
    }

    // 2. Token generation logic is the same
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

    // 3. Setting the cookie is the same
    (await cookies()).set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return {
      success: true,
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    };
  } catch (error) {
    console.error("Sign-in Error:", error);
    return {
      success: false,
      error: { message: ApiErrorMessages.INVALID_CREDENTIALS, statusCode: 401 },
    };
  }
}
