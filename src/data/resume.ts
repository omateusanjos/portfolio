export interface SkillCategory {
  category: string;
  items: string[];
}

export type ExperienceMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      label: string;
      description: string;
      caption?: string;
      captions?: {
        src: string;
        srcLang: string;
        label: string;
      };
    };

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  descriptions: string[];
  logoId: string;
  media?: ExperienceMedia;
  clientLogos?: { src: string; alt: string; description: string; url: string }[];
}

export interface EngineeringFoundation {
  title: string;
  category: string;
  summary: string;
  metrics: {
    value: string;
    label: string;
  }[];
  outcomes: string[];
}

export type EducationLogoId = "fdc" | "pucrs" | "somec" | "estacio";

export interface Education {
  studyType: string;
  area: string;
  institution: string;
  logoId: EducationLogoId;
}

export interface Language {
  language: string;
  level: string;
}

export type TestimonialPhotoId =
  | "cristiano-goncalves"
  | "mauricio-kitazawa"
  | "celso-junior"
  | "marjori-tamise";

export interface Testimonial {
  quote: string;
  language: "en" | "pt-BR";
  author: string;
  role: string;
  company: string;
  linkedin: string;
  photoId: TestimonialPhotoId;
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
  engineeringFoundations: EngineeringFoundation[];
  education: Education[];
  certifications: string[];
  testimonials: Testimonial[];
  languages: Language[];
  aiTools: AiTool[];
}

export const resume: Resume = {
  name: "Mateus Anjos",
  title: "Staff Software Engineer & Tech Lead",
  location: "São Paulo, Brazil",
  email: "mateusanjosmgb@gmail.com",
  linkedin: "linkedin.com/in/mateus-anjos",
  summary:
    "Staff Software Engineer & Tech Lead with over 9 years of experience in frontend development, software architecture, and building scalable web applications. Proven track record in technical leadership, setting engineering standards, technical governance, and team structuring in high-growth environments.\n\nSpecialist in performance, scalability, reliability, and cost optimization, with experience in frontend architecture migration and micro frontend implementation. Strong track record in creating reusable libraries and code standardization for efficiency and maintainability.\n\nProficient in React, Next.js, TypeScript, Node.js, and .NET, along with modern observability, CI/CD, and platform engineering practices. Experience in cross-functional collaboration with Product, Design, and Engineering teams to deliver high-impact solutions.\n\nInvolved in structuring AI initiatives applied to development, promoting the use of artificial intelligence as a productivity accelerator and code co-authoring among frontend developers.",
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
      company: "Aarin Tech-Fin (Bradesco Group)",
      startDate: "2024",
      logoId: "aarin",
      media: {
        type: "video",
        src: "/bradesco-autosservico.mp4",
        poster: "/bradesco-autosservico-poster.jpg",
        label: "Bradesco Autosserviço product demonstration",
        description:
          "Silent screen recording showing the Bradesco consórcio self-service page and the virtual assistant answering customer questions during the online purchase journey.",
        caption:
          "Bradesco's official end-to-end digital journey for purchasing consórcio plans, delivered under my technical leadership for one of Brazil's largest banks and a market-leading consórcio operation.",
      },
      descriptions: [
        "Led 5 cross-functional squads (15+ frontend engineers), reducing onboarding time for new hires by 50%",
        "Drove frontend chapter culture initiatives adopted by 25+ engineers across the organization",
        "Implemented Amplitude event governance cutting analytics costs by 40% while maintaining 99.9% event data reliability",
        "Architected multi-tenant white-label platform serving 2M+ users across 3 business units, compressing end-to-end tenant rollout from 6 months to 3 weeks",
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
      title: "Senior Software Engineer (Financial Services)",
      company: "Aarin Tech-Fin (Bradesco Group)",
      startDate: "2023",
      endDate: "2024",
      logoId: "aarin",
      media: {
        type: "video",
        src: "/baas-bradesco.mp4",
        poster: "/baas-bradesco-poster.jpg",
        label: "Bradesco Banking as a Service (BaaS) platform demonstration",
        description:
          "Screen recording showing the Bradesco BaaS platform — digital onboarding, API integrations, and self-service portal for enterprise clients.",
        caption:
          "Banking as a Service (BaaS) platform built at Aarin Tech-Fin (Bradesco Group) — enabling third-party companies to embed banking services via APIs, delivered under my technical leadership.",
      },
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
      title: "Senior Software Engineer (E-commerce)",
      company: "Iteris & Briteris",
      startDate: "2022",
      endDate: "2023",
      logoId: "iteris-briteris",
      media: {
        type: "image",
        src: "/candea-ecommerce.png",
        alt: "C&A e-commerce homepage showing promotional campaign with 30% OFF coupon",
        width: 1920,
        height: 1080,
        caption:
          "C&A e-commerce platform built on VTEX, featuring real-time promotions and WhatsApp integration — delivered under my technical leadership at Iteris & Briteris.",
      },
      descriptions: [
        "Architected real-time platform handling 1M+ daily WhatsApp messages via META APIs at <500ms delivery latency",
        "Launched C&A TALK (QR→video agent) reaching 50K+ monthly interactions across 200+ physical stores",
        "Mentored 3 client teams (12+ devs) in Angular→React migration, reducing ramp-up time by 50%",
        "Implemented WebSockets, push notifications, and geolocation for 100K+ daily active users",
      ],
    },
    {
      title: "Senior Software Engineer (E-commerce)",
      company: "Whirlpool (WPP / Jüssi)",
      startDate: "2021",
      endDate: "2022",
      logoId: "whirlpool",
      clientLogos: [
        { src: "/whirlpool/logo-whirlpool.png", alt: "Whirlpool", description: "Global leader in home appliances — washers, dryers, refrigerators, and kitchen solutions sold in 190+ countries.", url: "https://www.whirlpool.com.br" },
        { src: "/whirlpool/logo-brastemp.png", alt: "Brastemp", description: "Brazil's #1 appliance brand — refrigerators, washing machines, and ovens trusted by millions of Brazilian households.", url: "https://www.brastemp.com.br" },
        { src: "/whirlpool/logo-consul.png", alt: "Consul", description: "Trusted Brazilian brand for refrigeration and washing solutions — affordable quality for everyday life.", url: "https://www.consul.com.br" },
        { src: "/whirlpool/logo-kitchenaid.png", alt: "KitchenAid", description: "Premium kitchen appliances — stand mixers, refrigerators, and dishwashers for culinary enthusiasts worldwide.", url: "https://www.kitchenaid.com.br" },
        { src: "/whirlpool/logo-bblend.png", alt: "B/Blend", description: "Whirlpool's direct-to-consumer platform for appliance subscriptions and smart home solutions in Brazil.", url: "https://www.bblend.com.br" },
        { src: "/whirlpool/logo-compracerta.png", alt: "Compra Certa", description: "Whirlpool's e-commerce platform for certified refurbished appliances with warranty and free shipping.", url: "https://www.compracerta.com.br" },
      ],
      descriptions: [
        "Architected AR product viewer (WebXR + React Three Fiber) for Brastemp across 500+ SKUs, increasing online conversion by 22% and reducing product returns by 15% — adopted by Consul and KitchenAid post-launch",
        "Built real-time live-commerce platform (Compra Certa) with WebSockets, video streaming, and WhatsApp integration on VTEX IO, generating $500K+ gross sales in the first 3 months",
        "Delivered 4 enterprise e-commerce projects on VTEX (Legacy + VTEX IO) for Whirlpool's brand portfolio — Brastemp, Consul, KitchenAid, B/Blend — managing end-to-end delivery across cross-functional teams",
        "Implemented offline-first PWA across Whirlpool's brand ecosystem achieving 95+ Lighthouse PWA score, 2x repeat visit rate, and sub-3s load time for 500K+ monthly users",
        "Optimized build toolchain (Webpack → esbuild) reducing bundle size by 45% and cold builds from 60s to 12s, cutting release cycle time by 3x for a team of 8 frontend engineers",
        "Established frontend standards and code review practices across 6 brand teams, reducing cross-project bugs by 40% and onboarding new developers in under 1 week",
      ],
    },
    {
      title: "Senior Software Engineer (Healthcare)",
      company: "Mevo - Receita Digital",
      startDate: "2021",
      endDate: "2022",
      logoId: "mevo",
      media: {
        type: "image",
        src: "/receita-digital.png",
        alt: "Mevo Receita Digital platform — digital medical prescription interface",
        width: 1920,
        height: 1080,
        caption:
          "Mevo Receita Digital — interoperability platform for digital medical prescriptions, processing 10K+ daily transactions via banking-inspired clearing model (SPB/CIP).",
      },
      descriptions: [
        "Created medical prescription interoperability standard inspired by banking clearing model (SPB/CIP), processing 10K+ daily transactions",
        "Established code governance standards adopted by 15+ engineers, reducing PR merge time by 40%",
        "Authored architectural UML documentation + mentored team on FHIR R4 standard, enabling 2x velocity on new integrations",
        "Technology contributed to company valuation of R$40M+, leading to successful acquisition by InovaCIP",
      ],
    },
    {
      title: "Mid-Level Software Engineer (E-commerce)",
      company: "Shift Inc",
      startDate: "2019",
      endDate: "2021",
      logoId: "shift",
      descriptions: [
        "Delivered 8+ VTEX e-commerce storefronts for Under Armour, Mizuno, Nissan, and 7 other brands, averaging 90+ Lighthouse scores",
        "Built e-commerce solutions with VTEX/VTEX IO processing 1M+ monthly pageviews across client portfolio",
        "Enforced code review process and Gitflow across 4 concurrent projects, maintaining <24h average review turnaround",
        "Worked in Kanban teams delivering 2-week sprints with 95% on-time delivery rate",
      ],
    },
  ],
  engineeringFoundations: [
    {
      title: "Frontend Intelligence Platform",
      category: "Internal Developer Platform",
      summary:
        "Built an internal developer platform that connected frontend defects to architecture layers, helping teams distinguish UI failures from business-logic failures and act on root causes.",
      metrics: [
        { value: "12–15", label: "squads using shared quality signals" },
        { value: "30", label: "developers supported" },
      ],
      outcomes: [
        "Centralized frontend governance, Golden Paths, engineering metrics, and scorecards",
        "Shortened diagnosis time and gave engineering managers evidence for targeted bug-reduction plans",
      ],
    },
    {
      title: "Analytics Autocapture Library",
      category: "Internal Library",
      summary:
        "Built an autocapture library that replaced manual analytics instrumentation with a reliable, performance-conscious event pipeline.",
      metrics: [
        { value: "40%", label: "lower analytics costs" },
        { value: "99.9%", label: "event data reliability" },
      ],
      outcomes: [
        "Eliminated hand-coded tracking events and recurring instrumentation work for engineers",
        "Enabled Product teams to select relevant events from a consistent catalog instead of mapping and naming every event",
      ],
    },
    {
      title: "White-label Tenant Foundation",
      category: "Internal Library",
      summary:
        "Built a reusable tenant library that reduced the technical white-label configuration step across multiple products to minutes.",
      metrics: [
        { value: "Minutes", label: "to configure a tenant" },
        { value: "Multi-product", label: "shared foundation" },
      ],
      outcomes: [
        "Centralized tenant configuration and branding across product experiences",
        "Reduced duplicated implementation effort and helped cut end-to-end tenant rollout from months to weeks",
      ],
    },
    {
      title: "Frontend Engineering Playbook",
      category: "Engineering Standards",
      summary:
        "Authored company-wide frontend style guides that turned recurring implementation decisions into clear, reusable engineering standards.",
      metrics: [
        { value: "Company-wide", label: "shared standards" },
        { value: "Repeatable", label: "engineering decisions" },
      ],
      outcomes: [
        "Made implementation, testing, and tooling conventions discoverable across teams",
        "Simplified onboarding and reduced repeated alignment during development and code review",
      ],
    },
  ],
  education: [
    {
      studyType: "MBA",
      area: "Artificial Intelligence Applied to Business Management",
      institution: "Fundação Dom Cabral",
      logoId: "fdc",
    },
    {
      studyType: "MBA",
      area: "Management, Entrepreneurship, and Business Development",
      institution: "PUCRS",
      logoId: "pucrs",
    },
    {
      studyType: "Bachelor's degree",
      area: "Computer Science",
      institution: "Universidade Estácio de Sá",
      logoId: "estacio",
    },
    {
      studyType: "Technical degree",
      area: "Information Technology",
      institution: "Colégio Santa Cruz Somec",
      logoId: "somec",
    },
  ],
  certifications: ["VTEX IO Developer", "VTEX Implementation Expert"],
  testimonials: [
    {
      quote:
        "Mateus é um profissional extremamente fora da curva.\n\nTodo problema complexo que eu apresentava, ele fazia questão de se aprofundar para trazer a solução mais elegante possível. Se você tem um desafio grande e precisa de alguém que resolva com muito detalhamento e profundidade, ele é a pessoa certa.\n\nNos últimos 3 meses aqui na Aarin, ele atuou muito próximo a mim (na minha posição de Chapter Lead de Frontend). Tive a oportunidade de passar diversos feedbacks de melhoria e a atitude dele sempre foi exemplar. Ele tem a humildade de ouvir, entender e aplicar as mudanças rapidamente, sendo super aberto a mudar a rota caso a sua ideia inicial não seja a melhor para aquele cenário.",
      language: "pt-BR",
      author: "Cristiano Gonçalves",
      role: "Tech Manager",
      company: "Aarin Tech-Fin (Bradesco Group)",
      linkedin: "https://www.linkedin.com/in/cristiano-gon%C3%A7alves/",
      photoId: "cristiano-goncalves",
    },
    {
      quote: "No período em que trabalhei com o Mateus, pude perceber o potencial que ele possuía para ajudar as pessoas, com empatia e imensa habilidade técnica. O patamar atual dele é apenas uma consequência de suas habilidades profissionais e sociais. Ele amadureceu muito, solidificando seus conhecimentos de tal maneira que agora auxilia outros profissionais em diversos estágios de carreira.",
      language: "pt-BR",
      author: "Mauricio Kitazawa",
      role: "Senior Software Engineer",
      company: "Globalweb Corp",
      linkedin: "https://www.linkedin.com/in/mauricio-kitazawa/",
      photoId: "mauricio-kitazawa",
    },
    {
      quote: "Mateus is an excellent professional. I had the opportunity to work directly with him for almost a year, and during this time I was sure that he would become a great professional, both for his leadership profile and technical mastery.",
      language: "en",
      author: "Celso Junior",
      role: "Senior Software Engineer",
      company: "Cheesecake Labs",
      linkedin: "https://www.linkedin.com/in/celso-junior/",
      photoId: "celso-junior",
    },
    {
      quote: "Mateus foi um achado no meio de um furacão — desenvolvedor dedicado e com garra. Trouxe inovação para a equipe, tornando-se líder no que entrava, acionado constantemente para resoluções de problemas urgentes, nunca deixou a equipe na mão e sempre foi muito prestativo ao ajudar os demais. Muito orgulhosa de poder ter trabalhado com ele.",
      language: "pt-BR",
      author: "Márjori Tamise de Carvalho Souza",
      role: "Group Tech Manager",
      company: "Itaú",
      linkedin: "https://www.linkedin.com/in/marjori-tamise/",
      photoId: "marjori-tamise",
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
