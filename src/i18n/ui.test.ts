import { describe, it, expect } from "vitest";
import ui, { type UiStrings } from "./ui";
import { locales, type Locale } from "./index";

type RecursiveKeys<T> = T extends object
  ? { [K in keyof T & string]: K }[keyof T & string]
  : never;

function collectLeafPaths(obj: Record<string, unknown>, prefix = ""): string[] {
  const paths: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      paths.push(...collectLeafPaths(value as Record<string, unknown>, path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}

describe("i18n/ui", () => {
  describe("structure", () => {
    it("has entries for all locales", () => {
      for (const locale of locales) {
        expect(ui).toHaveProperty(locale);
      }
    });

    it("has exactly 'en' and 'pt-br' keys", () => {
      expect(Object.keys(ui)).toEqual(["en", "pt-br"]);
    });
  });

  describe("EN UI strings", () => {
    const en: UiStrings = ui.en;

    it("has all nav keys", () => {
      expect(en.nav).toHaveProperty("about");
      expect(en.nav).toHaveProperty("experience");
      expect(en.nav).toHaveProperty("ai");
      expect(en.nav).toHaveProperty("skills");
      expect(en.nav).toHaveProperty("education");
      expect(en.nav).toHaveProperty("contact");
      expect(en.nav).toHaveProperty("menu");
    });

    it("has hero.email", () => {
      expect(en.hero.email).toBe("Email");
    });

    it("has all section titles", () => {
      expect(en.about).toBe("About");
      expect(en.experience).toBe("Experience");
      expect(en.skills).toBe("Skills");
      expect(en.education).toBe("Education");
      expect(en.present).toBe("Present");
    });

    it("has ef section", () => {
      expect(en.ef.eyebrow).toBeTruthy();
      expect(en.ef.title).toBeTruthy();
      expect(en.ef.intro).toBeTruthy();
    });

    it("has testimonials section", () => {
      expect(en.testimonials.title).toBe("What People Say");
    });

    it("has ai section", () => {
      expect(en.ai.title).toBeTruthy();
      expect(en.ai.intro).toBeTruthy();
      expect(en.ai.practices).toBeTruthy();
      expect(en.ai.badge).toBeTruthy();
    });

    it("has footer section", () => {
      expect(en.footer.title).toBeTruthy();
      expect(en.footer.intro).toBeTruthy();
      expect(en.footer.md).toBeTruthy();
      expect(en.footer.rights).toBeTruthy();
    });

    it("has skip link text", () => {
      expect(en.skip).toBeTruthy();
    });

    it("has meta section", () => {
      expect(en.meta.description).toBeTruthy();
      expect(en.meta.title).toBeTruthy();
      expect(en.meta.ogAlt).toBeTruthy();
    });

    it("has resumeLink", () => {
      expect(en.resumeLink).toBeTruthy();
    });

    it("has languages", () => {
      expect(en.languages).toBeTruthy();
    });

    it("has privateInitiative", () => {
      expect(en.privateInitiative).toBeTruthy();
    });
  });

  describe("PT UI strings", () => {
    const pt: UiStrings = ui["pt-br"];

    it("has all nav keys matching EN structure", () => {
      const enKeys = Object.keys(ui.en.nav).sort();
      const ptKeys = Object.keys(pt.nav).sort();
      expect(ptKeys).toEqual(enKeys);
    });

    it("has Portuguese translations", () => {
      expect(pt.nav.about).toBe("Sobre");
      expect(pt.nav.experience).toBe("Experiência");
      expect(pt.nav.ai).toBe("IA");
      expect(pt.hero.email).toBe("E-mail");
      expect(pt.about).toBe("Sobre");
      expect(pt.experience).toBe("Experiência");
      expect(pt.skills).toBe("Habilidades");
      expect(pt.education).toBe("Formação");
      expect(pt.present).toBe("Atual");
    });

    it("has all section titles translated", () => {
      expect(pt.testimonials.title).toBe("Depoimentos");
      expect(pt.ef.title).toBe("Fundamentos de Engenharia");
      expect(pt.ai.title).toBe("IA & Inovação");
    });

    it("has meta translated", () => {
      expect(pt.meta.title).toContain("e Tech Lead");
      expect(pt.meta.description).toContain("9+ anos");
    });

    it("has languages translated", () => {
      expect(pt.languages).toBe("Idiomas");
    });

    it("has privateInitiative translated", () => {
      expect(pt.privateInitiative).toBe("Iniciativa privada");
    });
  });

  describe("EN/PT parity", () => {
    it("EN and PT have identical leaf paths", () => {
      const enPaths = collectLeafPaths(ui.en as unknown as Record<string, unknown>).sort();
      const ptPaths = collectLeafPaths(ui["pt-br"] as unknown as Record<string, unknown>).sort();
      expect(ptPaths).toEqual(enPaths);
    });

    it("no EN string appears in PT values (cross-contamination check)", () => {
      const enValues = new Set<string>();
      function collectStrings(obj: Record<string, unknown>) {
        for (const value of Object.values(obj)) {
          if (typeof value === "string") enValues.add(value);
          else if (value && typeof value === "object") collectStrings(value as Record<string, unknown>);
        }
      }
      collectStrings(ui.en as unknown as Record<string, unknown>);

      const allowlist = new Set(["ai.badges.0", "ai.badges.1", "ai.badges.2"]);

      const contaminants: string[] = [];
      function checkPt(obj: Record<string, unknown>, path = "") {
        for (const [key, value] of Object.entries(obj)) {
          const currentPath = path ? `${path}.${key}` : key;
          if (typeof value === "string" && enValues.has(value) && !allowlist.has(currentPath)) {
            contaminants.push(currentPath);
          } else if (value && typeof value === "object") {
            checkPt(value as Record<string, unknown>, currentPath);
          }
        }
      }
      checkPt(ui["pt-br"] as unknown as Record<string, unknown>);

      expect(contaminants).toEqual([]);
    });
  });
});
