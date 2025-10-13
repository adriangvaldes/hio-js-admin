"use client";

import { useUserSessionStore } from "@/store/userSession";
import { UserSession } from "@/types/userSession";
import { useEffect } from "react";

interface UserSessionProviderProps {
  userSession: UserSession | null;
}
export function UserSessionProvider({ userSession }: UserSessionProviderProps) {
  useEffect(() => {
    if (userSession) {
      useUserSessionStore.setState({ userSession });
    }
  }, [userSession]);

  return null;
}
