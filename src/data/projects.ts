export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  images: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "sports-facility-booking",
    title: "Sports Facility Booking System",
    description:
      "Backend API for managing sports facility bookings with authentication, RBAC, and booking conflict prevention.",
    overview:
      "Built a RESTful backend system focused on secure booking workflows, role-based access control, and time-slot validation. Designed to handle real-world scheduling logic.",
    features: [
      "JWT-based authentication",
      "Role-based access control (RBAC)",
      "Booking conflict detection",
      "Payable amount calculation",
      "Standardized error handling",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "RBAC",
    ],
    images: ["public/images/full_stack/sports_facility/landing_page.png"],
    demoUrl: "https://sports-facility-booking-frontend-five.vercel.app/",
    githubUrl:
      "https://github.com/arju10/Sports-Facility-Booking-Platform-Backend",
  },

  {
    id: "smart-finance-ai",
    title: "Smart Finance AI",
    description:
      "Backend-focused AI-driven personal finance platform with secure authentication, background jobs, and AI-powered insights.",
    overview:
      "Designed and implemented backend services for a production-ready finance application. Responsible for API design, database schema, authentication, background jobs, and AI integrations. Frontend used mainly to consume backend APIs.",
    features: [
      "Secure authentication and session management",
      "Account and transaction management APIs",
      "AI-powered receipt scanning",
      "Automated monthly reports via background jobs",
      "Rate limiting and bot protection",
    ],
    technologies: [
      "Node.js",
      "Next.js API Routes",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk Auth",
      "Google Generative AI",
      "Inngest",
      "Docker",
      "Vercel",
    ],
    images: ["public/images/full_stack/smart_finance_ai/dashboard.png"],
    demoUrl: "https://smart-finance-ai-tau.vercel.app/",
    githubUrl: "https://github.com/arju10/smart-finance-ai",
  },
  {
    id: "career-launchpad-ai",
    title: "Career Launchpad AI",
    description:
      "AI-powered career assistance platform focused on backend APIs, AI workflows, and scheduled background tasks.",
    overview:
      "Built backend logic for AI-driven career tools including resume generation, mock interviews, and industry insights. Implemented authentication, database models, and cron-based AI jobs.",
    features: [
      "User authentication and onboarding",
      "AI-generated resumes and cover letters",
      "Mock interview question generation",
      "Weekly industry insights using scheduled jobs",
      "Downloadable AI-generated documents",
    ],
    technologies: [
      "Node.js",
      "Next.js API Routes",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk Auth",
      "Google Gemini AI",
      "Inngest",
      "Vercel",
    ],
    images: [
      "public/images/full_stack/Career-Launchpad-AI/interview_preparation_after_taking_exam.png",
    ],
    demoUrl: "https://career-launchpad-ai.vercel.app/",
    githubUrl: "https://github.com/arju10/Career-Launchpad-AI",
  },
  {
    id: "butterfly-species-classifier",
    title: "Butterfly Species Classifier",
    description:
      "Deep learning–based image classification system for identifying butterfly species with confidence-aware predictions.",
    overview:
      "Developed an AI/ML system using transfer learning to classify 75 butterfly species. Focused on model training, evaluation, inference logic, and deployment using Docker.",
    features: [
      "Image-based species classification",
      "Confidence-aware prediction interpretation",
      "Top-5 alternative predictions",
      "Model performance evaluation and analysis",
      "Dockerized deployment",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Transfer Learning",
      "Streamlit",
      "Docker",
      "Plotly",
    ],
    images: [
      "public/images/ai_ml/butterfly_species_classifier/main_interface.png",
    ],
    demoUrl: "https://butterfly-species-classifier.streamlit.app/",
    githubUrl: "https://github.com/arju10/butterfly-species-classifier",
  },
  {
    id: "bangla-agricultural-chatbot",
    title: "Bangla Agricultural Advisor Chatbot",
    description:
      "AI-powered Django backend system providing agricultural advice through text, voice, and image-based interactions in Bangla.",
    overview:
      "Implemented backend logic to process Bengali text queries, voice input, and crop disease images using NLP and deep learning models. Focused on ML inference, request handling, and system integration.",
    features: [
      "Bangla text-based query processing",
      "Voice-to-text agricultural queries",
      "Crop disease detection from images",
      "ML model inference inside backend",
      "Dataset-driven response matching",
    ],
    technologies: [
      "Python",
      "Django",
      "TensorFlow",
      "NLP (TF-IDF, Cosine Similarity)",
      "Speech Recognition",
      "Computer Vision",
      "Docker",
    ],
    images: [
      "public/images/ai_ml/bangla-agricultural-advisor-chatbot/interface.png",
    ],
    demoUrl: "https://bangla-agricultural-advisor-chatbot.vercel.app/",
    githubUrl:
      "https://github.com/arju10/Bangla-Agricultural-Advisor-Chatbot-using-django",
  },
];