import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6)
    .max(100)
    .nonempty({ message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
