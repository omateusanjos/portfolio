import type { APIRoute } from "astro";
import { resume } from "../data/resume";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The site URL must be configured in astro.config.mjs");

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

  return new Response(`${JSON.stringify(jsonResume, null, 2)}\n`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
