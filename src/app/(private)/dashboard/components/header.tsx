"use client";

import { signOutAction } from "@/actions/user/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useUserSessionStore } from "@/store/userSession";
import { toast } from "sonner";

export function SideMenu() {
  const { signOut, user } = useAuth();

  if (!user) {
    return (
      <Button onClick={signOut} color="white" variant="secondary" className="mt-4">
        Logout
      </Button>
    );
  }

  return (
    <div className="shrink-0">
      <p className="text-white">{user.name}!</p>
      <p className="text-white">{user.email}</p>
      <Button onClick={signOut} color="white" variant="secondary" className="mt-4">
        Logout
      </Button>
    </div>
  );
}
