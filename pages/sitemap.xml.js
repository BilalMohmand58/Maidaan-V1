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
    {
      url: "https://www.themaidaan.com/contact-us/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/discoverDubai/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/investInDubai/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/investInPak/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/blog/",
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      url: "https://www.themaidaan.com/services/",
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
