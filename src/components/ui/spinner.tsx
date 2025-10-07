import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SpinnerProps {
  show?: boolean;
}

function Spinner({ className, show, ...props }: React.ComponentProps<"svg"> & SpinnerProps) {
  if (show === false) return null;
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
