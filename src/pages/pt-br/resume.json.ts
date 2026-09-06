import type { APIRoute } from "astro";
import { resumePt } from "../../data/resume-pt";
import { buildResumeJson } from "../../i18n/endpoints";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The site URL must be configured in astro.config.mjs");
  const content = buildResumeJson(resumePt, site.toString());
  return new Response(content, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
