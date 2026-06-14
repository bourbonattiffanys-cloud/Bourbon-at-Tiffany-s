"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  preferredFulfillment: "Ship to retail partner",
  message: "",
};

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function PickInterestForm({ pickSlug, pickTitle }: { pickSlug: string; pickTitle: string }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/picks/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, pickSlug }),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Something went wrong.");
      }

      setStatus({ type: "success", message: payload.message ?? `You are on the list for ${pickTitle}.` });
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
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            required
          />
        </label>
        <label>
          Phone
          <input
            value={formData.phone}
            onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
          />
        </label>
        <label>
          Preferred fulfillment
          <select
            value={formData.preferredFulfillment}
            onChange={(event) =>
              setFormData((current) => ({ ...current, preferredFulfillment: event.target.value }))
            }
          >
            <option>Ship to retail partner</option>
            <option>Pick up in store</option>
            <option>Notify me either way</option>
          </select>
        </label>
        <label className="form-grid__full">
          Notes
          <textarea
            rows={5}
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            placeholder="Anything Tiffany should know about your interest, pickup plans, or questions?"
          />
        </label>
      </div>
      <div className="form-panel__footer">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Register interest"}
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
