import type { APIRoute } from "astro";
import { resume } from "../data/resume";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The site URL must be configured in astro.config.mjs");

  const baseUrl = site.toString().replace(/\/$/, "");
  const summary = resume.summary.split("\n\n")[0];
  const content = `# ${resume.name}

> ${summary} Based in ${resume.location}.

## Profile

- [Portfolio](${baseUrl}/): Complete public profile, experience, skills, education, and references.
- [Resume in Markdown](${baseUrl}/resume.md): Full resume optimized for language models and text-based tools.
- [Resume in JSON](${baseUrl}/resume.json): Structured resume following the JSON Resume format.
- [LinkedIn](https://${resume.linkedin}): Professional profile and contact network.

## Contact

- Email: ${resume.email}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
