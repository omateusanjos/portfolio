export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  descriptions: string[];
  logoId: string;
}

export interface Education {
  degree: string;
  institution: string;
  logoId: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface AiTool {
  name: string;
  icon: string;
  description: string;
  logoId: string;
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  languages: Language[];
  aiTools: AiTool[];
}

export const resume: Resume = {
  name: "Mateus Anjos",
  title: "Staff Frontend Engineer & Tech Lead",
  location: "São Paulo, Brazil",
  email: "mateusanjosmgb@gmail.com",
  linkedin: "linkedin.com/in/mateus-anjos",
  summary:
    "Staff Frontend Engineer & Tech Lead with over 9 years of experience in frontend development, software architecture, and building scalable web applications. Proven track record in technical leadership, setting engineering standards, technical governance, and team structuring in high-growth environments.\n\nSpecialist in performance, scalability, reliability, and cost optimization, with experience in frontend architecture migration and micro frontend implementation. Strong track record in creating reusable libraries and code standardization for efficiency and maintainability.\n\nProficient in React, Next.js, TypeScript, Node.js, and .NET, along with modern observability, CI/CD, and platform engineering practices. Experience in cross-functional collaboration with Product, Design, and Engineering teams to deliver high-impact solutions.\n\nInvolved in structuring AI initiatives applied to development, promoting the use of artificial intelligence as a productivity accelerator and code co-authoring among frontend developers.",
  skills: [
    {
      category: "Frontend & Languages",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Architecture & Engineering",
      items: [
        "Scalable Architecture",
        "Design Systems",
        "Micro Frontends",
        "REST APIs",
        "Componentization",
        "Clean Architecture",
      ],
    },
    {
      category: "Quality & Observability",
      items: [
        "Jest",
        "Cypress",
        "Playwright",
        "Datadog",
        "Sentry",
        "Monitoring & Logging",
        "CI/CD",
        "E2E Testing",
      ],
    },
    {
      category: "Rendering Strategies",
      items: ["SSR", "SSG", "ISR", "CSR", "DSG", "Edge SSR"],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS (S3, Lambda, API Gateway, ECS, EKS, Route 53, CloudFront, DynamoDB, Cognito, SQS, EventBridge, CloudWatch, X-Ray)",
        "Amplify",
      ],
    },
    {
      category: "Leadership",
      items: [
        "Team Management",
        "Technical Mentoring",
        "Strategic Planning",
        "Stakeholder Management",
      ],
    },
    {
      category: "AI Assistants",
      items: ["AWS Kiro", "GitHub Copilot", "Claude"],
    },
    {
      category: "Documentation & Governance",
      items: [
        "RFCs",
        "Governance Guidelines",
        "Technical Roadmap",
        "Trade-off Decisions",
        "ADRs",
      ],
    },
  ],
  experience: [
    {
      title: "Tech Lead",
      company: "Aarin (Bradesco Group)",
      period: "2023 – Present",
      logoId: "aarin",
      descriptions: [
        "Led up to 5 teams averaging 3–4 frontend engineers each",
        "Drove initiatives beyond day-to-day demands, strengthening the company's frontend chapter culture",
        "Analytics and event tracking governance using Amplitude (autocapture and cost optimization)",
        "Built large-scale multi-tenant white-label platforms (Credicoamo, Bradesco Consórcio)",
        "Implemented digital onboarding with biometrics (UNICO SDK) and digital signature",
        "Created Design System using Radix primitives and Docusaurus documentation",
        "Developed reusable component library for sharing across the consortium ecosystem",
        "Led application migration from Next.js 14 to Next.js 15",
        "Established company-wide CSP security controls",
        "Defined frontend SLOs/SLIs and performance/security KPI dashboards",
        "Implemented Micro Frontends with Lit.dev and Module Federation + Vite",
        "Integrated AI assistants: AWS Kiro and GitHub Copilot",
        "Managed AWS infrastructure: S3, API Gateway, SQS, Lambdas, Route 53, DynamoDB, Amplify",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Aarin (Bradesco Group)",
      period: "2023 – 2024",
      logoId: "aarin",
      descriptions: [
        "Migrated applications from Next.js 12 to Next.js 14",
        "Migrated styling from Stitches to PandaCSS",
        "Implemented automated E2E testing and Sentry observability",
        "Built Bradesco as a Service platform",
        "Implemented KYC and account opening integrations",
        "Optimized CI/CD pipeline (GitLab + Docker)",
        "Developed regulatory features (BACEN)",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Iteris & Briteris",
      period: "2022 – 2023",
      logoId: "iteris-briteris",
      descriptions: [
        "Built real-time communication platform integrated with META APIs",
        "Developed C&A TALK — in-store QR code to video agent experience",
        "Mentored client developers transitioning from Angular to React",
        "Implemented WebSockets, push notifications, and geolocation APIs",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Whirlpool (WPP / Jüssi)",
      period: "2021 – 2022",
      logoId: "whirlpool",
      descriptions: [
        "Implemented Augmented Reality (AR) for Brastemp products",
        "Built live streaming 'live + sales' platform (Compra Certa)",
        "Developed on VTEX (Legacy and VTEX IO)",
        "Implemented PWA for Whirlpool products",
        "Managed Webpack configuration and optimization",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Mevo - Receita Digital",
      period: "2021 – 2022",
      logoId: "mevo",
      descriptions: [
        "Created medical prescription interoperability inspired by banking clearing model (SPB/CIP)",
        "Established code governance standards (PRs, codebase) for consistency and quality",
        "Authored architectural UML documentation (via MIRO) and provided continuous technical mentoring on FHIR R4 standard",
        "Contributed to startup valuation and multi-million acquisition process with InovaCIP as strategic asset",
      ],
    },
    {
      title: "Mid-Level Software Engineer",
      company: "Shift Inc",
      period: "2019 – 2021",
      logoId: "shift",
      descriptions: [
        "Served clients including Grupo Vulcabras, Under Armour, Mizuno, Olympikus, Nissan, Julio Okubo, Azaleia, Aramis, Projeto Verão, and Cecilia Prado",
        "Built e-commerce solutions with VTEX/VTEX IO, React hooks, and legacy class components",
        "Enforced code review process and structured Gitflow",
        "Worked in Kanban multidisciplinary teams",
      ],
    },
  ],
  education: [
    {
      degree: "MBA in Artificial Intelligence Applied to Business Management",
      institution: "Fundação Dom Cabral",
      logoId: "fdc",
    },
    {
      degree: "MBA in Management, Entrepreneurship, and Business Development",
      institution: "PUCRS",
      logoId: "pucrs",
    },
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "Universidade Estácio de Sá",
      logoId: "estacio",
    },
  ],
  certifications: ["VTEX IO Developer", "VTEX Implementation Expert"],
  languages: [
    { language: "Portuguese", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Spanish", level: "Advanced" },
  ],
  aiTools: [
    {
      name: "AWS Kiro",
      icon: "aws",
      description: "AI assistant integrated with the AWS ecosystem for infrastructure insights and code generation",
      logoId: "aws",
    },
    {
      name: "GitHub Copilot",
      icon: "copilot",
      description: "AI pair programmer used across teams to accelerate frontend development and code quality",
      logoId: "github",
    },
    {
      name: "Claude",
      icon: "claude",
      description: "Advanced AI assistant for architectural decisions, code reviews, and technical documentation",
      logoId: "claude",
    },
  ],
};
