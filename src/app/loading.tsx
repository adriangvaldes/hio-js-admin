import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center text-white">
      <Spinner fontSize={30} />
    </div>
  );
}
