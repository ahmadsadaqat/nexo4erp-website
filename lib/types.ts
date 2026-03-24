import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface IndustryPackage {
  name: string;
  price: string;
  features: string[];
}

export interface IndustryModule {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  heroHeadline: string;
  heroSubheadline: string;
  bgImage: string;
  painPoints: { problem: string; result: string }[];
  solvesDescription: string;
  packages: IndustryPackage[];
  coreModules: IndustryModule[];
  addOns: { name: string; description: string }[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureTab {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    points: string[];
}

export interface PackageTier {
  name: string;
  description: string;
  target: string;
  modules: string[];
  isPopular?: boolean;
  category?: 'ERP' | 'HRMS';
}

export interface Integration {
  name: string;
  logo: string;
  description: string;
}

export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
}