"use client";

import { signOutAction } from "@/actions/user/auth";
import { Button } from "@/components/ui/button";
import { useUserSessionStore } from "@/store/userSession";

export function SideMenu() {
  const { userSession: user } = useUserSessionStore();

  if (!user) {
    return (
      <Button onClick={signOutAction} color="white" variant="secondary" className="mt-4">
        Logout
      </Button>
    );
  }

  return (
    <div className="shrink-0">
      <p className="text-white">{user.name}!</p>
      <p className="text-white">{user.email}</p>
      <Button onClick={signOutAction} color="white" variant="secondary" className="mt-4">
        Logout
      </Button>
    </div>
  );
}
