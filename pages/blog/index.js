// import React from "react";
// import NavbarTwo from "../../components/Layouts/NavbarTwo";
// import PageBanner from "../../components/Common/PageBanner";
// import BlogCardContent from "../../components/Blog/BlogCardContent";
// import Footer from "../../components/Layouts/Footer";
// import { createClient } from "contentful";
// import BlogSidebar from "../../components/Blog/BlogSidebar";
// import { getMetadata } from "../../config/metadata";
// import Head from "next/head";
// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "post" });

//   return {
//     props: {
//       posts: res?.items,
//     },
//     revalidate: 1,
//   };
// }

// export default function Blog({ posts }) {
//   const page = "blog";
//   const { title, description } = getMetadata(page);
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//       </Head>
//       <NavbarTwo />

//       <PageBanner
//         pageTitle="Blog"
//         breadcrumbTextOne="Home"
//         breadcrumbTextTwo="Blogs"
//         breadcrumbUrl="/"
//       />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <BlogCardContent posts={posts} />
//           </div>
//           <div className="col-lg-4 mb-5 mt-5">
//             <BlogSidebar posts={posts} />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


import { createClient } from 'contentful';
import BlogCardContent from '../../components/Blog/BlogCardContent';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import Head from 'next/head';
import { getMetadata } from '../../config/metadata';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const page = parseInt(context.query.page) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const res = await client.getEntries({
    content_type: 'post',
    limit: limit,
    skip: skip,
  });

  return {
    props: {
      posts: res?.items,
      total: res.total,
      currentPage: page,
    },
  };
}

export default function Blog({ posts, total, currentPage }) {
  const page = 'blog';
  const { title, description } = getMetadata(page);
  const totalPages = Math.ceil(total / 6);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blogs"
        breadcrumbUrl="/"
      />
     <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <BlogCardContent posts={posts} />
            <div className="pagination-area">
        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index + 1} href={`/blog?page=${index + 1}`}>
            <div className={index + 1 === currentPage ? 'page-numbers current' : 'page-numbers'}>
              {index + 1}
            </div>
          </Link>
        ))}
      </div>
          </div>
          <div className="col-lg-4 mb-5 mt-5">
            <BlogSidebar posts={posts} />
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
}
