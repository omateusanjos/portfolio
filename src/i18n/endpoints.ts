import type { Resume } from "../data/resume";
import type { UiStrings } from "./ui";

const period = (startDate: string, endDate?: string, presentLabel = "Present") =>
  `${startDate} - ${endDate ?? presentLabel}`;

export function buildResumeMd(resume: Resume, t: UiStrings, baseUrl: string): string {
  const lines = [
    `# ${resume.name}`,
    "",
    `**${resume.title}**`,
    "",
    `${resume.location} | [${resume.email}](mailto:${resume.email}) | [LinkedIn](https://${resume.linkedin})`,
    "",
    `Portfolio: ${baseUrl}`,
    "",
    `## ${t.about}`,
    "",
    resume.summary,
    "",
    `## ${t.experience}`,
    "",
    ...resume.experience.flatMap((job) => [
      `### ${job.title} - ${job.company}`,
      "",
      `**${period(job.startDate, job.endDate, t.present)}**`,
      "",
      ...job.descriptions.map((description) => `- ${description}`),
      "",
    ]),
    `## ${t.ef.title}`,
    "",
    t.ef.intro,
    "",
    ...resume.engineeringFoundations.flatMap((foundation) => [
      `### ${foundation.title}`,
      "",
      `**${foundation.category} | ${t.privateInitiative}**`,
      "",
      foundation.summary,
      "",
      ...foundation.metrics.map(
        (metric) => `- **${metric.value}:** ${metric.label}`,
      ),
      ...foundation.outcomes.map((outcome) => `- ${outcome}`),
      "",
    ]),
    `## ${t.skills}`,
    "",
    ...resume.skills.flatMap((skill) => [
      `### ${skill.category}`,
      "",
      skill.items.join(", "),
      "",
    ]),
    `## ${t.education}`,
    "",
    ...resume.education.map(
      ({ studyType, area, institution }) =>
        `- **${studyType} in ${area}**, ${institution}`,
    ),
    "",
    `## ${t.certs}`,
    "",
    ...resume.certifications.map((certification) => `- ${certification}`),
    "",
    `## ${t.languages}`,
    "",
    ...resume.languages.map(
      ({ language, level }) => `- ${language}: ${level}`,
    ),
    "",
    `## ${t.testimonials.title}`,
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

  return `${lines.join("\n").trim()}\n`;
}

export function buildResumeJson(resume: Resume, site: string): string {
  const jsonResume = {
    basics: {
      name: resume.name,
      label: resume.title,
      email: resume.email,
      url: site,
      summary: resume.summary,
      location: {
        city: "São Paulo",
        countryCode: "BR",
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "mateus-anjos",
          url: `https://${resume.linkedin}`,
        },
      ],
    },
    work: resume.experience.map((job) => ({
      name: job.company,
      position: job.title,
      startDate: job.startDate,
      ...(job.endDate ? { endDate: job.endDate } : {}),
      highlights: job.descriptions,
    })),
    projects: resume.engineeringFoundations.map((foundation) => ({
      name: foundation.title,
      type: foundation.category,
      description: `Private initiative. ${foundation.summary}`,
      highlights: [
        ...foundation.metrics.map(
          (metric) => `${metric.value}: ${metric.label}`,
        ),
        ...foundation.outcomes,
      ],
    })),
    education: resume.education.map(({ studyType, area, institution }) => ({
      institution,
      studyType,
      area,
    })),
    skills: resume.skills.map(({ category, items }) => ({
      name: category,
      keywords: items,
    })),
    certificates: resume.certifications.map((name) => ({ name })),
    languages: resume.languages.map(({ language, level }) => ({
      language,
      fluency: level,
    })),
    references: resume.testimonials.map(({ author, role, company, quote }) => ({
      name: `${author}, ${role} at ${company}`,
      reference: quote,
    })),
  };

  return `${JSON.stringify(jsonResume, null, 2)}\n`;
}

export function buildLlms(resume: Resume, t: UiStrings, baseUrl: string): string {
  const summary = resume.summary.split("\n\n")[0];
  return `# ${resume.name}

> ${summary} Based in ${resume.location}.

## Profile

- [Portfolio](${baseUrl}/): Complete public profile, experience, skills, education, and references.
- [Resume in Markdown](${baseUrl}/resume.md): Full resume optimized for language models and text-based tools.
- [Resume in JSON](${baseUrl}/resume.json): Structured resume following the JSON Resume format.
- [LinkedIn](https://${resume.linkedin}): Professional profile and contact network.

## Contact

- Email: ${resume.email}
`;
}
