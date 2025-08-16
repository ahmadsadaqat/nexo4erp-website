// app/contact/schema.ts

import { z } from "zod";

// 1. Define and export the schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// 2. Export the inferred TypeScript types
export type ContactFormData = z.infer<typeof contactSchema>;

export type FormState = {
  success: boolean;
  message: string;
};