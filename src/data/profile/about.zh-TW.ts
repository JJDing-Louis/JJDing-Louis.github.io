import type { AboutProfile } from "./about.types";

export const aboutZhTw: AboutProfile = {
  profileTitle: "C# Backend Engineer | System Integration Developer",
  profileSubtitle: "Profile",
  profileSummaryLines: [
    "專注於企業系統開發、API設計與資料整合，",
    "具備 AOI影像系統與後端架構實務經驗。"
  ],
  portraitAlt: "Louis 個人照片",
  heroLinks: [
    { label: "About me", href: "/about" },
    { label: "查看作品", href: "/products" },
    { label: "GitHub", href: "https://github.com/JJDing-Louis", external: true }
  ],
  aboutMe: {
    title: "About Me",
    subtitle: "自我介紹",
    summaryLines: [
      "具備 8+ 年軟體與工程經驗，從光學檢測系統跨入軟體開發，",
      "目前專注於 C# 後端與系統整合開發。",
      "曾參與：",
      "- AOI影像處理系統開發（Halcon + C#）",
      "- 後端API設計與平台開發",
      "- 客製化系統整合與資料串接",
      "擅長將實務需求轉換為穩定的系統架構。"
    ]
  },
  projectsTitle: "Projects",
  projectItems: [
    {
      title: "AOI Optical Inspection System",
      bullets: [
        "使用 Halcon + C# 開發影像檢測演算法",
        "協助機台參數調整與異常排除",
        "提供客戶端調整與教育訓練"
      ],
      tech: ["C#", "Halcon", "Image Processing"]
    },
    {
      title: "Enterprise Backend System",
      bullets: [
        "設計與開發後端 API",
        "建置後台管理系統",
        "與前端協作完成系統功能"
      ],
      tech: ["C#", "ASP.NET MVC", "MSSQL"]
    },
    {
      title: "Optical System Evaluation",
      bullets: [
        "設計光學組合（CCD / Lens / Light）",
        "分析影像辨識結果",
        "撰寫測試報告與文件"
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
