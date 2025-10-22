"use client";

import { signOutAction } from "@/actions/user/auth";
import { Button } from "@/components/ui/button";
import { useUserSessionStore } from "@/store/userSession";
import { LayoutDashboard, LogOut } from "lucide-react";

export function SideMenu() {
  const { userSession: user } = useUserSessionStore();

  if (!user) {
    return (
      <Button onClick={signOutAction} color="white" variant="secondary" className="mt-4">
        <LogOut />
      </Button>
    );
  }

  return (
    <div className="flex shrink-0 flex-col p-5">
      <Button
        onClick={signOutAction}
        color="white"
        variant="default"
        className="mt-4 transition-colors hover:bg-white hover:text-black"
      >
        <p className="text-slate-100 transition-colors hover:text-slate-700">
          <LayoutDashboard />
        </p>
      </Button>
      <Button
        onClick={signOutAction}
        color="white"
        variant="default"
        className="mt-4 transition-colors hover:bg-white hover:text-black"
      >
        <p className="text-slate-100 transition-colors hover:text-slate-700">
          <LogOut />
        </p>
      </Button>
    </div>
  );
}
