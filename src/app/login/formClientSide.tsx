"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "./loginSchema";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/Input";
import Link from "next/link";

export function FormClientSide() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginSchema) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-2 text-4xl font-bold">Get Started Now</h1>
      <p className="mb-10 text-slate-400">Please log in with your credentials to continue</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TextInput
            control={form.control}
            name="email"
            label="Email"
            description="This is your public display name."
          />
          <TextInput
            control={form.control}
            name="password"
            label="Password"
            description="This is your password."
            type="password"
          />

          <Button type="submit">Submit</Button>
        </form>
        <p className="mt-5 text-slate-400">
          Not have a account? Click here to{" "}
          <Link
            className="cursor-pointer text-blue-500 transition-all hover:text-blue-700 hover:underline"
            href="/register"
          >
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}
