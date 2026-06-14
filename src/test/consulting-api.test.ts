import { describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/consulting/route";

describe("consulting API", () => {
  it("rejects invalid consulting submissions", async () => {
    const response = await POST(
      new Request("http://localhost/api/consulting", {
        method: "POST",
        body: JSON.stringify({
          name: "A",
          email: "not-an-email",
          company: "",
          message: "short",
        }),
      }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ error: "Please review the form and try again." });
  });

  it("sends valid consulting submissions through the consulting form channel", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    vi.stubEnv("FORMS_WEBHOOK_URL", "https://forms.example.com");

    const response = await POST(
      new Request("http://localhost/api/consulting", {
        method: "POST",
        body: JSON.stringify({
          name: "Brand Lead",
          email: "brand@example.com",
          company: "Small Whiskey Co.",
          message: "We are exploring support for retail tastings and brand appearances.",
        }),
      }),
    );

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://forms.example.com",
      expect.objectContaining({
        headers: expect.objectContaining({ "X-Form-Type": "consulting" }),
      }),
    );

    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });
});
