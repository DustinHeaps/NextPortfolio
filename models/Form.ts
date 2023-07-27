import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z
      .string()
      .email("Please enter a valid email")
      .min(1, "Email is required"),
    message: z.string().min(1, "Message is required"),
  });

  export type FormSchemaType = z.infer<typeof formSchema>;
  