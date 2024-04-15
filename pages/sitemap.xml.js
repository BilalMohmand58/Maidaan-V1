import { getAllPages } from "../utils/pages";

export default function SiteMap() {}

export async function getServerSideProps({ res }) {
  const pages = getAllPages("./pages", process.env.NEXT_PUBLIC_BASE_URL);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>`;
        })
        .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}
