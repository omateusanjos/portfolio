import type { Locale } from "./index";

const en = {
  nav: {
    about: "About",
    experience: "Experience",
    ai: "AI",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    menu: "Navigation menu",
  },
  hero: { email: "Email" },
  resumeLink: "Machine-readable resume",
  languages: "Languages",
  privateInitiative: "Private initiative",
  about: "About",
  experience: "Experience",
  present: "Present",
  ef: {
    eyebrow: "Systems that compound",
    title: "Engineering Foundations",
    intro: "Private platforms, libraries, and standards I built to turn recurring frontend problems into reusable, company-wide capabilities.",
  },
  testimonials: { title: "What People Say" },
  skills: "Skills",
  ai: {
    title: "AI & Innovation",
    intro: "Driving AI adoption across the enterprise — from pair programming and agent orchestration to company-wide harness infrastructure",
    practices: "AI Engineering Practices",
    badges: ["Loop Engineering", "Graph Engineering", "Sub-Agent Orchestration", "Enterprise Harness (25+ teams)"],
    badge: "MBA in Artificial Intelligence Applied to Business Management — Fundação Dom Cabral",
  },
  education: "Education",
  certs: "Certifications",
  footer: {
    title: "Let's Connect",
    intro: "Feel free to reach out — I'm always open to interesting conversations.",
    md: "Machine-readable resume",
    rights: "All rights reserved.",
  },
  skip: "Skip to main content",
  meta: {
    description: "Staff Software Engineer & Tech Lead with 9+ years building high-scale platforms.",
    title: "Mateus Anjos — Staff Software Engineer & Tech Lead",
    ogAlt: "Mateus Anjos, Staff Software Engineer and Tech Lead",
  },
} as const;

export type UiStrings = typeof en;

const pt: UiStrings = {
  nav: {
    about: "Sobre",
    experience: "Experiência",
    ai: "IA",
    skills: "Habilidades",
    education: "Formação",
    contact: "Contato",
    menu: "Menu de navegação",
  },
  hero: { email: "E-mail" },
  resumeLink: "Currículo legível por máquina",
  languages: "Idiomas",
  privateInitiative: "Iniciativa privada",
  about: "Sobre",
  experience: "Experiência",
  present: "Atual",
  ef: {
    eyebrow: "Sistemas que escalam",
    title: "Fundamentos de Engenharia",
    intro: "Plataformas, bibliotecas e padrões internos que construí para transformar problemas recorrentes de frontend em capacidades reutilizáveis para toda a empresa.",
  },
  testimonials: { title: "Depoimentos" },
  skills: "Habilidades",
  ai: {
    title: "IA & Inovação",
    intro: "Impulsionando a adoção de IA na empresa — do pareamento e da orquestração de agentes à infraestrutura de harness corporativo",
    practices: "Práticas de Engenharia de IA",
    badges: ["Loop Engineering", "Graph Engineering", "Sub-Agent Orchestration", "Enterprise Harness (25+ equipes)"],
    badge: "MBA em Inteligência Artificial Aplicada à Gestão de Negócios — Fundação Dom Cabral",
  },
  education: "Formação",
  certs: "Certificações",
  footer: {
    title: "Vamos conversar",
    intro: "Fique à vontade para falar comigo — estou sempre aberto a boas conversas.",
    md: "Currículo legível por máquina",
    rights: "Todos os direitos reservados.",
  },
  skip: "Pular para o conteúdo principal",
  meta: {
    description: "Staff Software Engineer & Tech Lead com 9+ anos construindo plataformas de grande escala.",
    title: "Mateus Anjos — Staff Software Engineer e Tech Lead",
    ogAlt: "Mateus Anjos, Staff Software Engineer e Tech Lead",
  },
};

const ui = { en, "pt-br": pt } as Record<Locale, UiStrings>;
export default ui;
