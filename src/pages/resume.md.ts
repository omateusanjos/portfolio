import type { APIRoute } from "astro";
import { resume } from "../data/resume";

const period = (startDate: string, endDate?: string) =>
  `${startDate} - ${endDate ?? "Present"}`;

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The site URL must be configured in astro.config.mjs");

  const lines = [
    `# ${resume.name}`,
    "",
    `**${resume.title}**`,
    "",
    `${resume.location} | [${resume.email}](mailto:${resume.email}) | [LinkedIn](https://${resume.linkedin})`,
    "",
    `Portfolio: ${site}`,
    "",
    "## Summary",
    "",
    resume.summary,
    "",
    "## Experience",
    "",
    ...resume.experience.flatMap((job) => [
      `### ${job.title} - ${job.company}`,
      "",
      `**${period(job.startDate, job.endDate)}**`,
      "",
      ...job.descriptions.map((description) => `- ${description}`),
      "",
    ]),
    "## Engineering Foundations",
    "",
    "Private internal platforms, libraries, and standards built to turn recurring frontend problems into reusable, company-wide capabilities.",
    "",
    ...resume.engineeringFoundations.flatMap((foundation) => [
      `### ${foundation.title}`,
      "",
      `**${foundation.category} | Private initiative**`,
      "",
      foundation.summary,
      "",
      ...foundation.metrics.map(
        (metric) => `- **${metric.value}:** ${metric.label}`,
      ),
      ...foundation.outcomes.map((outcome) => `- ${outcome}`),
      "",
    ]),
    "## Skills",
    "",
    ...resume.skills.flatMap((skill) => [
      `### ${skill.category}`,
      "",
      skill.items.join(", "),
      "",
    ]),
    "## Education",
    "",
    ...resume.education.map(
      ({ studyType, area, institution }) =>
        `- **${studyType} in ${area}**, ${institution}`,
    ),
    "",
    "## Certifications",
    "",
    ...resume.certifications.map((certification) => `- ${certification}`),
    "",
    "## Languages",
    "",
    ...resume.languages.map(
      ({ language, level }) => `- ${language}: ${level}`,
    ),
    "",
    "## References",
    "",
    ...resume.testimonials.flatMap(
      ({ quote, author, role, company, linkedin }) => [
        ...quote.split("\n").map((line) => (line ? `> ${line}` : ">")),
        ">",
        `> [${author}](${linkedin}), ${role} at ${company}`,
        "",
      ],
    ),
  ];

  return new Response(`${lines.join("\n").trim()}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
