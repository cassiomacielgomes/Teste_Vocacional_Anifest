// Resolve images placed manually in src/assets/profissoes/ at build time.
// Vite needs a static glob — drop your .webp/.jpg/.png files in that folder
// and they'll be picked up automatically by filename (e.g. "informatica.webp").
const modules = import.meta.glob("@/assets/profissoes/*.{webp,jpg,jpeg,png,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const byFilename: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const filename = path.split("/").pop();
  if (filename) byFilename[filename] = url;
}

export function getProfessionImage(imagePath: string): string | undefined {
  return byFilename[imagePath];
}
