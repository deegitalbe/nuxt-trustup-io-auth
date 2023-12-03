import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  first_name: z.string().nullable(),
  last_name: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().nullable(),
  avatar: z.string().nullable(),
  avatar_base64: z.string().nullable(),
  locale: z.string().min(1),
  slack_id: z.string().nullable(),
  roles: z.string().min(1).array(),
  created_at: z.string().nullable(),
  updated_at: z.string().nullable(),
});

export type UserAttributes = z.infer<typeof userSchema>;

export default userSchema;
