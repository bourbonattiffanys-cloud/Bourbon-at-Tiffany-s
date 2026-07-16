"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ConsultingForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/consulting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Something went wrong.");
      }

      setStatus({ type: "success", message: payload.message ?? "Thank you. I'll be in touch soon." });
      setFormData(initialState);
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
    <form className="form-panel consulting-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            name="name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            name="email"
            required
          />
        </label>
        <label className="form-grid__full">
          Brand or company
          <input
            value={formData.company}
            onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
            name="company"
            required
          />
        </label>
        <label className="form-grid__full">
          What are you exploring?
          <textarea
            rows={6}
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            name="message"
            required
          />
        </label>
      </div>
      <div className="form-panel__footer">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Start the consulting conversation"}
        </button>
        {status.type !== "idle" ? (
          <p className={status.type === "success" ? "form-message form-message--success" : "form-message form-message--error"}>
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
