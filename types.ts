import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  colSpan: string;
  rowSpan: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  text: string;
  role: string;
}
