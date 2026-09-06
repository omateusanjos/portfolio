// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mateus-anjos.vercel.app",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: { prefixDefaultLocale: false },
    fallback: { "pt-br": "en" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
