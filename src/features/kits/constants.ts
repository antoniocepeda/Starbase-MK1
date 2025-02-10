export const ROBOT_KITS = [
  // Starter Kits
  {
    id: 'rover-explorer-mini',
    name: 'Rover Explorer Mini',
    price: 99.99,
    description: 'Perfect first robot kit! Build a simple rover with basic movements and sensors.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'Starter',
    level: 'Beginner',
    ageRange: '8-12',
    buildTime: '2-3 hours',
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    components: ['Basic controller', 'Motors', 'Wheels', 'LED lights', 'Simple sensors'],
    features: ['Easy assembly', 'Basic movements', 'Light following', 'Sound effects'],
    skills: ['Basic engineering', 'Simple coding', 'Problem solving'],
    includes: ['All components', 'Visual guide', 'Basic app', '1-month support'],
    specifications: {
      dimensions: '15cm x 12cm x 10cm',
      weight: '400g',
      batteryLife: '1 hour',
      programmingMethods: ['Block coding'],
      connectivity: ['Bluetooth']
    }
  },
  {
    id: 'stem-starter-pack',
    name: 'STEM Starter Pack',
    price: 149.99,
    salePrice: 129.99,
    description: 'Complete STEM learning kit with 5 different robots to build and program!',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'Educational',
    level: 'Beginner',
    ageRange: '10-14',
    buildTime: '8-10 hours total',
    rating: 4.9,
    reviewCount: 342,
    inStock: true,
    components: ['Multiple controllers', 'Various motors', 'Sensor pack', 'Building blocks'],
    features: ['5 different projects', 'Progressive learning', 'Guided tutorials'],
    skills: ['STEM fundamentals', 'Basic coding', 'Engineering concepts'],
    includes: ['200+ parts', 'Project guide', 'Learning app', '3-month support'],
    specifications: {
      dimensions: 'Various',
      weight: '1.2kg total',
      batteryLife: '2 hours',
      programmingMethods: ['Block coding', 'Basic Python'],
      connectivity: ['Bluetooth', 'USB']
    }
  },
  {
    id: 'mars-rover-advanced',
    name: 'Mars Rover Advanced',
    price: 299.99,
    description: 'Build a sophisticated Mars rover with advanced sensors and real-time control!',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800',
    category: 'Advanced',
    level: 'Intermediate',
    ageRange: '12-16',
    buildTime: '6-8 hours',
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    components: ['Advanced controller', 'HD camera', 'Multiple sensors', 'Robotic arm'],
    features: ['Camera vision', 'Object detection', 'Path planning', 'Arm control'],
    skills: ['Advanced robotics', 'Computer vision', 'Python programming'],
    includes: ['Premium components', 'Detailed manual', 'Software suite', '6-month support'],
    specifications: {
      dimensions: '30cm x 25cm x 20cm',
      weight: '1.5kg',
      batteryLife: '3 hours',
      programmingMethods: ['Python', 'C++', 'Block coding'],
      connectivity: ['Wi-Fi', 'Bluetooth', 'USB']
    }
  },
  {
    id: 'ai-robotics-kit',
    name: 'AI Robotics Kit',
    price: 499.99,
    description: 'Advanced AI-powered robot with machine learning capabilities!',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    category: 'Advanced',
    level: 'Advanced',
    ageRange: '14+',
    buildTime: '10-12 hours',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    components: ['AI processor', '4K camera', 'Neural network module', 'Advanced sensors'],
    features: ['Machine learning', 'Object recognition', 'Voice control', 'Autonomous navigation'],
    skills: ['AI/ML', 'Advanced programming', 'Data analysis'],
    includes: ['Pro components', 'Cloud access', 'Training data', '1-year support'],
    specifications: {
      dimensions: '35cm x 30cm x 25cm',
      weight: '2kg',
      batteryLife: '4 hours',
      programmingMethods: ['Python', 'TensorFlow', 'Custom AI tools'],
      connectivity: ['Wi-Fi', 'Bluetooth', '5G', 'Ethernet']
    }
  },
  {
    id: 'pro-robotics-lab',
    name: 'Pro Robotics Lab',
    price: 999.99,
    description: 'Complete professional robotics lab with multiple robots and advanced tools!',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    category: 'Pro',
    level: 'Advanced',
    ageRange: '16+',
    buildTime: '20+ hours',
    rating: 5.0,
    reviewCount: 28,
    inStock: true,
    components: ['Multiple robots', 'Pro tools', 'Testing equipment', 'Development boards'],
    features: ['Professional grade', 'Industry standard', 'Research capable'],
    skills: ['Professional robotics', 'Systems engineering', 'Advanced programming'],
    includes: ['Complete lab setup', 'Pro software', 'Training', 'Lifetime support'],
    specifications: {
      dimensions: 'Various',
      weight: '5kg total',
      batteryLife: 'Various',
      programmingMethods: ['All major languages', 'ROS', 'Custom frameworks'],
      connectivity: ['All standard protocols']
    }
  },
  {
    id: 'classroom-bundle',
    name: 'Classroom Bundle (10 Kits)',
    price: 1499.99,
    salePrice: 1299.99,
    description: 'Perfect for schools! 10 complete robot kits with teaching materials.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800',
    category: 'Educational',
    level: 'Beginner',
    ageRange: '10-16',
    buildTime: 'Various',
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    components: ['10 complete kits', 'Spare parts', 'Teaching tools'],
    features: ['Classroom ready', 'Curriculum aligned', 'Group projects'],
    skills: ['STEM education', 'Team building', 'Project management'],
    includes: ['10 robot kits', 'Teaching guide', 'Lesson plans', 'Priority support'],
    specifications: {
      dimensions: 'Storage case included',
      weight: '12kg total',
      batteryLife: '2 hours each',
      programmingMethods: ['Block coding', 'Python', 'JavaScript'],
      connectivity: ['All standard options']
    }
  }
] as const;

export const CATEGORIES = [
  { id: 'starter', name: 'Starter Kits', description: 'Perfect for beginners' },
  { id: 'educational', name: 'Educational Kits', description: 'STEM learning focused' },
  { id: 'advanced', name: 'Advanced Kits', description: 'For serious enthusiasts' },
  { id: 'pro', name: 'Pro Kits', description: 'Professional grade' },
  { id: 'specialty', name: 'Specialty Kits', description: 'Unique projects' }
] as const;

export const SPECIAL_OFFERS = [
  {
    title: 'Early Bird Special',
    description: 'Save 20% on your first kit purchase',
    code: 'FIRST20'
  },
  {
    title: 'Educational Discount',
    description: '15% off for schools and educators',
    code: 'EDU15'
  },
  {
    title: 'Bundle & Save',
    description: 'Buy 2 kits, get 1 free accessory',
    code: 'BUNDLE2'
  }
] as const;