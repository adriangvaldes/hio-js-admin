"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpT } from "@/lib/auth_prisma";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/Input";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";

export function FormSignUp() {
  const form = useForm<SignUpT>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  async function onSubmit(values: SignUpT) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
    console.log(values);
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-2 text-4xl font-bold">Create your account</h1>
      <p className="mb-10 text-slate-400">Please fill in the details to create an account</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <TextInput
            control={form.control}
            name="email"
            label="Email"
            description="This is your email address."
          />
          <TextInput
            control={form.control}
            name="name"
            label="Name"
            description="This is your name."
          />
          <TextInput
            control={form.control}
            name="password"
            label="Password"
            description="This is your password."
            type="password"
          />
          <TextInput
            control={form.control}
            name="confirmPassword"
            label="Confirm Password"
            description="Confirm your password."
            type="password"
          />

          <Button type="submit">
            Submit <Spinner show={form.formState.isSubmitting} />
          </Button>
        </form>
      </Form>
    </div>
  );
}
