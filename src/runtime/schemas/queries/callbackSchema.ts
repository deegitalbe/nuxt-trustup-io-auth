import { z } from "zod";

const callbackSchema = z.object({
  token: z.string().min(1),
  path: z.string().optional(),
  "amp;path": z.string().nullable(),
});

export type CallbackQuerySchema = z.infer<typeof callbackSchema>;

export default callbackSchema;
