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
    expect(screen.getByRole("heading", { name: /Tiffany's palate/i })).toBeInTheDocument();
  });

  it("renders the about page", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /A whiskey voice shaped/i })).toBeInTheDocument();
  });

  it("renders the experiences page", () => {
    render(<ExperiencesPage />);
    expect(screen.getByRole("heading", { name: /Educational tastings/i })).toBeInTheDocument();
  });

  it("renders the consulting page", () => {
    render(<ConsultingPage />);
    expect(screen.getByRole("heading", { name: /trusted voice/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /bottle needs someone/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Start the consulting conversation/i })).toBeInTheDocument();
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
    expect(screen.getByRole("heading", { name: /Upcoming bourbon events/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /No public events are posted yet/i })).toBeInTheDocument();
  });

  it("renders the picks hub", async () => {
    render(await PicksPage());
    expect(screen.getByRole("heading", { name: /Barrel picks, past and present/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /The barrel log/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Collaborations/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Where Tiffany is heading next/i })).not.toBeInTheDocument();
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
    expect(screen.getByRole("heading", { name: /Reach out to plan a tasting/i })).toBeInTheDocument();
  });

  it("renders a pick detail page", async () => {
    render(await PickDetailPage({ params: Promise.resolve({ slug: "chapin-founders-barrel" }) }));
    expect(screen.getByRole("heading", { name: /Chapin Founders Barrel/i })).toBeInTheDocument();
  });
});
