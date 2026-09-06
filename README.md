# Mateus Anjos Portfolio

Static portfolio built with Astro and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

The production build is generated with:

```sh
npm run build
```

## Content

`src/data/resume.ts` is the single source of truth for the portfolio and its machine-readable resume formats.

The site exposes these public routes:

| Route | Purpose |
| --- | --- |
| `/` | Human-readable portfolio |
| `/resume.md` | Full resume in Markdown |
| `/resume.json` | Structured resume in JSON Resume format |
| `/llms.txt` | Short index for language models and agents |
| `/robots.txt` | Crawler permissions and sitemap location |
| `/sitemap.xml` | Canonical page sitemap |

The canonical production URL is configured through the `site` property in `astro.config.mjs`. Metadata and generated endpoints use this value instead of maintaining separate hard-coded URLs.
