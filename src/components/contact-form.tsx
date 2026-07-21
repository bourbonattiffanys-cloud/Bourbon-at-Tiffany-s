"use client";

import { useState } from "react";

type InquiryType = "tasting" | "picks";

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: "tasting", label: "Private tasting or event" },
  { value: "picks", label: "Barrel pick notifications" },
];

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("tasting");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  function handleInquiryChange(value: InquiryType) {
    setInquiryType(value);
    setStatus({ type: "idle" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    const payload =
      inquiryType === "tasting"
        ? { inquiryType, name, email, phone, date, groupSize, occasion, message }
        : { inquiryType, name, email };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          inquiryType === "picks"
            ? "You're on the list. I'll be in touch when the next pick is ready."
            : data.message ?? "Message received. I'll be in touch soon.",
      });

      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setGroupSize("");
      setOccasion("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-grid__full">
          What are we planning?
          <select
            value={inquiryType}
            onChange={(e) => handleInquiryChange(e.target.value as InquiryType)}
            name="inquiryType"
          >
            {inquiryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} name="name" required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
        </label>

        {inquiryType === "tasting" ? (
          <>
            <label>
              Phone
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" />
            </label>
            <label>
              Preferred date or timeframe
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
                placeholder="e.g. first weekend in October"
              />
            </label>
            <label>
              Approximate group size
              <input
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                name="groupSize"
                placeholder="e.g. 12–15 people"
              />
            </label>
            <label>
              What&apos;s the occasion?
              <input
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                name="occasion"
                placeholder="e.g. birthday, corporate event, girls&apos; night"
              />
            </label>
            <label className="form-grid__full">
              Anything else I should know?
              <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} name="message" />
            </label>
          </>
        ) : null}
      </div>

      <div className="form-panel__footer">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : inquiryType === "picks" ? "Add me to the list" : "Send message"}
        </button>
        {status.type !== "idle" ? (
          <p
            className={
              status.type === "success" ? "form-message form-message--success" : "form-message form-message--error"
            }
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
