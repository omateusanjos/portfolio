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

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
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
  testimonials: Testimonial[];
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
        "S3",
        "Lambda",
        "API Gateway",
        "ECS",
        "EKS",
        "Route 53",
        "CloudFront",
        "DynamoDB",
        "Cognito",
        "SQS",
        "EventBridge",
        "CloudWatch",
        "X-Ray",
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
      items: ["AWS Kiro", "GitHub Copilot", "Claude", "opencode"],
    },
    {
      category: "AI Engineering",
      items: [
        "Loop Engineering",
        "Graph Engineering",
        "Sub-Agent Orchestration",
        "Enterprise Harness (25+ teams)",
      ],
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
        "Led 5 cross-functional squads (15+ frontend engineers), reducing onboarding time for new hires by 50%",
        "Drove frontend chapter culture initiatives adopted by 25+ engineers across the organization",
        "Implemented Amplitude event governance cutting analytics costs by 40% while maintaining 99.9% event data reliability",
        "Architected multi-tenant white-label platform serving 2M+ users across 3 business units, compressing new tenant setup from 6 months to 3 weeks",
        "Delivered biometric onboarding (UNICO SDK) achieving 85% conversion rate and 60% reduction in dropout vs previous flow",
        "Built company-wide Design System (Radix + Docusaurus) adopted by 8 product teams, reducing UI development time by 35%",
        "Developed reusable component library published to 3 internal packages, shared across the consortium ecosystem",
        "Led Next.js 14→15 migration across 5 applications with zero production incidents",
        "Implemented CSP controls that blocked 100% of XSS vectors in pentest — zero critical findings",
        "Defined SLOs/SLIs improving Lighthouse scores from 65 to 92 and reducing P95 load time by 45%",
        "Designed Micro Frontend architecture (Lit.dev + Module Federation) enabling 4 squads to deploy independently, cutting cross-team dependencies by 80%",
        "Deployed AI assistants (AWS Kiro + GitHub Copilot) across the frontend chapter, reducing PR cycle time by 30%",
        "Managed 15+ AWS services sustaining 99.95% uptime and optimizing $200K+/month cloud spend",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Aarin (Bradesco Group)",
      period: "2023 – 2024",
      logoId: "aarin",
      descriptions: [
        "Led Next.js 12→14 migration across 3 production apps, reducing bundle size by 30% and TTFB by 40%",
        "Migrated Stitches→PandaCSS eliminating 15K+ lines of dead CSS and speeding up builds by 60%",
        "Built E2E suite (Playwright) covering 90% of critical paths, cutting production bugs by 70%",
        "Developed Bradesco as a Service platform handling 100K+ daily API requests at <200ms P99 latency",
        "Implemented KYC flows processing 50K+ verifications with 99.5% approval accuracy",
        "Optimized CI/CD pipeline (GitLab + Docker) from 18min to 6min via parallel job orchestration",
        "Delivered regulatory features (BACEN) on schedule for 3 consecutive audit cycles with zero findings",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Iteris & Briteris",
      period: "2022 – 2023",
      logoId: "iteris-briteris",
      descriptions: [
        "Architected real-time platform handling 1M+ daily WhatsApp messages via META APIs at <500ms delivery latency",
        "Launched C&A TALK (QR→video agent) reaching 50K+ monthly interactions across 200+ physical stores",
        "Mentored 3 client teams (12+ devs) in Angular→React migration, reducing ramp-up time by 50%",
        "Implemented WebSockets, push notifications, and geolocation for 100K+ daily active users",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Whirlpool (WPP / Jüssi)",
      period: "2021 – 2022",
      logoId: "whirlpool",
      descriptions: [
        "Delivered AR product viewer for Brastemp increasing online conversion by 22% and reducing product returns by 15%",
        "Built live-commerce platform (Compra Certa) generating $500K+ gross sales in the first 3 months",
        "Developed on VTEX (Legacy + VTEX IO) delivering 4 major e-commerce projects on schedule",
        "Implemented PWA achieving 95+ Lighthouse PWA score and 2x repeat visit rate",
        "Optimized Webpack reducing bundle size by 45% and cold builds from 60s to 12s",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Mevo - Receita Digital",
      period: "2021 – 2022",
      logoId: "mevo",
      descriptions: [
        "Created medical prescription interoperability standard inspired by banking clearing model (SPB/CIP), processing 10K+ daily transactions",
        "Established code governance standards adopted by 15+ engineers, reducing PR merge time by 40%",
        "Authored architectural UML documentation + mentored team on FHIR R4 standard, enabling 2x velocity on new integrations",
        "Technology contributed to company valuation of R$40M+, leading to successful acquisition by InovaCIP",
      ],
    },
    {
      title: "Mid-Level Software Engineer",
      company: "Shift Inc",
      period: "2019 – 2021",
      logoId: "shift",
      descriptions: [
        "Delivered 8+ VTEX e-commerce storefronts for Under Armour, Mizuno, Nissan, and 7 other brands, averaging 90+ Lighthouse scores",
        "Built e-commerce solutions with VTEX/VTEX IO processing 1M+ monthly pageviews across client portfolio",
        "Enforced code review process and Gitflow across 4 concurrent projects, maintaining <24h average review turnaround",
        "Worked in Kanban teams delivering 2-week sprints with 95% on-time delivery rate",
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
  testimonials: [
    {
      quote: "No período em que trabalhei com o Mateus, pude perceber o potencial que ele possuía para ajudar as pessoas, com empatia e imensa habilidade técnica. O patamar atual dele é apenas uma consequência de suas habilidades profissionais e sociais. Ele amadureceu muito, solidificando seus conhecimentos de tal maneira que agora auxilia outros profissionais em diversos estágios de carreira.",
      author: "Mauricio Kitazawa",
      role: "Senior Frontend Engineer (former teammate)",
    },
    {
      quote: "Mateus is an excellent professional. I had the opportunity to work directly with him for almost a year, and during this time I was sure that he would become a great professional, both for his leadership profile and technical mastery.",
      author: "Celso Junior",
      role: "Software Engineer (former teammate)",
    },
    {
      quote: "Mateus foi um achado no meio de um furacão — desenvolvedor dedicado e com garra. Trouxe inovação para a equipe, tornando-se líder no que entrava, acionado constantemente para resoluções de problemas urgentes, nunca deixou a equipe na mão e sempre foi muito prestativo ao ajudar os demais. Muito orgulhosa de poder ter trabalhado com ele.",
      author: "Márjori Tamise de Carvalho Souza",
      role: "Group Tech Manager (former manager)",
    },
  ],
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
    {
      name: "opencode",
      icon: "opencode",
      description: "AI-powered CLI tool for agent orchestration, automated codebase analysis, and software engineering workflows",
      logoId: "opencode",
    },
  ],
};
