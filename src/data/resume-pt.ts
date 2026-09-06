import type { Resume } from "./resume";

export const resumePt: Resume = {
  name: "Mateus Anjos",
  title: "Staff Software Engineer e Tech Lead",
  location: "São Paulo, Brasil",
  email: "mateusanjosmgb@gmail.com",
  linkedin: "linkedin.com/in/mateus-anjos",
  summary:
    "Staff Software Engineer & Tech Lead com mais de 9 anos de experiência em desenvolvimento frontend, arquitetura de software e construção de aplicações web escaláveis. Histórico comprovado em liderança técnica, definição de padrões de engenharia, governança técnica e estruturação de equipes em ambientes de alto crescimento.\n\nEspecialista em performance, escalabilidade, confiabilidade e otimização de custos, com experiência em migração de arquitetura frontend e implementação de micro frontends. Forte histórico na criação de bibliotecas reutilizáveis e padronização de código para eficiência e manutenibilidade.\n\nProficiente em React, Next.js, TypeScript, Node.js e .NET, junto com práticas modernas de observabilidade, CI/CD e platform engineering. Experiência em colaboração cross-functional com equipes de Produto, Design e Engenharia para entregar soluções de alto impacto.\n\nEnvolvido na estruturação de iniciativas de IA aplicadas ao desenvolvimento, promovendo o uso de inteligência artificial como acelerador de produtividade e co-autoria de código entre desenvolvedores frontend.",
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
      category: "Arquitetura & Engenharia",
      items: [
        "Arquitetura Escalável",
        "Design Systems",
        "Micro Frontends",
        "REST APIs",
        "Componentização",
        "Clean Architecture",
      ],
    },
    {
      category: "Qualidade & Observabilidade",
      items: [
        "Jest",
        "Cypress",
        "Playwright",
        "Datadog",
        "Sentry",
        "Monitoramento & Logging",
        "CI/CD",
        "Testes E2E",
      ],
    },
    {
      category: "Estratégias de Renderização",
      items: ["SSR", "SSG", "ISR", "CSR", "DSG", "Edge SSR"],
    },
    {
      category: "Cloud & Infraestrutura",
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
      category: "Liderança",
      items: [
        "Gestão de Equipes",
        "Mentoria Técnica",
        "Planejamento Estratégico",
        "Gestão de Stakeholders",
      ],
    },
    {
      category: "Assistentes de IA",
      items: ["AWS Kiro", "GitHub Copilot", "Claude", "opencode"],
    },
    {
      category: "Engenharia de IA",
      items: [
        "Loop Engineering",
        "Graph Engineering",
        "Orquestração de Sub-Agentes",
        "Enterprise Harness (25+ equipes)",
      ],
    },
    {
      category: "Documentação & Governança",
      items: [
        "RFCs",
        "Diretrizes de Governança",
        "Roadmap Técnico",
        "Decisões de Trade-off",
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
        label: "Demonstração do produto Bradesco Autosserviço",
        description:
          "Gravação de tela silenciosa mostrando a página de consórcio do Bradesco e o assistente virtual respondendo perguntas dos clientes durante a jornada de compra online.",
        caption:
          "Jornada digital oficial ponta a ponta do Bradesco para compra de planos de consórcio, entregue sob minha liderança técnica para um dos maiores bancos do Brasil e uma operação líder de consórcio.",
      },
      descriptions: [
        "Liderei 5 squads cross-functionais (15+ engenheiros frontend), reduzindo o tempo de onboarding de novos colaboradores em 50%",
        "Impulsionei iniciativas de cultura de capítulo de frontend adotadas por 25+ engenheiros na organização",
        "Implementei governança de eventos Amplitude cortando custos de analytics em 40% mantendo 99.9% de confiabilidade nos dados",
        "Arquitetei plataforma multi-tenant white-label servindo 2M+ usuários em 3 unidades de negócio, comprimindo o ciclo de rollout de tenants de 6 meses para 3 semanas",
        "Entreguei onboarding biométrico (SDK UNICO) atingindo 85% de taxa de conversão e 60% de redução no abandono vs fluxo anterior",
        "Construí Design System corporativo (Radix + Docusaurus) adotado por 8 equipes de produto, reduzindo tempo de desenvolvimento UI em 35%",
        "Desenvolvi biblioteca de componentes reutilizáveis publicada em 3 pacotes internos, compartilhada no ecossistema de consórcios",
        "Liderei migração Next.js 14→15 em 5 aplicações com zero incidentes em produção",
        "Implementei controles CSP que bloquearam 100% dos vetores de XSS em pentest — zero achados críticos",
        "Defini SLOs/SLIs melhorando scores Lighthouse de 65 para 92 e reduzindo tempo de carregamento P95 em 45%",
        "Projetei Arquitetura de Micro Frontend (Lit.dev + Module Federation) permitindo que 4 squads deployassem independentemente, cortando dependências cross-team em 80%",
        "Deployei assistentes de IA (AWS Kiro + GitHub Copilot) no capítulo de frontend, reduzindo tempo de ciclo de PR em 30%",
        "Gerenciei 15+ serviços AWS sustentando 99.95% de uptime e otimizando gasto cloud de $200K+/mês",
      ],
    },
    {
      title: "Engenheiro de Software Sênior (Serviços Financeiros)",
      company: "Aarin Tech-Fin (Bradesco Group)",
      startDate: "2023",
      endDate: "2024",
      logoId: "aarin",
      descriptions: [
        "Liderei migração Next.js 12→14 em 3 aplicações em produção, reduzindo bundle size em 30% e TTFB em 40%",
        "Migrei Stitches→PandaCSS eliminando 15K+ linhas de CSS morto e acelerando builds em 60%",
        "Construí suite E2E (Playwright) cobrindo 90% dos caminhos críticos, reduzindo bugs em produção em 70%",
        "Desenvolvi plataforma Bradesco as a Service processando 100K+ requisições de API diárias com latência P99 <200ms",
        "Implementei fluxos KYC processando 50K+ verificações com 99.5% de precisão de aprovação",
        "Otimizei pipeline CI/CD (GitLab + Docker) de 18min para 6min via orquestração paralela de jobs",
        "Entreguei features regulatórias (BACEN) no prazo por 3 ciclos de auditoria consecutivos com zero achados",
      ],
    },
    {
      title: "Engenheiro de Software Sênior (E-commerce)",
      company: "Iteris & Briteris",
      startDate: "2022",
      endDate: "2023",
      logoId: "iteris-briteris",
      media: {
        type: "image",
        src: "/candea-ecommerce.png",
        alt: "Homepage do e-commerce C&A mostrando campanha promocional com cupom de 30% OFF",
        width: 1920,
        height: 1080,
        caption:
          "Plataforma de e-commerce C&A construída em VTEX, com promoções em tempo real e integração com WhatsApp — entregue sob minha liderança técnica na Iteris & Briteris.",
      },
      descriptions: [
        "Arquitetei plataforma processando 1M+ mensagens diárias via WhatsApp APIs da META com latência de entrega <500ms",
        "Lancei C&A TALK (QR→vídeo agente) alcançando 50K+ interações mensais em 200+ lojas físicas",
        "Mentorei 3 equipes de clientes (12+ devs) na migração Angular→React, reduzindo tempo de rampa em 50%",
        "Implementei WebSockets, push notifications e geolocalização para 100K+ usuários ativos diários",
      ],
    },
    {
      title: "Engenheiro de Software Sênior (E-commerce)",
      company: "Whirlpool (WPP / Jüssi)",
      startDate: "2021",
      endDate: "2022",
      logoId: "whirlpool",
      descriptions: [
        "Entreguei visualizador de produto AR para Brastemp aumentando conversão online em 22% e reduzindo devoluções em 15%",
        "Construí plataforma de live-commerce (Compra Certa) gerando $500K+ bruto nos primeiros 3 meses",
        "Desenvolvi em VTEX (Legacy + VTEX IO) entregando 4 projetos de e-commerce importantes no prazo",
        "Implementei PWA atingindo 95+ no Lighthouse PWA score e taxa de visita 2x maior",
        "Otimizei Webpack reduzindo bundle size em 45% e cold builds de 60s para 12s",
      ],
    },
    {
      title: "Engenheiro de Software Sênior (Saúde)",
      company: "Mevo - Receita Digital",
      startDate: "2021",
      endDate: "2022",
      logoId: "mevo",
      media: {
        type: "image",
        src: "/receita-digital.png",
        alt: "Plataforma Mevo Receita Digital — interface de prescrição médica digital",
        width: 1920,
        height: 1080,
        caption:
          "Mevo Receita Digital — plataforma de interoperabilidade de prescrições médicas digitais, processando 10K+ transações diárias via modelo de compensação inspirado em bancário (SPB/CIP).",
      },
      descriptions: [
        "Criei padrão de interoperabilidade de prescrições médicas inspirado no modelo de compensação bancária (SPB/CIP), processando 10K+ transações diárias",
        "Estabeleci padrões de governança de código adotados por 15+ engenheiros, reduzindo tempo de merge de PR em 40%",
        "Redigi documentação arquitetural UML + mentorei equipe no padrão FHIR R4, permitindo velocidade 2x em novas integrações",
        "Tecnologia contribuiu para avaliação da empresa de R$40M+, levando à aquisição bem-sucedida pela InovaCIP",
      ],
    },
    {
      title: "Engenheiro de Software Pleno (E-commerce)",
      company: "Shift Inc",
      startDate: "2019",
      endDate: "2021",
      logoId: "shift",
      descriptions: [
        "Entreguei 8+ lojas VTEX para Under Armour, Mizuno, Nissan e 7 outras marcas, com média de 90+ no Lighthouse",
        "Construí soluções de e-commerce com VTEX/VTEX IO processando 1M+ pageviews mensais no portfólio de clientes",
        "Mantive processo de code review e Gitflow em 4 projetos simultâneos, com turnaround médio <24h",
        "Trabalhei em equipes Kanban entregando sprints de 2 semanas com 95% de taxa de entrega no prazo",
      ],
    },
  ],
  engineeringFoundations: [
    {
      title: "Plataforma de Inteligência Frontend",
      category: "Plataforma Interna de Desenvolvimento",
      summary:
        "Construí uma plataforma interna de desenvolvimento que conectou defeitos de frontend a camadas de arquitetura, ajudando equipes a distinguir falhas de UI de falhas de lógica de negócio e agir sobre causas raiz.",
      metrics: [
        { value: "12–15", label: "squads usando sinais compartilhados de qualidade" },
        { value: "30", label: "desenvolvedores suportados" },
      ],
      outcomes: [
        "Governança frontend centralizada, Golden Paths, métricas de engenharia e scorecards",
        "Reduziu tempo de diagnóstico e deu aos gestores de engenharia evidências para planos direcionados de redução de bugs",
      ],
    },
    {
      title: "Biblioteca de Autocaptura de Analytics",
      category: "Biblioteca Interna",
      summary:
        "Construí uma biblioteca de autocaptura que substituiu a instrumentação manual de analytics com um pipeline de eventos confiável e consciente de performance.",
      metrics: [
        { value: "40%", label: "menores custos de analytics" },
        { value: "99.9%", label: "confiabilidade nos dados de eventos" },
      ],
      outcomes: [
        "Eliminou eventos de rastreamento codificados manualmente e trabalho recorrente de instrumentação para engenheiros",
        "Permitiu que equipes de Produto selecionassem eventos relevantes de um catálogo consistente em vez de mapear e nomear cada evento",
      ],
    },
    {
      title: "Fundação White-label de Tenant",
      category: "Biblioteca Interna",
      summary:
        "Construí uma biblioteca de tenant reutilizável que reduziu o passo de configuração técnica white-label em múltiplos produtos para minutos.",
      metrics: [
        { value: "Minutos", label: "para configurar um tenant" },
        { value: "Multi-produto", label: "fundação compartilhada" },
      ],
      outcomes: [
        "Centralizou configuração de tenant e branding em experiências de produto",
        "Reduziu esforço de implementação duplicado e ajudou a comprimir rollout de tenants de meses para semanas",
      ],
    },
    {
      title: "Manual de Engenharia Frontend",
      category: "Padrões de Engenharia",
      summary:
        "Redigi guias de estilo frontend corporativos que transformaram decisões recorrentes de implementação em padrões de engenharia claros e reutilizáveis.",
      metrics: [
        { value: "Corporativo", label: "padrões compartilhados" },
        { value: "Repetível", label: "decisões de engenharia" },
      ],
      outcomes: [
        "Tornou convenções de implementação, teste e ferramentas descobertas entre equipes",
        "Simplificou onboarding e reduziu alinhamentos repetidos durante desenvolvimento e code review",
      ],
    },
  ],
  education: [
    {
      studyType: "MBA",
      area: "Inteligência Artificial Aplicada à Gestão de Negócios",
      institution: "Fundação Dom Cabral",
      logoId: "fdc",
    },
    {
      studyType: "MBA",
      area: "Gestão, Empreendedorismo e Desenvolvimento de Negócios",
      institution: "PUCRS",
      logoId: "pucrs",
    },
    {
      studyType: "Graduação",
      area: "Ciência da Computação",
      institution: "Universidade Estácio de Sá",
      logoId: "estacio",
    },
    {
      studyType: "Técnico",
      area: "Tecnologia da Informação",
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
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Fluente" },
    { language: "Espanhol", level: "Avançado" },
  ],
  aiTools: [
    {
      name: "AWS Kiro",
      icon: "aws",
      description: "Assistente de IA integrado ao ecossistema AWS para insights de infraestrutura e geração de código",
      logoId: "aws",
    },
    {
      name: "GitHub Copilot",
      icon: "copilot",
      description: "Programador duplo de IA usado por equipes para acelerar desenvolvimento frontend e qualidade de código",
      logoId: "github",
    },
    {
      name: "Claude",
      icon: "claude",
      description: "Assistente de IA avançado para decisões arquiteturais, code reviews e documentação técnica",
      logoId: "claude",
    },
    {
      name: "opencode",
      icon: "opencode",
      description: "Ferramenta CLI com IA para orquestração de agentes, análise automatizada de codebase e fluxos de engenharia de software",
      logoId: "opencode",
    },
  ],
};
