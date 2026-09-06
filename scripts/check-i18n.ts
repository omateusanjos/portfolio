import { resume } from "../src/data/resume";
import { resumePt } from "../src/data/resume-pt";

const errors: string[] = [];

function compare(a: unknown, b: unknown, path = ""): void {
  if (a === null || b === null || a === undefined || b === undefined) {
    if (a !== b) {
      errors.push(`${path}: EN="${a}" PT="${b}"`);
    }
    return;
  }

  if (typeof a === "string" && typeof b === "string") {
    return;
  }

  if (typeof a !== typeof b) {
    errors.push(`${path}: type mismatch EN=${typeof a} PT=${typeof b}`);
    return;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      errors.push(`${path}: array length EN=${a.length} PT=${b.length}`);
    }
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      compare(a[i], b[i], `${path}[${i}]`);
    }
    return;
  }

  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a as Record<string, unknown>);
    const keysB = Object.keys(b as Record<string, unknown>);
    const missingInPt = keysA.filter((k) => !keysB.includes(k));
    const missingInEn = keysB.filter((k) => !keysA.includes(k));
    if (missingInPt.length) {
      errors.push(`${path}: missing in PT: ${missingInPt.join(", ")}`);
    }
    if (missingInEn.length) {
      errors.push(`${path}: missing in EN: ${missingInEn.join(", ")}`);
    }
    for (const key of keysA) {
      if (keysB.includes(key)) {
        compare(
          (a as Record<string, unknown>)[key],
          (b as Record<string, unknown>)[key],
          path ? `${path}.${key}` : key,
        );
      }
    }
    return;
  }

  if (a !== b) {
    errors.push(`${path}: EN="${a}" PT="${b}"`);
  }
}

compare(resume, resumePt, "resume");

if (errors.length > 0) {
  console.error("i18n parity check failed:\n");
  for (const err of errors) {
    console.error(`  ✗ ${err}`);
  }
  process.exit(1);
} else {
  console.log("✓ i18n parity check passed");
}
