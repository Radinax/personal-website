import {
  Code,
  Layers,
  Settings,
  Target,
  Zap,
  Brain,
  Users,
} from "lucide-react"; // Importing new icons for new categories

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="text-red-500" size={24} />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Node.js (for backend understanding/full-stack context)", // Added: Important for a Lead, especially with Microservices & backend knowledge
    ],
  },
  {
    title: "State & Data Management", // Renamed category to be more specific
    icon: <Settings className="text-slate-600" size={24} />, // Reusing Settings or could be new icon
    skills: [
      "Redux Toolkit",
      "React Query", // Crucial for Memorable AI
      "Zustand", // Crucial for Memorable AI
      "Apollo Client", // If you use this for GraphQL, it's a key skill
      "Context API", // General React state management
    ],
  },
  {
    title: "UI/UX & Design Systems", // New category for design system/UI focus
    icon: <Layers className="text-purple-600" size={24} />,
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI", // If you've worked with it significantly
      "Figma (for collaboration/understanding design)", // If you collaborate with designers using Figma
      "Responsive Design",
      "Accessibility (A11y)", // Very important for modern web
    ],
  },
  {
    title: "Backend & Architecture Concepts", // Renamed and expanded
    icon: <Zap className="text-yellow-600" size={24} />, // New icon to represent backend/infra
    skills: [
      "GraphQL",
      "RESTful APIs",
      "Microservices Architecture",
      "CI/CD Pipelines",
      "Docker",
      "AWS (Cloud Platforms)",
      "Node.js (Backend)",
      "MongoDB (Database familiarity)",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    icon: <Target className="text-emerald-600" size={24} />,
    skills: [
      "Cypress",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing (E2E)",
      "Code Reviews",
      "Test-Driven Development (TDD)",
    ],
  },
  {
    title: "AI & Data Visualization",
    icon: <Brain className="text-blue-500" size={24} />,
    skills: [
      "AI/ML Integration",
      "Large Language Models (LLMs)",
      "Real-time Data Visualization",
      "Data Analysis & Transformation (Frontend)",
      "Chart.js / Recharts",
    ],
  },
  {
    title: "Leadership & Process",
    icon: <Users className="text-orange-500" size={24} />,
    skills: [
      "Team Leadership & Mentorship",
      "Agile Methodologies (Scrum/Kanban)",
      "Technical Debt Management",
      "Code Quality & Guidelines",
      "Cross-functional Collaboration",
    ],
  },
];
