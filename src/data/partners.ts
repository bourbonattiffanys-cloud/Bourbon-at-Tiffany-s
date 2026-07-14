export interface Partner {
  name: string;
  business: string;
  role: string;
  description: string;
  photo: string;
  photoFit?: "cover" | "contain";
  website?: string;
  projects?: string[];
}

export const partners: Partner[] = [
  {
    name: "Ben",
    business: "Barrel Raised",
    role: "Custom whiskey accessories",
    description:
      "Ben started as an engraver and fell into the whiskey world the same way a lot of us do — curiosity first, obsession second. That's exactly why he gets it. Barrel Raised does it all — Glencairns, glen toppers, flasks, travel cases, journals — everything customizable with your logo. He can do things you wouldn't think to ask for until you see them, like glasses etched so that when you lift them to pour, the bottom reads 'Dad' or 'Happy Father's Day.' Ben was the first person to put his craft behind what I was building, and every piece that has sat on a table at one of my tastings has his work behind it.",
    photo: "/assets/partners/barrel-raised.png",
    photoFit: "contain",
    website: "https://www.barrelraised.com/",
    projects: [
      "Custom glassware for private tastings",
      "70th birthday tasting glassware",
      "Father's Day custom glasses — etched message revealed at the bottom of the pour",
      "Go.Follow.Lead private event custom glassware",
      "Alvin Langston custom glasses for the Clemson Women's Basketball tasting",
      "Bourbon at Tiffany's branded travel carriers",
    ],
  },
  {
    name: "Clayton Hyams",
    business: "Clayton Hyams Photography",
    role: "Photographer",
    description:
      "Clayton was photographing whiskey bottles before we ever met — including my Dettling pick. When I saw his work I reached out to tell him how beautiful it was. He came to meet me in person, and I was able to connect him with High Wire Distilling to get him access to the Jimmy Red corn for those shots you see in his portfolio. I just want to see people succeed. If I can make a connection that helps someone, that's enough for me. Clayton has been shooting the Bourbon at Tiffany's pick collection ever since, and his eye for what makes a bottle mean something is exactly what this brand deserves.",
    photo: "/assets/partners/clayton.jpg",
    website: "https://www.claytonhyamsphotography.com/",
    projects: [
      "Broad Branch Big Winston bottle photography",
      "Jimmy Red — High Wire Distilling",
      "Full barrel pick collection shoot",
    ],
  },
  {
    name: "Rodney Green",
    business: "HoosierWoodGuy",
    role: "Handcrafted bourbon barrel goods",
    description:
      "HoosierWoodGuy has been handcrafting unique bourbon barrel pieces since 2020 — over 2,000 sales and every one of them earned. He specializes in laser-etched barrelheads and can customize just about anything: checkerboard barrelheads, serving trays and charcuterie boards made from actual bourbon barrels, tabletop cornhole boards, and custom bungholes with your logo. He has made branded bungholes for Bourbon at Tiffany's and the barrelheads that make each pick feel like the keepsake it should be.",
    photo: "/assets/partners/tasting-wheel-barrel-head.webp",
    website: "https://www.etsy.com/shop/hoosierwoodguy/",
    projects: [
      "Custom laser-etched barrelheads for barrel pick releases",
      "Branded bungholes with the Bourbon at Tiffany's logo",
    ],
  },
];
