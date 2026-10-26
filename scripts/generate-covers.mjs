import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "scripts", "covers");
const OUT_DIR = path.join(ROOT, "public", "covers");
const WIDTHS = [640, 960];
const QUALITY = 82;

const covers = [
  {
    slug: "flexio-api-core",
    category: "BACKEND API",
    title: "Flexio API Core",
    subtitle: "Turnos, clientes y caja para negocios de servicios",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    motif: "calendar",
  },
  {
    slug: "stoqra",
    category: "AI TELEGRAM BOT",
    title: "Stoqra",
    subtitle: "Agente de IA en Telegram",
    stack: ["Bun", "TypeScript", "LangChain", "SQLite"],
    motif: "chat",
  },
  {
    slug: "lazyplan",
    category: "PYTHON CLI",
    title: "LazyPlan",
    subtitle: "Ideas de proyectos desde la terminal",
    stack: ["Python", "Textual", "Typer", "PyPI"],
    motif: "terminal",
  },
  {
    slug: "risc-vs-cisc",
    category: "INTERACTIVE TALK",
    title: "RISC vs CISC",
    subtitle: "Presentación interactiva de arquitectura",
    stack: ["React", "TypeScript", "GSAP", "Tailwind"],
    motif: "chip",
  },
  {
    slug: "ecommerce-react",
    category: "FRONTEND APP",
    title: "E-commerce React",
    subtitle: "Proyecto final de React en CoderHouse",
    stack: ["React", "Firebase", "Redux", "Vite"],
    motif: "cart",
  },
];

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const chips = (stack, y) => {
  let x = 80;
  return stack
    .map((tech) => {
      const width = Math.max(72, tech.length * 10 + 30);
      const chip = `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="44" rx="22" fill="#18181b" stroke="#3f3f46" />
      <text x="${x + width / 2}" y="${y + 28}" text-anchor="middle" font-family="Inter, DejaVu Sans, sans-serif" font-size="17" font-weight="500" fill="#d4d4d8">${escapeXml(tech)}</text>
    </g>`;
      x += width + 12;
      return chip;
    })
    .join("");
};

const motifs = {
  calendar: `
    <g transform="translate(966 176)">
      <rect x="0" y="0" width="214" height="214" rx="28" fill="#111113" stroke="#27272a" />
      <rect x="0" y="0" width="214" height="54" rx="28" fill="#18181b" />
      <rect x="0" y="28" width="214" height="26" fill="#18181b" />
      <circle cx="34" cy="27" r="6" fill="#ef4444" />
      <circle cx="56" cy="27" r="6" fill="#3f3f46" />
      <circle cx="78" cy="27" r="6" fill="#3f3f46" />
      <g fill="none" stroke="#3f3f46" stroke-width="2">
        <rect x="32" y="82" width="38" height="30" rx="7" />
        <rect x="88" y="82" width="38" height="30" rx="7" />
        <rect x="144" y="82" width="38" height="30" rx="7" />
        <rect x="32" y="128" width="38" height="30" rx="7" />
        <rect x="88" y="128" width="38" height="30" rx="7" />
        <rect x="144" y="128" width="38" height="30" rx="7" />
      </g>
      <rect x="88" y="128" width="38" height="30" rx="7" fill="#ef4444" />
      <path d="M99 143 l7 7 l13 -14" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>`,
  chat: `
    <g transform="translate(966 176)">
      <rect x="0" y="0" width="214" height="214" rx="28" fill="#111113" stroke="#27272a" />
      <path d="M42 62 h130 a18 18 0 0 1 18 18 v56 a18 18 0 0 1 -18 18 h-58 l-26 24 v-24 h-46 a18 18 0 0 1 -18 -18 v-56 a18 18 0 0 1 18 -18 z" fill="none" stroke="#ef4444" stroke-width="4" stroke-linejoin="round" />
      <circle cx="82" cy="108" r="7" fill="#ef4444" />
      <circle cx="107" cy="108" r="7" fill="#71717a" />
      <circle cx="132" cy="108" r="7" fill="#3f3f46" />
      <path d="M158 40 l6 16 l16 6 l-16 6 l-6 16 l-6 -16 l-16 -6 l16 -6 z" fill="#ef4444" opacity="0.9" />
    </g>`,
  terminal: `
    <g transform="translate(966 176)">
      <rect x="0" y="0" width="214" height="214" rx="28" fill="#111113" stroke="#27272a" />
      <rect x="0" y="0" width="214" height="46" rx="28" fill="#18181b" />
      <rect x="0" y="24" width="214" height="22" fill="#18181b" />
      <circle cx="30" cy="23" r="6" fill="#ef4444" />
      <circle cx="52" cy="23" r="6" fill="#3f3f46" />
      <circle cx="74" cy="23" r="6" fill="#3f3f46" />
      <text x="30" y="92" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#ef4444">&gt;_</text>
      <rect x="30" y="112" width="118" height="8" rx="4" fill="#3f3f46" />
      <rect x="30" y="134" width="154" height="8" rx="4" fill="#27272a" />
      <rect x="30" y="156" width="90" height="8" rx="4" fill="#27272a" />
      <rect x="30" y="178" width="126" height="8" rx="4" fill="#27272a" />
    </g>`,
  chip: `
    <g transform="translate(966 176)">
      <rect x="0" y="0" width="214" height="214" rx="28" fill="#111113" stroke="#27272a" />
      <rect x="52" y="52" width="110" height="110" rx="18" fill="none" stroke="#ef4444" stroke-width="4" />
      <rect x="78" y="78" width="58" height="58" rx="10" fill="#ef4444" opacity="0.18" />
      <text x="107" y="116" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="18" fill="#ef4444">CPU</text>
      <g stroke="#3f3f46" stroke-width="4" stroke-linecap="round">
        <path d="M74 52 v-22 M107 52 v-22 M140 52 v-22" />
        <path d="M74 162 v22 M107 162 v22 M140 162 v22" />
        <path d="M52 74 h-22 M52 107 h-22 M52 140 h-22" />
        <path d="M162 74 h22 M162 107 h22 M162 140 h22" />
      </g>
    </g>`,
  cart: `
    <g transform="translate(966 176)">
      <rect x="0" y="0" width="214" height="214" rx="28" fill="#111113" stroke="#27272a" />
      <path d="M62 78 h90 l-10 82 h-70 z" fill="none" stroke="#ef4444" stroke-width="4" stroke-linejoin="round" />
      <path d="M84 78 v-14 a23 23 0 0 1 46 0 v14" fill="none" stroke="#71717a" stroke-width="4" stroke-linecap="round" />
      <rect x="78" y="108" width="58" height="12" rx="6" fill="#3f3f46" />
      <rect x="78" y="130" width="38" height="12" rx="6" fill="#27272a" />
      <circle cx="160" cy="56" r="20" fill="#ef4444" />
      <path d="M152 56 h16 M160 48 v16" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />
    </g>`,
};

const buildSvg = (cover) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#09090b" />
      <stop offset="1" stop-color="#18181b" />
    </linearGradient>
    <radialGradient id="glow" cx="0.84" cy="0.16" r="0.62">
      <stop offset="0" stop-color="#ef4444" stop-opacity="0.2" />
      <stop offset="1" stop-color="#ef4444" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1280" height="720" fill="url(#bg)" />
  <rect width="1280" height="720" fill="url(#grid)" />
  <rect width="1280" height="720" fill="url(#glow)" />

  <line x1="80" y1="100" x2="1200" y2="100" stroke="#27272a" stroke-width="1" />

  <text x="80" y="74" font-family="Inter, DejaVu Sans, sans-serif" font-size="28" font-weight="700" fill="#fafafa">MM<tspan fill="#ef4444">.</tspan></text>
  <text x="1200" y="72" text-anchor="end" font-family="Inter, DejaVu Sans, sans-serif" font-size="15" font-weight="600" letter-spacing="4" fill="#ef4444">${escapeXml(cover.category)}</text>

  <rect x="80" y="208" width="96" height="6" rx="3" fill="#ef4444" />
  <text x="80" y="304" font-family="Inter, DejaVu Sans, sans-serif" font-size="62" font-weight="700" letter-spacing="-1.5" fill="#ffffff">${escapeXml(cover.title)}</text>
  <text x="80" y="356" font-family="Inter, DejaVu Sans, sans-serif" font-size="24" font-weight="400" fill="#a1a1aa">${escapeXml(cover.subtitle)}</text>

  ${chips(cover.stack, 566)}
  ${motifs[cover.motif]}

  <line x1="80" y1="648" x2="1200" y2="648" stroke="#27272a" stroke-width="1" />
  <text x="80" y="686" font-family="DejaVu Sans Mono, monospace" font-size="14" letter-spacing="3" fill="#52525b">MARCELO MASTROIANI</text>
  <text x="1200" y="686" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="14" letter-spacing="3" fill="#52525b">PORTAFOLIO</text>
</svg>`;

await fs.mkdir(SRC_DIR, { recursive: true });
await fs.mkdir(OUT_DIR, { recursive: true });

for (const cover of covers) {
  const svg = buildSvg(cover);
  await fs.writeFile(path.join(SRC_DIR, `${cover.slug}.svg`), svg);

  for (const width of WIDTHS) {
    const out = path.join(OUT_DIR, `${cover.slug}-${width}.webp`);
    await sharp(Buffer.from(svg))
      .resize({ width })
      .webp({ quality: QUALITY })
      .toFile(out);
    console.log("ok", path.relative(ROOT, out));
  }
}
