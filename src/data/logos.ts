export interface LogoInfo {
  type: "initials" | "brand";
  initials: string;
  bgColor: string;
}

export const LOGOS: Record<string, LogoInfo> = {
  aarin: { type: "initials", initials: "A", bgColor: "#cc092f" },
  bradesco: { type: "initials", initials: "B", bgColor: "#cc092f" },
  "iteris-briteris": { type: "initials", initials: "I&B", bgColor: "#2563eb" },
  whirlpool: { type: "initials", initials: "W", bgColor: "#003da5" },
  mevo: { type: "initials", initials: "M", bgColor: "#059669" },
  shift: { type: "initials", initials: "S", bgColor: "#7c3aed" },
  fdc: { type: "initials", initials: "FDC", bgColor: "#1e40af" },
  pucrs: { type: "initials", initials: "P", bgColor: "#1e40af" },
  estacio: { type: "initials", initials: "E", bgColor: "#0369a1" },
  claude: { type: "initials", initials: "C", bgColor: "#d97706" },
  aws: { type: "initials", initials: "AWS", bgColor: "#ff9900" },
  github: { type: "initials", initials: "GH", bgColor: "#6e40c9" },
};

export function initialsSvg(
  initials: string,
  bg: string,
  size: number
): string {
  const r = size / 2;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="${r}" fill="${bg}" />
    <text x="${r}" y="${r}" text-anchor="middle" dominant-baseline="central" fill="white" font-family="Inter, system-ui, sans-serif" font-weight="700" font-size="${size * 0.42}">${initials}</text>
  </svg>`;
}
