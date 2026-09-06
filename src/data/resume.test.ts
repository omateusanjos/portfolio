import { describe, it, expect } from "vitest";
import { resume } from "./resume";
import { resumePt } from "./resume-pt";

function collectLeafPaths(obj: Record<string, unknown>, prefix = ""): string[] {
  const paths: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(value)) {
      paths.push(path);
      value.forEach((item, i) => {
        if (item && typeof item === "object") {
          paths.push(...collectLeafPaths(item as Record<string, unknown>, `${path}[${i}]`));
        } else {
          paths.push(`${path}[${i}]`);
        }
      });
    } else if (value && typeof value === "object") {
      paths.push(...collectLeafPaths(value as Record<string, unknown>, path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}

function compareStructures(a: Record<string, unknown>, b: Record<string, unknown>, path = ""): string[] {
  const errors: string[] = [];

  if (a === null || b === null || a === undefined || b === undefined) {
    if (a !== b) errors.push(`${path}: EN="${a}" PT="${b}"`);
    return errors;
  }

  if (typeof a === "string" && typeof b === "string") return [];
  if (typeof a !== typeof b) {
    errors.push(`${path}: type mismatch EN=${typeof a} PT=${typeof b}`);
    return errors;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      errors.push(`${path}: array length EN=${a.length} PT=${b.length}`);
    }
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      errors.push(...compareStructures(a[i] as Record<string, unknown>, b[i] as Record<string, unknown>, `${path}[${i}]`));
    }
    return errors;
  }

  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();
    if (keysA.join(",") !== keysB.join(",")) {
      errors.push(`${path}: keys mismatch EN=[${keysA}] PT=[${keysB}]`);
    }
    for (const key of keysA) {
      if (keysB.includes(key)) {
        errors.push(...compareStructures(a[key] as Record<string, unknown>, b[key] as Record<string, unknown>, path ? `${path}.${key}` : key));
      }
    }
    return errors;
  }

  return errors;
}

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
