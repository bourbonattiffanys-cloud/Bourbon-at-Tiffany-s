import { NextResponse } from "next/server";
import { getPickBySlug } from "@/data/barrel-picks";
import { deliverFormSubmission } from "@/lib/form-delivery";
import { flattenZodError, pickInterestRequestSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = pickInterestRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please review the form and try again.", fields: flattenZodError(parsed.error) },
        { status: 400 },
      );
    }

    const pick = getPickBySlug(parsed.data.pickSlug);

    if (!pick) {
      return NextResponse.json({ error: "That pick could not be found." }, { status: 404 });
    }

    await deliverFormSubmission({ ...parsed.data, pickTitle: pick.title }, "pick-interest");

    return NextResponse.json({
      message: `You're on the list for ${pick.title}. We'll follow up with store details and next steps as soon as the release is ready.`,
    });
  } catch {
    return NextResponse.json({ error: "Unable to save your interest right now." }, { status: 500 });
  }
}
