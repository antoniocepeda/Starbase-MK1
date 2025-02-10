export interface RobotKit {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  image: string;
  category: 'Starter' | 'Educational' | 'Advanced' | 'Pro' | 'Specialty';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  ageRange: string;
  buildTime: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  components: string[];
  features: string[];
  skills: string[];
  includes: string[];
  specifications: {
    dimensions: string;
    weight: string;
    batteryLife: string;
    programmingMethods: string[];
    connectivity: string[];
  };
}