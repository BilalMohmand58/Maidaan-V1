// import fs from "fs/promises";
// import path from "path";

// export async function getServerSideProps({ res }) {
//   const pagesDirectory = path.join(process.cwd(), "pages");
//   const pages = await getAllPages(pagesDirectory);

//   const sitemap = generateSitemapXML(pages);

//   res.setHeader("Content-Type", "application/xml");
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// }

// async function getAllPages(pagesDirectory) {
//   const pages = [];

//   async function readDirectory(directory) {
//     const files = await fs.readdir(directory);
//     for (const file of files) {
//       const filePath = path.join(directory, file);
//       const stat = await fs.stat(filePath);
//       if (stat.isDirectory()) {
//         await readDirectory(filePath);
//       } else {
//         if (file.endsWith(".js") && !file.startsWith("_")) {
//           const pagePath = filePath
//             .replace(pagesDirectory, "")
//             .replace(/\.js$/, "");
//           const url = `https://www.themaidaan.com/${pagePath}`;
//           pages.push({ url, changefreq: "weekly", priority: "0.5" });
//         }
//       }
//     }
//   }

//   await readDirectory(pagesDirectory);
//   return pages;
// }

// const Sitemap = () => {};
// export default Sitemap;

// function generateSitemapXML(pages) {
//   let xml = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
//   pages.forEach((page) => {
//     xml += `<url>
//               <loc>${page.url}</loc>
//               <changefreq>${page.changefreq || "weekly"}</changefreq>
//               <priority>${page.priority || "0.5"}</priority>
//             </url>
//             `;
//   });
//   xml += ` </urlset>`;

//   return xml;
// }

export async function getServerSideProps({ res }) {
  const pages = [
    {
      url: "https://www.themaidaan.com/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/propertyKaMaidaan/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/about-us/",
      changefreq: "weekly",
      priority: "0.5",
    },
  ];

  const sitemap = generateSitemapXML(pages);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
const Sitemap = () => {};
export default Sitemap;
function generateSitemapXML(pages) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  pages.forEach((page) => {
    xml += `<url>
              <loc>${page.url}</loc>
              <changefreq>${page.changefreq || "weekly"}</changefreq>
              <priority>${page.priority || "0.5"}</priority>
            </url>
            `;
  });
  xml += ` </urlset>`;

  return xml;
}
