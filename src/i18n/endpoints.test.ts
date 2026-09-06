import { describe, it, expect } from "vitest";
import { buildResumeMd, buildResumeJson, buildLlms } from "./endpoints";
import { resume } from "../data/resume";
import { resumePt } from "../data/resume-pt";
import ui from "./ui";

const BASE_URL = "https://mateus-anjos.vercel.app";

describe("i18n/endpoints", () => {
  describe("buildResumeMd", () => {
    it("returns a string", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(typeof result).toBe("string");
    });

    it("starts with '# Name'", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result.startsWith(`# ${resume.name}`)).toBe(true);
    });

    it("contains the title", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain(`**${resume.title}**`);
    });

    it("contains Portfolio baseUrl", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain(`Portfolio: ${BASE_URL}`);
    });

    it("contains 'About' section header in EN", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain("## About");
    });

    it("contains 'Sobre' section header in PT", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("## Sobre");
    });

    it("contains 'Experience' section in EN", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain("## Experience");
    });

    it("contains 'Experiência' section in PT", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("## Experiência");
    });

    it("contains 'Present' for open-ended jobs in EN", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain("Present");
    });

    it("contains 'Atual' for open-ended jobs in PT", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("Atual");
    });

    it("contains 'Private initiative' in EN", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain("Private initiative");
    });

    it("contains 'Iniciativa privada' in PT", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("Iniciativa privada");
    });

    it("contains 'Languages' in EN", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      expect(result).toContain("## Languages");
    });

    it("contains 'Idiomas' in PT", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("## Idiomas");
    });

    it("contains all experience job titles", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      for (const job of resume.experience) {
        expect(result).toContain(job.title);
      }
    });

    it("contains all education institutions", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      for (const edu of resume.education) {
        expect(result).toContain(edu.institution);
      }
    });

    it("contains all certifications", () => {
      const result = buildResumeMd(resume, ui.en, BASE_URL);
      for (const cert of resume.certifications) {
        expect(result).toContain(cert);
      }
    });

    it("PT resume contains translated job titles", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("Engenheiro de Software Sênior");
    });

    it("PT resume contains translated education", () => {
      const result = buildResumeMd(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("Graduação");
      expect(result).toContain("Técnico");
    });
  });

  describe("buildResumeJson", () => {
    it("returns valid JSON", () => {
      const result = buildResumeJson(resume, BASE_URL);
      expect(() => JSON.parse(result)).not.toThrow();
    });

    it("contains basics section", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.basics).toBeDefined();
      expect(parsed.basics.name).toBe(resume.name);
      expect(parsed.basics.label).toBe(resume.title);
      expect(parsed.basics.email).toBe(resume.email);
    });

    it("contains work section with correct count", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.work).toHaveLength(resume.experience.length);
    });

    it("contains projects section with correct count", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.projects).toHaveLength(resume.engineeringFoundations.length);
    });

    it("contains education section with correct count", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.education).toHaveLength(resume.education.length);
    });

    it("contains skills section with correct count", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.skills).toHaveLength(resume.skills.length);
    });

    it("contains certificates section", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.certificates).toHaveLength(resume.certifications.length);
    });

    it("contains languages section", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.languages).toHaveLength(resume.languages.length);
    });

    it("contains references section with correct count", () => {
      const result = buildResumeJson(resume, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.references).toHaveLength(resume.testimonials.length);
    });

    it("PT resume produces valid JSON with translated titles", () => {
      const result = buildResumeJson(resumePt, BASE_URL);
      const parsed = JSON.parse(result);
      expect(parsed.basics.label).toContain("Tech Lead");
      expect(parsed.work[0].position).toBe("Tech Lead");
    });
  });

  describe("buildLlms", () => {
    it("returns a string", () => {
      const result = buildLlms(resume, ui.en, BASE_URL);
      expect(typeof result).toBe("string");
    });

    it("starts with '# Name'", () => {
      const result = buildLlms(resume, ui.en, BASE_URL);
      expect(result.startsWith(`# ${resume.name}`)).toBe(true);
    });

    it("contains the summary first paragraph", () => {
      const result = buildLlms(resume, ui.en, BASE_URL);
      const firstParagraph = resume.summary.split("\n\n")[0];
      expect(result).toContain(firstParagraph);
    });

    it("contains the location", () => {
      const result = buildLlms(resume, ui.en, BASE_URL);
      expect(result).toContain(resume.location);
    });

    it("contains Profile section with links", () => {
      const result = buildLlms(resume, ui.en, BASE_URL);
      expect(result).toContain("## Profile");
      expect(result).toContain(`${BASE_URL}/`);
      expect(result).toContain(`${BASE_URL}/resume.md`);
      expect(result).toContain(`${BASE_URL}/resume.json`);
    });

    it("contains Contact section with email", () => {
      const result = buildLlms(resume, ui.en, BASE_URL);
      expect(result).toContain("## Contact");
      expect(result).toContain(resume.email);
    });

    it("PT version contains translated content", () => {
      const result = buildLlms(resumePt, ui["pt-br"], BASE_URL);
      expect(result).toContain("com mais de 9 anos");
      expect(result).toContain("São Paulo, Brasil");
    });
  });
});
