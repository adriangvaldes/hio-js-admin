"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "./loginSchema";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/Input";

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
    </Form>
  );
}
