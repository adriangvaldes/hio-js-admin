import { signOutAction } from "@/actions/user/auth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

interface MenubuttonsProps {
  onClick?: () => void;
}

export function Menubuttons() {
  return (
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
  );
}
