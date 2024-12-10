import { z } from "zod";

const userSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    photo: z.string().optional(),
    }),
});
const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
})

export const userValidations = {
  userSchema,
  loginSchema
};
