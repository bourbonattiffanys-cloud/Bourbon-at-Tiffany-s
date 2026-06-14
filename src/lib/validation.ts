import { z } from "zod";

export const contactRequestSchema = z.object({
  name: z.string().trim().min(2, "Please share your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  interest: z.enum(["tasting", "private-event", "barrel-pick", "general"]),
  groupSize: z.string().trim().optional(),
  message: z.string().trim().min(12, "Please share a few more details."),
});

export const consultingRequestSchema = z.object({
  name: z.string().trim().min(2, "Please share your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().min(2, "Please share the brand or company name."),
  message: z.string().trim().min(12, "Please share a few more details."),
});

export const pickInterestRequestSchema = z.object({
  name: z.string().trim().min(2, "Please share your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  pickSlug: z.string().trim().min(1, "Pick identifier is required."),
  preferredFulfillment: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

export function flattenZodError(error: z.ZodError) {
  return error.flatten().fieldErrors;
}
