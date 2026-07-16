import { NextResponse } from "next/server";
import { deliverFormSubmission } from "@/lib/form-delivery";
import { consultingRequestSchema, flattenZodError } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = consultingRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please review the form and try again.", fields: flattenZodError(parsed.error) },
        { status: 400 },
      );
    }

    await deliverFormSubmission(parsed.data, "consulting");

    return NextResponse.json({ message: "Thank you. I'll be in touch soon." });
  } catch {
    return NextResponse.json({ error: "Unable to send your consulting inquiry right now." }, { status: 500 });
  }
}
