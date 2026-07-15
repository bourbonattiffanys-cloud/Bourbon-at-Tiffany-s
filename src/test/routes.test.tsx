import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ExperiencesPage from "@/app/experiences/page";
import ConsultingPage from "@/app/consulting/page";
import EventsPage from "@/app/events/page";
import PastPicksPage from "@/app/past-picks/page";
import PicksPage from "@/app/picks/page";
import UpcomingPicksPage from "@/app/upcoming-picks/page";
import ContactPage from "@/app/contact/page";
import PickDetailPage from "@/app/picks/[slug]/page";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("route smoke tests", () => {
  it("renders the home page", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /Taste matters\. Find yours\./i })).toBeInTheDocument();
  });

  it("renders the about page", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /Taste matters\. Find yours\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Consistency gets noticed/i })).toBeInTheDocument();
  });

  it("renders the experiences page", () => {
    render(<ExperiencesPage />);
    expect(
      screen.getByRole("heading", { name: /The stories behind the bottle, brought to your table\./i }),
    ).toBeInTheDocument();
  });

  it("renders the consulting page", () => {
    render(<ConsultingPage />);
    expect(
      screen.getByRole("heading", { name: /market presence your brand can't afford to skip/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /bottle needs someone/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Start a brand conversation/i })).toBeInTheDocument();
  });

  it("renders the events page", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => "BEGIN:VCALENDAR\nVERSION:2.0\nEND:VCALENDAR",
      }),
    );

    render(await EventsPage());
    expect(screen.getByRole("heading", { name: /Where the next pour is happening\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Nothing posted yet\./i })).toBeInTheDocument();
  });

  it("renders the picks hub", async () => {
    render(await PicksPage());
    expect(
      screen.getByRole("heading", { name: /Each barrel earned its place because it met a standard/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Every barrel, one place/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Everything you need to know\./i })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: /Broad Branch Distillery/i }).length).toBeGreaterThan(0);
  });

  it("renders the past picks page", () => {
    render(<PastPicksPage />);
    expect(screen.getByRole("heading", { name: /An archive built/i })).toBeInTheDocument();
  });

  it("renders the upcoming picks page", () => {
    render(<UpcomingPicksPage />);
    expect(screen.getByRole("heading", { name: /Follow the next releases/i })).toBeInTheDocument();
  });

  it("renders the contact page", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /You made it this far for a reason\./i })).toBeInTheDocument();
  });

  it("renders a pick detail page", async () => {
    render(await PickDetailPage({ params: Promise.resolve({ slug: "broad-branch-rye-2026" }) }));
    expect(
      screen.getByRole("heading", { name: /Broad Branch Distillery — Rye Fidelity/i }),
    ).toBeInTheDocument();
  });
});
