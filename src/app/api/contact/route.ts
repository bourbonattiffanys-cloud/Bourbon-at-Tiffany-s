import { NextResponse } from "next/server";
import { deliverFormSubmission } from "@/lib/form-delivery";
import { contactRequestSchema, flattenZodError } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please review the form and try again.", fields: flattenZodError(parsed.error) },
        { status: 400 },
      );
    }

    await deliverFormSubmission(parsed.data, "contact");

    return NextResponse.json({ message: "Thank you. Tiffany will be in touch soon." });
  } catch {
    return NextResponse.json({ error: "Unable to send your inquiry right now." }, { status: 500 });
  }
}
