import { mkdir, writeFile } from "node:fs/promises";

const redirects = [
  {
    legacyPath: "/index.html",
    targetPath: "/"
  },
  {
    legacyPath: "/programnoteoutline.html",
    targetPath: "/notes"
  }
];

const outputDir = new URL("../public/redirects/", import.meta.url);

const renderRedirect = (targetPath) => `<!doctype html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${targetPath}">
    <script>location.replace(${JSON.stringify(targetPath)});</script>
  </head>
  <body></body>
</html>`;

await mkdir(outputDir, { recursive: true });

for (const redirect of redirects) {
  const fileName = redirect.legacyPath === "/index.html" ? "index.html" : redirect.legacyPath.replace(/^\//, "");
  const destination = new URL(fileName, outputDir);
  await writeFile(destination, renderRedirect(redirect.targetPath), "utf8");
}
