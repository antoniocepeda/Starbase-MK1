export const CLASS_PROGRAMS = [
  {
    title: "Junior Space Engineers",
    description: "Perfect for beginners! Students learn the basics of robotics through hands-on projects and fun experiments.",
    ageGroup: "Ages 8-12",
    duration: "8 weeks",
    maxStudents: 12,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    schedule: [
      { day: "Monday", time: "3:30 PM - 5:00 PM", spots: 4 },
      { day: "Wednesday", time: "3:30 PM - 5:00 PM", spots: 6 },
      { day: "Saturday", time: "10:00 AM - 11:30 AM", spots: 3 }
    ]
  },
  {
    title: "Advanced Robotics Lab",
    description: "Deep dive into complex robotics concepts, programming, and advanced construction techniques.",
    ageGroup: "Ages 13-16",
    duration: "12 weeks",
    maxStudents: 10,
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800",
    schedule: [
      { day: "Tuesday", time: "4:00 PM - 6:00 PM", spots: 5 },
      { day: "Thursday", time: "4:00 PM - 6:00 PM", spots: 2 },
      { day: "Saturday", time: "1:00 PM - 3:00 PM", spots: 4 }
    ]
  },
  {
    title: "Space Mission Specialists",
    description: "Elite program focusing on advanced space robotics, mission planning, and team leadership.",
    ageGroup: "Ages 15-18",
    duration: "16 weeks",
    maxStudents: 8,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    schedule: [
      { day: "Monday", time: "5:30 PM - 7:30 PM", spots: 3 },
      { day: "Friday", time: "4:00 PM - 6:00 PM", spots: 5 },
      { day: "Saturday", time: "3:30 PM - 5:30 PM", spots: 2 }
    ]
  }
] as const;

export const FACILITIES = [
  {
    name: "Main Robotics Lab",
    description: "State-of-the-art facility equipped with the latest robotics technology and tools",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Testing Arena",
    description: "Large space for testing robots and conducting simulated space missions",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Design Studio",
    description: "Creative space for planning, 3D printing, and prototyping robot components",
    image: "https://images.unsplash.com/photo-1581092334247-ddef2a41a4f7?auto=format&fit=crop&q=80&w=800"
  }
] as const;

export const INSTRUCTORS = [
  {
    name: "Dr. Sarah Martinez",
    role: "Lead Robotics Instructor",
    bio: "Former NASA engineer with 15 years of experience in space robotics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    specialties: ["Robot Design", "Space Systems", "AI & Automation"]
  },
  {
    name: "Prof. James Chen",
    role: "Senior Technical Instructor",
    bio: "Robotics PhD with expertise in autonomous systems and control theory",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    specialties: ["Programming", "Control Systems", "Sensor Integration"]
  },
  {
    name: "Dr. Emily Williams",
    role: "Youth Program Director",
    bio: "Specialized in STEM education and youth robotics programs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    specialties: ["Educational Robotics", "Project-Based Learning", "Team Leadership"]
  }
] as const;

export const PRICING_PLANS = [
  {
    name: "Discovery Package",
    price: 299,
    duration: "2 Weeks",
    features: [
      "4 hands-on sessions",
      "Basic robotics kit included",
      "Small group instruction",
      "Access to main lab",
      "Certificate of completion",
      "Option to upgrade to full program"
    ],
    ctaText: "Start Your Journey"
  },
  {
    name: "Space Explorer Program",
    price: 2499,
    duration: "12 Weeks",
    features: [
      "24 intensive sessions",
      "Advanced robotics kit ($500 value)",
      "1-on-1 mentoring sessions",
      "Competition preparation",
      "All facilities access",
      "Project showcase event",
      "Official certification"
    ],
    isPopular: true,
    ctaText: "Enroll Now"
  },
  {
    name: "Mission Commander",
    price: 4999,
    duration: "24 Weeks",
    features: [
      "48 mastery sessions",
      "Pro robotics kit ($1200 value)",
      "Private instructor",
      "Competition entry fees included",
      "VIP facility access",
      "Industry internship placement",
      "College recommendation letter",
      "Lifetime alumni benefits"
    ],
    ctaText: "Apply Now"
  }
] as const;