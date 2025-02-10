export const COURSES = [
  {
    title: "Introduction to Space Robotics",
    description: "Learn the fundamentals of robotics engineering for space applications",
    duration: "6 weeks",
    students: "2,500+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Advanced Robot Programming",
    description: "Master programming autonomous systems for space exploration",
    duration: "8 weeks",
    students: "1,800+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Robot Design & Construction",
    description: "Build your own space-ready robotic systems from scratch",
    duration: "10 weeks",
    students: "1,200+",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1581092334247-ddef2a41a4f7?auto=format&fit=crop&q=80&w=800"
  }
] as const;

export const PRICING_TIERS = [
  {
    name: "Explorer",
    price: 49,
    features: [
      "Access to basic courses",
      "Community forum access",
      "Monthly Q&A sessions",
      "Basic certification"
    ]
  },
  {
    name: "Astronaut",
    price: 99,
    features: [
      "Access to all courses",
      "Priority support",
      "Weekly live sessions",
      "Advanced certification",
      "1-on-1 mentoring"
    ],
    isPopular: true
  },
  {
    name: "Mission Commander",
    price: 199,
    features: [
      "Everything in Astronaut",
      "Custom learning path",
      "Career guidance",
      "Industry networking",
      "Robot kit included"
    ]
  }
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "High School Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    quote: "The online courses helped me build my first robot and sparked my passion for space engineering!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Robotics Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Incredible platform with hands-on projects that really prepare you for real-world robotics.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "STEM Teacher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "The course content is exceptional. My students love the interactive learning experience!",
    rating: 5
  }
] as const;