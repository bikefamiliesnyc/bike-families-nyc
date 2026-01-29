import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-nyc-blue mb-6">Blog</h1>
      <p className="text-xl text-gray-600 mb-8">
        Stories, tips, and updates from the Bike Families NYC community.
      </p>

      {posts.length === 0 ? (
        <div className="bg-nyc-blue/10 p-8 rounded-lg text-center text-navy">
          <p className="font-medium">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-2 border-gray-100 rounded-lg p-6 hover:border-nyc-orange hover:shadow-lg transition-all"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-navy hover:text-nyc-orange mb-2 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="text-sm text-gray-500 mb-3">
                {post.date && (
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </time>
                )}
                {post.author && <span> · {post.author}</span>}
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-nyc-orange font-medium hover:text-nyc-orange-dark transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
