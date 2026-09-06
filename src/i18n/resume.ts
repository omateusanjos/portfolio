import type { Locale } from "./index";
import { resume } from "../data/resume";
import { resumePt } from "../data/resume-pt";

const resumes: Record<Locale, typeof resume> = {
  en: resume,
  "pt-br": resumePt,
};

export const getResume = (locale: Locale): typeof resume => resumes[locale];
