import { z } from "zod";
export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(9, {
    message: "Password must be at least 8 characters long.",
  }),
});
