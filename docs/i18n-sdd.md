# SDD v3 — Internacionalização (i18n) do Portfólio

**Status:** Revisão 3 · **Autor:** opencode · **Data:** 2026-09-06
**Diferença v2→v3:** Integração completa com o i18n nativo do Astro 7.x.

---

## 1. Sumário Executivo

Introduzir duas versões de idioma no portfólio — **EN (default, `/`)** e **PT-BR (`/pt-br/`)** — usando exclusivamente o sistema de i18n nativo do Astro 7.x (`i18n` config + `Astro.currentLocale` + `astro:i18n` module). Zero dependências novas, zero prop drilling, `output: "static"` preservado.

## 2. Soluções nativas do Astro adotadas

| Feature nativa | Uso no projeto | Elimina |
|---|---|---|
| `i18n` config | `defaultLocale: 'en'`, `locales: ['en', 'pt-br']`, `routing.prefixDefaultLocale: false` | Plumbing manual de locale |
| `Astro.currentLocale` | Cada componente lê direto — sem prop | 12 props `locale` |
| `astro:i18n` → `getRelativeLocaleUrl()` | Gera URLs no switcher e hreflang | Helper manual `getLocaleUrl()` |
| `i18n.fallback` | `{ 'pt-br': 'en' }` — fallback automático | Fallback manual |
| `i18n.routing.prefixDefaultLocale` | `false` — EN sem prefixo | Lógica condicional de URL |

**Limitação do static:** `preferredLocale` (negociação via Accept-Language) e custom locale paths não funcionam com `output: "static"`. Não são necessárias para este projeto.

## 3. Decisões de produto

| Decisão | Valor |
|---|---|
| URLs | `/` (EN) + `/pt-br/` (PT) |
| Títulos de cargo | Híbrido BR ("Staff Software Engineer e Tech Lead") |
| Testimonials | 100% traduzidos por locale; nota "(tradução)" |
| Marcas/instituições | inalteradas |
| Certificações VTEX | inalteradas |
| Termos técnicos | inalterados |

## 4. Requisitos

| ID | Requisito |
|---|---|
| F1 | Site sirva EN em `/` e PT-BR em `/pt-br/`. |
| F2 | Toda string traduzível em dados ou dicionário. Zero hardcoded. |
| F3 | EN: 100% inglês. PT: 100% traduzido (híbrido para termos técnicos). |
| F4 | `<html lang>` = `en` / `pt-BR`. |
| F5 | Seletor de idioma no header. |
| F6 | Endpoints `/pt-br/resume.md`, `/pt-br/resume.json`, `/pt-br/llms.txt`. |
| F7 | `sitemap.xml` com `/pt-br/`; hreflang com `x-default`. |
| F8 | JSON-LD localizado. |
| F9 | Script de paridade en↔pt no build. |

## 5. Arquitetura

```
astro.config.mjs                ← i18n config nativo
src/i18n/
  index.ts                       ← Locale, langAttr, ui strings (satisfies)
  resume.ts                      ← getResume(locale)
  endpoints.ts                   ← builders compartilhados
src/data/
  resume.ts                      ← interfaces + EN
  resume-pt.ts                   ← PT completo
src/pages/
  index.astro                    ← EN (Astro.currentLocale → 'en')
  pt-br/
    index.astro                  ← PT (Astro.currentLocale → 'pt-br')
  resume.md.ts                   ← EN
  pt-br/
    resume.md.ts                 ← PT
  resume.json.ts                 ← EN
  pt-br/
    resume.json.ts               ← PT
  llms.txt.ts                    ← EN
  pt-br/
    llms.txt.ts                  ← PT
  robots.txt.ts                  ← inalterado
  sitemap.xml.ts                 ← adiciona /pt-br/
scripts/
  check-i18n.mjs                 ← paridade estrutural
```

**Fluxo (sem prop drilling):**
```
pt-br/index.astro
  ├─ Astro.currentLocale → "pt-br"
  ├─ const t = ui["pt-br"]
  ├─ const resume = getResume("pt-br")
  ├─ <BaseLayout locale="pt-br" title={t.meta.title}>
  │    ├─ <html lang="pt-BR"> (via i18n config)
  │    ├─ meta/og/hreflang locais
  │    └─ <slot />
  └─ Componentes filhos
       ├─ Astro.currentLocale → "pt-br" (herdado da rota)
       ├─ const t = ui[Astro.currentLocale]
       └─ render — zero props
```

## 6. Design Detalhado

### 6.1 astro.config.mjs

```js
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mateus-anjos.vercel.app",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: { prefixDefaultLocale: false },
    fallback: { "pt-br": "en" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### 6.2 src/i18n/index.ts

```ts
export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const langAttr: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
};
```

### 6.3 src/i18n/ui.ts

```ts
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
```

### 6.4 src/i18n/resume.ts

```ts
import type { Locale } from "./index";
import { resume } from "../data/resume";
import { resumePt } from "../data/resume-pt";

const resumes: Record<Locale, typeof resume> = {
  en: resume,
  "pt-br": resumePt,
};

export const getResume = (locale: Locale): typeof resume => resumes[locale];
```

### 6.5 Como cada componente lê locale (zero prop drilling)

```astro
---
import { getResume } from "../i18n/resume";
import ui from "../i18n/ui";

const locale = Astro.currentLocale as Locale;
const resume = getResume(locale);
const t = ui[locale];
---
```

`Astro.currentLocale` retorna `"en"` ou `"pt-br"` conforme a rota, **em qualquer componente**. Nenhum componente recebe `locale` como prop.

### 6.6 BaseLayout

Recebe `locale` do page component (único lugar onde passamos):

```astro
---
interface Props { locale: Locale; title: string; }
const { locale, title } = Astro.props;
const lang = langAttr[locale];
const t = ui[locale];
import { getRelativeLocaleUrl } from "astro:i18n";

const otherLocale = locale === "en" ? "pt-br" : "en";
const selfUrl = getRelativeLocaleUrl(locale, Astro.url.pathname);
const altUrl = getRelativeLocaleUrl(otherLocale, Astro.url.pathname);
---
<html lang={lang}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="canonical" href={selfUrl} />
    <link rel="alternate" hreflang={lang} href={selfUrl} />
    <link rel="alternate" hreflang={langAttr[otherLocale]} href={altUrl} />
    <link rel="alternate" hreflang="x-default" href={selfUrl} />
    <meta property="og:locale" content={locale === "en" ? "en_US" : "pt_BR"} />
    <meta property="og:title" content={t.meta.title} />
    <meta property="og:description" content={t.meta.description} />
    <meta property="og:image:alt" content={t.meta.ogAlt} />
    ...
  </head>
  <body>
    <a href="#main-content" class="...">{t.skip}</a>
    <slot />
  </body>
</html>
```

### 6.7 Language switcher (Header)

```astro
---
import { getRelativeLocaleUrl } from "astro:i18n";
const locale = Astro.currentLocale as Locale;
const otherLocale = locale === "en" ? "pt-br" : "en";
---
<a href={getRelativeLocaleUrl(locale, "")} class="... font-bold">EN</a>
<a href={getRelativeLocaleUrl(otherLocale, "")} class="...">PT</a>
```

Preservação de âncora: script trivial que appenda `location.hash` ao click.

### 6.8 Endpoints

Cada endpoint (`resume.md.ts`, `resume.json.ts`, `llms.txt.ts`) vive em `src/pages/` (EN) e `src/pages/pt-br/` (PT). Lógica compartilhada em `endpoints.ts`:

```ts
// src/i18n/endpoints.ts
import type { Resume } from "../data/resume";
import type { UiStrings } from "./ui";

export function buildResumeMd(resume: Resume, t: UiStrings): string {
  // mesma lógica, mas usando strings localizadas do dicionário
}

export function buildResumeJson(resume: Resume, site: string): string { ... }
export function buildLlms(resume: Resume, t: UiStrings, baseUrl: string): string { ... }
```

### 6.9 sitemap.xml.ts

```ts
const baseUrl = site.toString().replace(/\/$/, "");
const locales = ["", "/pt-br"];
const urls = locales.map(
  (loc) => `  <url>\n    <loc>${baseUrl}${loc}/</loc>\n  </url>`
).join("\n");
```

### 6.10 scripts/check-i18n.mjs

Percorre `resume.ts` e `resume-pt.ts` recursivamente. Compara:
- Todas as chaves string
- Length de arrays
- Chaves de objetos

Se qualquer diferença → `exit 1` + mensagem. Roda no `prebuild`.

### 6.11 Estrutura de páginas

```
src/pages/
  index.astro               ← EN (Astro.currentLocale → 'en')
  pt-br/
    index.astro             ← PT (Astro.currentLocale → 'pt-br')
```

`prefixDefaultLocale: false` gera `/` para EN e `/pt-br/` para PT automaticamente.

## 7. Checklist de Validação

- [ ] Nenhuma string EN na versão PT e vice-versa
- [ ] `html[lang]` = `en` em `/`, `pt-BR` em `/pt-br/`
- [ ] `og:locale` = `en_US` / `pt_BR`
- [ ] hreflang: self, alternate, `x-default`
- [ ] JSON-LD localizado
- [ ] 4 testimonials em cada versão
- [ ] `check-i18n.mjs` passa
- [ ] Layout responsivo sem overflow em PT
- [ ] Switcher funciona (desktop + mobile)
- [ ] Hash preservado ao trocar idioma
- [ ] `/pt-br/resume.md` retorna 200 com PT

## 8. Plano de Implementação

| Fase | Entregável |
|---|---|
| 1 | `astro.config.mjs` (i18n config) |
| 2 | `src/i18n/index.ts`, `ui.ts`, `resume.ts`, `endpoints.ts` |
| 3 | `src/data/resume-pt.ts` |
| 4 | `scripts/check-i18n.mjs` |
| 5 | `src/pages/pt-br/index.astro` |
| 6 | `src/pages/pt-br/resume.md.ts`, `resume.json.ts`, `llms.txt.ts` |
| 7 | Migrar 12 componentes (`Astro.currentLocale` + `t.*`) |
| 8 | `BaseLayout.astro` (locale, meta, hreflang, JSON-LD) |
| 9 | `Header.astro` (seletor + script hash) |
| 10 | `sitemap.xml.ts` |
| 11 | `npm run build` + verificação |