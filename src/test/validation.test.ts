import { describe, expect, it } from "vitest";
import { consultingRequestSchema, contactRequestSchema, pickInterestRequestSchema } from "@/lib/validation";

describe("validation", () => {
  it("accepts a valid contact request", () => {
    const result = contactRequestSchema.safeParse({
      name: "Tiffany Fan",
      email: "fan@example.com",
      interest: "tasting",
      message: "We would love to plan a tasting for twelve guests.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects an invalid contact request", () => {
    const result = contactRequestSchema.safeParse({
      name: "A",
      email: "not-an-email",
      interest: "tasting",
      message: "short",
    });

    expect(result.success).toBe(false);
  });

  it("accepts a valid pick interest request", () => {
    const result = pickInterestRequestSchema.safeParse({
      name: "Collector",
      email: "collector@example.com",
      pickSlug: "chapin-founders-barrel",
    });

    expect(result.success).toBe(true);
  });

  it("accepts a valid consulting request", () => {
    const result = consultingRequestSchema.safeParse({
      name: "Brand Lead",
      email: "brand@example.com",
      company: "Small Whiskey Co.",
      message: "We are exploring support for retail tastings and brand appearances.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects a consulting request without brand context", () => {
    const result = consultingRequestSchema.safeParse({
      name: "B",
      email: "not-an-email",
      company: "",
      message: "short",
    });

    expect(result.success).toBe(false);
  });
});
