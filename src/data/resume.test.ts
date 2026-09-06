import { describe, it, expect } from "vitest";
import { resume } from "./resume";
import { resumePt } from "./resume-pt";

describe("data/resume structural parity", () => {
  it("EN and PT have the same top-level keys", () => {
    const enKeys = Object.keys(resume).sort();
    const ptKeys = Object.keys(resumePt).sort();
    expect(ptKeys).toEqual(enKeys);
  });

  it("EN and PT have the same experience count", () => {
    expect(resume.experience).toHaveLength(resumePt.experience.length);
  });

  it("EN and PT experience entries have the same structure", () => {
    for (let i = 0; i < resume.experience.length; i++) {
      const enKeys = Object.keys(resume.experience[i]).sort();
      const ptKeys = Object.keys(resumePt.experience[i]).sort();
      expect(ptKeys).toEqual(enKeys);
    }
  });

  it("EN and PT have the same engineering foundations count", () => {
    expect(resume.engineeringFoundations).toHaveLength(resumePt.engineeringFoundations.length);
  });

  it("EN and PT engineering foundations have the same structure", () => {
    for (let i = 0; i < resume.engineeringFoundations.length; i++) {
      const enKeys = Object.keys(resume.engineeringFoundations[i]).sort();
      const ptKeys = Object.keys(resumePt.engineeringFoundations[i]).sort();
      expect(ptKeys).toEqual(enKeys);
    }
  });

  it("EN and PT have the same education count", () => {
    expect(resume.education).toHaveLength(resumePt.education.length);
  });

  it("EN and PT education entries have the same structure", () => {
    for (let i = 0; i < resume.education.length; i++) {
      const enKeys = Object.keys(resume.education[i]).sort();
      const ptKeys = Object.keys(resumePt.education[i]).sort();
      expect(ptKeys).toEqual(enKeys);
    }
  });

  it("EN and PT have the same testimonial count", () => {
    expect(resume.testimonials).toHaveLength(resumePt.testimonials.length);
  });

  it("EN and PT testimonials have the same structure", () => {
    for (let i = 0; i < resume.testimonials.length; i++) {
      const enKeys = Object.keys(resume.testimonials[i]).sort();
      const ptKeys = Object.keys(resumePt.testimonials[i]).sort();
      expect(ptKeys).toEqual(enKeys);
    }
  });

  it("EN and PT have the same skills group count", () => {
    expect(resume.skills).toHaveLength(resumePt.skills.length);
  });

  it("EN and PT skills groups have the same item counts", () => {
    for (let i = 0; i < resume.skills.length; i++) {
      expect(resume.skills[i].items).toHaveLength(resumePt.skills[i].items.length);
    }
  });

  it("EN and PT have the same certifications count", () => {
    expect(resume.certifications).toHaveLength(resumePt.certifications.length);
  });

  it("EN and PT have the same aiTools count", () => {
    expect(resume.aiTools).toHaveLength(resumePt.aiTools.length);
  });

  it("EN and PT aiTools have the same structure", () => {
    for (let i = 0; i < resume.aiTools.length; i++) {
      const enKeys = Object.keys(resume.aiTools[i]).sort();
      const ptKeys = Object.keys(resumePt.aiTools[i]).sort();
      expect(ptKeys).toEqual(enKeys);
    }
  });

  it("EN and PT have the same languages count", () => {
    expect(resume.languages).toHaveLength(resumePt.languages.length);
  });

  it("EN and PT share the same email", () => {
    expect(resume.email).toBe(resumePt.email);
  });

  it("EN and PT share the same linkedin", () => {
    expect(resume.linkedin).toBe(resumePt.linkedin);
  });

  it("EN and PT share the same logoIds for experience", () => {
    for (let i = 0; i < resume.experience.length; i++) {
      expect(resume.experience[i].logoId).toBe(resumePt.experience[i].logoId);
    }
  });

  it("EN and PT share the same logoIds for education", () => {
    for (let i = 0; i < resume.education.length; i++) {
      expect(resume.education[i].logoId).toBe(resumePt.education[i].logoId);
    }
  });

  it("EN and PT share the same testimonial photoIds", () => {
    for (let i = 0; i < resume.testimonials.length; i++) {
      expect(resume.testimonials[i].photoId).toBe(resumePt.testimonials[i].photoId);
    }
  });

  it("EN and PT share the same testimonial linkedin URLs", () => {
    for (let i = 0; i < resume.testimonials.length; i++) {
      expect(resume.testimonials[i].linkedin).toBe(resumePt.testimonials[i].linkedin);
    }
  });

  it("EN and PT share the same media files", () => {
    const enMedia = resume.experience.filter((j) => j.media);
    const ptMedia = resumePt.experience.filter((j) => j.media);
    for (let i = 0; i < enMedia.length; i++) {
      expect(enMedia[i].media!.src).toBe(ptMedia[i].media!.src);
      expect(enMedia[i].media!.type).toBe(ptMedia[i].media!.type);
    }
  });

  it("PT resume has translated titles (not identical to EN)", () => {
    expect(resumePt.title).not.toBe(resume.title);
    expect(resumePt.location).not.toBe(resume.location);
  });

  it("PT experience titles are translated", () => {
    expect(resumePt.experience[0].title).toBe("Tech Lead");
    expect(resumePt.experience[1].title).toContain("Engenheiro de Software Sênior");
  });
});
