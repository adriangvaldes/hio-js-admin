"use server";

import { cookies } from "next/headers";

const COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};
export async function setCookie(name: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(name)?.value;
  return cookieValue;
}
