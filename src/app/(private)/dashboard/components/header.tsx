"use client";

import { signOutAction } from "@/actions/user/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useUserSessionStore } from "@/store/userSession";
import { toast } from "sonner";

export function Header() {
  const { signOut, user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div>
      <p className="text-white">Welcome back, {user.name}!</p>
      <p className="text-white">Your email: {user.email}</p>
      <Button onClick={signOut} color="white" variant="secondary" className="mt-4">
        Logout
      </Button>
    </div>
  );
}
