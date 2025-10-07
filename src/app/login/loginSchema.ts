import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6).max(100).nonempty({ message: "Password is required" }),
});

export const signUpSchema = z
  .object({
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(6).max(100).nonempty({ message: "Password is required" }),
    confirmPassword: z.string().min(6).max(100),
    name: z.string().min(2).max(100).nonempty({ message: "Name is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginT = z.infer<typeof loginSchema>;
export type SignUpT = z.infer<typeof signUpSchema>;
