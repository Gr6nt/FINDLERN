import { Tutor } from "../types";

export const tutors: Tutor[] = [
  {
    id: "1",
    name: "Sarah Chen",
    photo: "https://images.unsplash.com/photo-1758875569897-5e214ccc4e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0dXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc2MzUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    skill: "Excel VLOOKUP & Pivot Tables",
    rating: 4.9,
    reviewCount: 127,
    pricePerHour: 45,
    bio: "Microsoft Certified Excel Expert with 8 years of experience teaching business professionals. I specialize in making complex formulas simple and practical.",
    expertise: ["Excel Advanced", "Data Analysis", "Power Query", "Macros", "Business Analytics"],
    availableIn: "Available in 30 mins",
    location: "Remote",
    availability: [
      { day: "Today", slots: ["2:00 PM", "4:30 PM", "6:00 PM"] },
      { day: "Tomorrow", slots: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"] },
      { day: "Friday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] }
    ]
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    photo: "https://images.unsplash.com/photo-1659355751209-2e6c7c8091fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY0NjgxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    skill: "Python Programming",
    rating: 5.0,
    reviewCount: 243,
    pricePerHour: 60,
    bio: "Senior Software Engineer at Google. I teach Python from basics to advanced topics including web development, data science, and automation.",
    expertise: ["Python", "Django", "Machine Learning", "Data Science", "API Development"],
    availableIn: "Available in 1 hour",
    location: "Remote",
    availability: [
      { day: "Today", slots: ["5:00 PM", "7:00 PM"] },
      { day: "Tomorrow", slots: ["2:00 PM", "4:00 PM", "6:00 PM"] },
      { day: "Friday", slots: ["10:00 AM", "3:00 PM", "5:00 PM"] }
    ]
  },
  {
    id: "3",
    name: "Emma Thompson",
    photo: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBoYXBweXxlbnwxfHx8fDE3NjQ3MjgwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    skill: "Calculus & AP Math",
    rating: 4.8,
    reviewCount: 189,
    pricePerHour: 50,
    bio: "PhD in Mathematics with 10+ years of tutoring experience. I help students ace their exams and truly understand the concepts.",
    expertise: ["Calculus", "Algebra", "Trigonometry", "AP Math", "SAT Math"],
    availableIn: "Available now",
    location: "Remote",
    availability: [
      { day: "Today", slots: ["Now", "3:00 PM", "5:00 PM", "8:00 PM"] },
      { day: "Tomorrow", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["10:00 AM", "2:00 PM", "6:00 PM"] }
    ]
  },
  {
    id: "4",
    name: "David Kim",
    photo: "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjQ3MzkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    skill: "Guitar (Acoustic & Electric)",
    rating: 4.9,
    reviewCount: 156,
    pricePerHour: 40,
    bio: "Professional guitarist and music teacher. I've taught over 500 students from complete beginners to advanced players.",
    expertise: ["Acoustic Guitar", "Electric Guitar", "Music Theory", "Fingerstyle", "Rock & Blues"],
    availableIn: "Available in 2 hours",
    location: "Remote",
    availability: [
      { day: "Today", slots: ["6:00 PM", "8:00 PM"] },
      { day: "Tomorrow", slots: ["3:00 PM", "5:00 PM", "7:00 PM"] },
      { day: "Friday", slots: ["4:00 PM", "6:00 PM", "8:00 PM"] }
    ]
  },
  {
    id: "5",
    name: "Lisa Anderson",
    photo: "https://images.unsplash.com/photo-1659100947220-48b5d5738148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwcHJvZmVzc2lvbmFsJTIwcGhvdG98ZW58MXx8fHwxNzY0NzczNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    skill: "JavaScript & React",
    rating: 4.7,
    reviewCount: 201,
    pricePerHour: 55,
    bio: "Full-stack developer with expertise in modern web development. I make coding fun and accessible for everyone.",
    expertise: ["JavaScript", "React", "Node.js", "HTML/CSS", "TypeScript"],
    availableIn: "Available in 45 mins",
    location: "Remote",
    availability: [
      { day: "Today", slots: ["3:30 PM", "5:30 PM"] },
      { day: "Tomorrow", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["11:00 AM", "1:00 PM", "3:00 PM"] }
    ]
  },
  {
    id: "6",
    name: "James Wilson",
    photo: "https://images.unsplash.com/photo-1758685848226-eedca8f6bce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRvciUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzY0NzczNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    skill: "Spanish Conversation",
    rating: 5.0,
    reviewCount: 312,
    pricePerHour: 35,
    bio: "Native Spanish speaker from Barcelona. I focus on conversational skills to help you become fluent quickly.",
    expertise: ["Spanish", "Conversation", "Grammar", "Business Spanish", "Culture"],
    availableIn: "Available now",
    location: "Remote",
    availability: [
      { day: "Today", slots: ["Now", "2:30 PM", "4:00 PM", "7:00 PM"] },
      { day: "Tomorrow", slots: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"] },
      { day: "Friday", slots: ["10:00 AM", "1:00 PM", "5:00 PM"] }
    ]
  }
];

export const categories = [
  { id: "math", name: "Math", icon: "Calculator" },
  { id: "coding", name: "Coding", icon: "Code" },
  { id: "guitar", name: "Guitar", icon: "Music" },
  { id: "languages", name: "Languages", icon: "Globe" },
  { id: "business", name: "Business", icon: "Briefcase" }
];
