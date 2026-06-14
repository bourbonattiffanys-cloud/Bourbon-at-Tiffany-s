import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-heading__meta">
        <p>{description}</p>
        {action}
      </div>
    </div>
  );
}
