import React from "react";
import Link from "next/link";
import RecentPost from "./RecentPost";
import RelatedPost from "./RelatedPost";

const SingleBlogSidebar = ({ relatedBlogPosts }) => {
  return (
    <>
      <aside className="widget-area" id="secondary">
        {/* Search form */}
        {/* <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div> */}

        {/* Recent Posts */}
        <div className="widget widget_zash_posts_thumb">
          <h3 className="widget-title">Related Posts</h3>

          {relatedBlogPosts?.map((post) => (
            <RelatedPost key={post.sys.id} post={post} />
          ))}
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Real Estate
                <span className="post-count">(0)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Investments
                <span className="post-count">(0)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Technology
                <span className="post-count">(0)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Marketing
                <span className="post-count">(0)</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog">
              Tech <span className="tag-link-count"> (0)</span>
            </Link>
            <Link href="/blog">
              Real Estate <span className="tag-link-count"> (0)</span>
            </Link>

            <Link href="/blog">
              Properties <span className="tag-link-count"> (0)</span>
            </Link>
            <Link href="/blog">
              High RIO <span className="tag-link-count"> (0)</span>
            </Link>
            <Link href="/blog">
              Marketing <span className="tag-link-count"> (0)</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SingleBlogSidebar;
