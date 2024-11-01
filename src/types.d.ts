export interface SocialLink {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  city: string;
  country: string;
  bio: string;
  avatar: string;
  social: SocialLink[];
}