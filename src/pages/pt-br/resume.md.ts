import type { APIRoute } from "astro";
import { resumePt } from "../../data/resume-pt";
import ui from "../../i18n/ui";
import { buildResumeMd } from "../../i18n/endpoints";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The site URL must be configured in astro.config.mjs");
  const baseUrl = site.toString().replace(/\/$/, "");
  const content = buildResumeMd(resumePt, ui["pt-br"], baseUrl);
  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
