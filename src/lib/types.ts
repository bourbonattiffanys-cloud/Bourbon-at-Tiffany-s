export type InterestType = "tasting" | "private-event" | "barrel-pick" | "general";

export type PickStatus =
  | "announced"
  | "interest-open"
  | "available"
  | "sold-out"
  | "archived";

export type PickCtaMode = "interest" | "seller-link" | "store-info" | "sold-out";

export type ContactRequest = {
  name: string;
  email: string;
  phone?: string;
  interest: InterestType;
  groupSize?: string;
  message: string;
};

export type ConsultingRequest = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type PickInterestRequest = {
  name: string;
  email: string;
  phone?: string;
  pickSlug: string;
  preferredFulfillment?: string;
  message?: string;
};

export type Service = {
  slug: string;
  name: string;
  price: string;
  summary: string;
  highlights: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type PickStore = {
  name: string;
  location?: string;
};

export type BarrelPick = {
  slug: string;
  title: string;
  subtitle: string;
  status: PickStatus;
  partner?: string;
  sellerName?: string;
  sellerUrl?: string;
  storeName?: string;
  storeLocation?: string;
  stores?: PickStore[];
  onlineSellerName?: string;
  onlineSellerUrl?: string;
  releaseDate?: string;
  bottleCount?: number;
  proof?: string;
  age?: string;
  mashbill?: string;
  barrelType?: string;
  finish?: string;
  warehouseInfo?: string;
  fillDate?: string;
  dumpDate?: string;
  tastingNotes?: string[];
  tiffanyNotes?: string;
  heroImage: string;
  gallery?: string[];
  ctaMode: PickCtaMode;
  inviteOnly?: boolean;
  memberEarlyAccess?: boolean;
  allocationNotes?: string;
  purchaseLimit?: string;
  featured?: boolean;
};

export type BarrelLogCategory = "my-pick" | "collab";

export type BarrelLogEntry = {
  id: string;
  category: BarrelLogCategory;
  distillery: string;
  partner?: string;
  series?: string;
  image?: string;
  logoDomain?: string;
  pickDate?: string;
  releaseDate?: string;
  bottleCount?: number;
  proof?: string;
  age?: string;
  mashbill?: string;
  serialNumber?: string;
  cooperage?: string;
  finishingStaves?: string;
  notes?: string;
};

export type ClientProjectType = "Store" | "Non-Profit" | "Club" | "Private" | "Other";

export type ClientProjectEntry = {
  id: string;
  client: string;
  collectionName?: string;
  distillery?: string;
  image?: string;
  logoDomain?: string;
  logoImage?: string;
  logoImages?: string[];
  pickDate?: string;
  releaseDate?: string;
  type?: ClientProjectType;
  bottleCount?: number;
  proof?: string;
  age?: string;
  mashbill?: string;
  finish?: string;
  notes?: string;
};

export type ScheduleKind = "pick" | "event";

export type ScheduleItem = {
  id: string;
  kind: ScheduleKind;
  title: string;
  startsAt: string;
  endsAt?: string;
  allDay: boolean;
  location?: string;
  description?: string;
  eventUrl?: string;
  ctaUrl?: string;
  timeZone?: string;
};
