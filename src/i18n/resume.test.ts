import { describe, it, expect } from "vitest";
import { getResume } from "./resume";
import { resume } from "../data/resume";
import { resumePt } from "../data/resume-pt";

describe("i18n/resume", () => {
  describe("getResume", () => {
    it("returns EN resume for 'en' locale", () => {
      const result = getResume("en");
      expect(result).toBe(resume);
      expect(result.name).toBe("Mateus Anjos");
      expect(result.title).toContain("Staff Software Engineer");
    });

    it("returns PT resume for 'pt-br' locale", () => {
      const result = getResume("pt-br");
      expect(result).toBe(resumePt);
      expect(result.name).toBe("Mateus Anjos");
      expect(result.title).toContain("Staff Software Engineer");
    });

    it("returns the correct object reference (not a copy)", () => {
      const en1 = getResume("en");
      const en2 = getResume("en");
      expect(en1).toBe(en2);
    });

    it("EN and PT have the same structure", () => {
      const enResume = getResume("en");
      const ptResume = getResume("pt-br");

      expect(Object.keys(enResume).sort()).toEqual(Object.keys(ptResume).sort());
      expect(enResume.experience).toHaveLength(ptResume.experience.length);
      expect(enResume.engineeringFoundations).toHaveLength(ptResume.engineeringFoundations.length);
      expect(enResume.education).toHaveLength(ptResume.education.length);
      expect(enResume.testimonials).toHaveLength(ptResume.testimonials.length);
      expect(enResume.skills).toHaveLength(ptResume.skills.length);
      expect(enResume.aiTools).toHaveLength(ptResume.aiTools.length);
      expect(enResume.certifications).toHaveLength(ptResume.certifications.length);
      expect(enResume.languages).toHaveLength(ptResume.languages.length);
    });

    it("EN and PT share the same email", () => {
      expect(getResume("en").email).toBe(getResume("pt-br").email);
    });

    it("EN and PT share the same linkedin", () => {
      expect(getResume("en").linkedin).toBe(getResume("pt-br").linkedin);
    });
  });
});
