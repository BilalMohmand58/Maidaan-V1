import React from "react";
import Link from "next/link";
import RecentPost from "./RecentPost";

const BlogSidebar = ({ posts }) => {
  const firstThreePosts = posts?.slice(0, 3);
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
          <h3 className="widget-title">Recent Posts</h3>

          {firstThreePosts?.map((post) => (
            <RecentPost key={post.sys.id} post={post} />
          ))}
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Business
                <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Privacy
                <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Technology
                <span className="post-count">(15)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Tips
                <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Uncategorized
                <span className="post-count">(05)</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog">
              IT <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="/blog">
              Crimso <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="/blog">
              Games <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="/blog">
              Fashion <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="/blog">
              Travel <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Smart <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Marketing <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Tips <span className="tag-link-count"> (2)</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
