import type { AboutProfile } from "./about.types";

export const aboutEn: AboutProfile = {
  profileTitle: "C# Backend Engineer | System Integration Developer",
  profileSubtitle: "Profile",
  profileSummaryLines: [
    "Focused on enterprise system development, API design, and data integration,",
    "with practical experience in AOI imaging systems and backend architecture."
  ],
  portraitAlt: "Portrait of Louis",
  heroLinks: [
    { label: "About me", href: "/en/about" },
    { label: "View Projects", href: "/en/products" },
    { label: "GitHub", href: "https://github.com/JJDing-Louis", external: true }
  ],
  aboutMe: {
    title: "About Me",
    subtitle: "Introduction",
    summaryLines: [
      "With 8+ years of software and engineering experience, I moved from optical inspection systems into software development.",
      "My current focus is C# backend and system integration development.",
      "Experience includes:",
      "- AOI image processing system development (Halcon + C#)",
      "- Backend API design and platform development",
      "- Customized system integration and data connectivity",
      "I am good at turning practical requirements into stable system architecture."
    ]
  },
  projectsTitle: "Projects",
  projectItems: [
    {
      title: "AOI Optical Inspection System",
      bullets: [
        "Developed image inspection algorithms with Halcon + C#",
        "Supported machine parameter tuning and issue troubleshooting",
        "Provided client-side adjustment support and training"
      ],
      tech: ["C#", "Halcon", "Image Processing"]
    },
    {
      title: "Enterprise Backend System",
      bullets: [
        "Designed and developed backend APIs",
        "Built administration systems",
        "Collaborated with frontend developers to complete system features"
      ],
      tech: ["C#", "ASP.NET MVC", "MSSQL"]
    },
    {
      title: "Optical System Evaluation",
      bullets: [
        "Designed optical combinations such as CCD, lens, and lighting",
        "Analyzed image recognition results",
        "Prepared test reports and documentation"
      ]
    }
  ],
  skillsTitle: "Skills",
  skillGroups: [
    {
      title: "Backend",
      items: ["C#", "ASP.NET", "API Design"]
    },
    {
      title: "Database",
      items: ["MSSQL", "Oracle", "CouchDB"]
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "jQuery", "KendoUI"]
    },
    {
      title: "Other",
      items: ["Dapper", "Git", "System Integration"]
    }
  ]
};
