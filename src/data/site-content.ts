import type { SocialLink } from "@/lib/types";

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bourbon_at_tiffanys/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCzlICdsAUfMQkfWxKaEysoQ",
  },
];

export const faqs = [
  {
    question: "How do I find out about upcoming picks?",
    answer:
      "Sign up for notifications for public releases directly on a pick page.",
  },
  {
    question: "Where can I buy your picks?",
    answer:
      "Each pick page lists the retail stores and any online options where the bottle is available. If it shows as available, head to the store — no membership required.",
  },
  {
    question: "How do I join a pick team?",
    answer:
      "That's what The Selection Room is for — a private, invite-only membership launching soon. If you're interested, start a conversation.",
    answerLink: { text: "start a conversation", href: "/contact" },
  },
];
