"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  interest: "tasting",
  groupSize: "",
  message: "",
};

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Something went wrong.");
      }

      setStatus({ type: "success", message: payload.message ?? "Thank you. Tiffany will be in touch soon." });
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
    <form className="form-panel" onSubmit={handleSubmit}>
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
        <label>
          Phone
          <input
            value={formData.phone}
            onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
            name="phone"
          />
        </label>
        <label>
          Interest
          <select
            value={formData.interest}
            onChange={(event) => setFormData((current) => ({ ...current, interest: event.target.value }))}
            name="interest"
          >
            <option value="tasting">Private tasting</option>
            <option value="private-event">Private event</option>
            <option value="barrel-pick">Barrel pick</option>
            <option value="general">General inquiry</option>
          </select>
        </label>
        <label>
          Group size
          <input
            value={formData.groupSize}
            onChange={(event) => setFormData((current) => ({ ...current, groupSize: event.target.value }))}
            name="groupSize"
          />
        </label>
        <label className="form-grid__full">
          Tell Tiffany what you are planning
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
          {submitting ? "Sending..." : "Send inquiry"}
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
