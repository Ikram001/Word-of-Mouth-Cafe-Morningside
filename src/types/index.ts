export interface Review {
  reviewer: string;
  stars: string;
  date: string;
  text: string;
  ownerReply: string;
  localGuide: string;
}

export interface CafeData {
  name: string;
  rating: string;
  reviewCount: string;
  address: string;
  phone: string;
  website: string;
  category: string;
  hours: string[];
  description: string;
  google_map_link: string;
  google_map_embed: string;
  socials: string[];
  reviews: Review[];
  photoUrls: string[];
}

export interface ParsedHours {
  day: string;
  hours: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  category: string;
  badge?: string;
}
