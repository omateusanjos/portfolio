import type { APIRoute } from "astro";
import { resume } from "../data/resume";
import ui from "../i18n/ui";
import { buildLlms } from "../i18n/endpoints";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The site URL must be configured in astro.config.mjs");
  const baseUrl = site.toString().replace(/\/$/, "");
  const content = buildLlms(resume, ui.en, baseUrl);
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
