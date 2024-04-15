import fs from "fs";
import path from "path";

export function getAllPages(directory, baseUrl = "") {
  const pages = [];

  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const isDirectory = fs.lstatSync(filePath).isDirectory();
    const url = `${baseUrl}/${file}`.replace(/\/index$/, "");

    if (isDirectory) {
      pages.push(...getAllPages(filePath, url));
    } else if (file.endsWith(".js") && !file.startsWith("_")) {
      pages.push(url);
    }
  });

  return pages;
}
