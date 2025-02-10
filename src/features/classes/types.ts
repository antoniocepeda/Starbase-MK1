export interface ClassSchedule {
  day: string;
  time: string;
  spots: number;
}

export interface ClassProgram {
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  maxStudents: number;
  image: string;
  schedule: ClassSchedule[];
}

export interface Facility {
  name: string;
  description: string;
  image: string;
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface PricingPlan {
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}