import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.resolve("public");
const WIDTHS = [640, 960];
const QUALITY = 80;

const sources = [
  { file: "microservices-architecture-dashboard-dark-theme.jpg", widths: WIDTHS },
  { file: "modern-ecommerce-mobile-app-interface.jpg", widths: WIDTHS },
  { file: "movie-streaming-app-interface-dark-theme-posters.jpg", widths: WIDTHS },
  { file: "agriculture-irrigation-systems-corporate-website-g.jpg", widths: WIDTHS },
  { file: "sustainable-agriculture-corporate-website-modern.jpg", widths: WIDTHS },
  { file: "historias-wanderlust.jpg", widths: WIDTHS },
  { file: "foto-perfil.webp", widths: [480] },
];

for (const { file, widths } of sources) {
  const src = path.join(PUBLIC, file);
  const base = file.replace(/\.(jpg|webp)$/, "");

  for (const width of widths) {
    const out = path.join(PUBLIC, `${base}-${width}.webp`);
    await sharp(src).resize({ width }).webp({ quality: QUALITY }).toFile(out);
    console.log("ok", path.basename(out));
  }
}
