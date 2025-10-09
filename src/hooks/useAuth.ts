"use client";

import { signOutAction } from "@/actions/user/auth";
import { useUserSessionStore } from "@/store/userSession";

export function useAuth() {
  const { userSession: user, clearUserSession } = useUserSessionStore();

  async function signOut() {
    clearUserSession();
    await signOutAction();
  }

  return { user, signOut };
}
