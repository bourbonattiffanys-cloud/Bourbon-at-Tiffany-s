import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "bourbon-101",
    name: "Bourbon 101",
    price: "Starting at $75 per person",
    summary: "A welcoming introduction to bourbon history, mash bills, and the major names shaping the category.",
    highlights: [
      "Perfect for first-time bourbon drinkers and social groups",
      "Covers flavor basics, labeling language, and tasting technique",
      "Built to feel approachable instead of intimidating"
    ]
  },
  {
    slug: "bourbon-201",
    name: "Bourbon 201",
    price: "Starting at $100 per person",
    summary: "A deeper tasting for enthusiasts ready to talk small batch, limited releases, and what actually changes from barrel to barrel.",
    highlights: [
      "Great for hobbyists growing into collectors",
      "Breaks down proof, age, blending, and allocation conversations",
      "Connects what is in the glass to what matters on the shelf"
    ]
  },
  {
    slug: "bourbon-301",
    name: "Bourbon 301",
    price: "Starting at $125 per person",
    summary: "An advanced session built around nuance, comparative tasting, and the details that separate memorable pours from merely rare ones.",
    highlights: [
      "Designed for serious whiskey lovers and private groups",
      "Supports custom themes, distillery comparisons, or aging deep dives",
      "Pairs education with Tiffany's palate and storytelling approach"
    ]
  },
  {
    slug: "custom-tasting",
    name: "Custom Experiences",
    price: "Custom quote",
    summary: "Private tastings, partner events, and tailored whiskey programming built around your group, your goals, and your palate.",
    highlights: [
      "Distillery-specific, rye, double oaked, or age-stated themes",
      "Ideal for celebrations, clubs, retailers, and hospitality partners",
      "Can be shaped around education, entertainment, or both"
    ]
  }
];
