"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FormSignIn } from "./components/formSignIn";
import { useState } from "react";
import { setCookie } from "../../../actions/cookies";
import { Activity } from "lucide-react";
import { FormSignUp } from "./components/formSigUp";
import { useSearchParams } from "next/navigation";

interface LoginClientSideProps {
  formVisible: boolean;
}
export function LoginClientSide(props: LoginClientSideProps) {
  const searchParams = useSearchParams();
  const [formVisible, setFormVisible] = useState(props.formVisible);

  const isSignUp = searchParams.get("sign_up") === "true";

  const handleGetStartedClick = async () => {
    setFormVisible((p) => !p);
    setCookie("formVisible", String(true));
  };

  return (
    <div className="flex min-h-screen items-center justify-start bg-zinc-800 font-sans">
      <section
        className={cn(
          "flex h-screen flex-col items-center justify-center bg-zinc-800 p-10 text-center transition-all duration-800 ease-in-out",
          {
            "w-full": !formVisible,
            "w-1/2": formVisible,
          }
        )}
      >
        <div className="max-w-md">
          <p className="text-white">
            Welcome to <span className="font-bold">hIO-js</span> Admin
          </p>
          <h1 className="mt-5 mb-10 text-3xl font-bold text-white">
            The place where productivity meets simplicity
          </h1>
          {!formVisible && <Button onClick={handleGetStartedClick}>Get Started</Button>}
        </div>
      </section>

      <section
        className={cn(
          "flex h-screen items-center justify-center overflow-hidden bg-white transition-all duration-800 ease-in-out",
          {
            "w-0 opacity-0": !formVisible,
            "w-1/2 p-8 opacity-100": formVisible,
          }
        )}
      >
        {formVisible && !isSignUp && <FormSignIn />}
        {formVisible && isSignUp && <FormSignUp />}
      </section>
    </div>
  );
}
