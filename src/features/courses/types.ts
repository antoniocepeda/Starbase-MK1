export interface Course {
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: number;
  image: string;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}