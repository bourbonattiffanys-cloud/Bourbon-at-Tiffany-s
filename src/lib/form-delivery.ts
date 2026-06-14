export async function deliverFormSubmission(payload: Record<string, unknown>, type: string) {
  const webhookUrl = process.env.FORMS_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Form-Type": type,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Webhook delivery failed with status ${response.status}`);
    }

    return;
  }

  console.info(`[form:${type}]`, JSON.stringify(payload));
}
