import { describe, it, expect } from "vitest";
import { locales, defaultLocale, langAttr } from "./index";

describe("i18n/index", () => {
  describe("locales", () => {
    it("contains 'en' and 'pt-br'", () => {
      expect(locales).toContain("en");
      expect(locales).toContain("pt-br");
      expect(locales).toHaveLength(2);
    });

    it("has exactly 2 elements", () => {
      expect(locales).toHaveLength(2);
    });
  });

  describe("defaultLocale", () => {
    it("is 'en'", () => {
      expect(defaultLocale).toBe("en");
    });

    it("is included in locales", () => {
      expect(locales).toContain(defaultLocale);
    });
  });

  describe("langAttr", () => {
    it("has an entry for every locale", () => {
      for (const locale of locales) {
        expect(langAttr).toHaveProperty(locale);
      }
    });

    it("maps 'en' to 'en'", () => {
      expect(langAttr.en).toBe("en");
    });

    it("maps 'pt-br' to 'pt-BR'", () => {
      expect(langAttr["pt-br"]).toBe("pt-BR");
    });

    it("has only 'en' and 'pt-br' keys", () => {
      expect(Object.keys(langAttr)).toEqual(["en", "pt-br"]);
    });
  });
});
