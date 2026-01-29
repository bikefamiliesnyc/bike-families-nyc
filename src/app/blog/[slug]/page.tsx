import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Bike Families NYC Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="text-nyc-orange hover:text-nyc-orange-dark mb-6 inline-block font-medium transition-colors"
      >
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4">{post.title}</h1>
          <div className="text-gray-500">
            {post.date && (
              <time dateTime={post.date}>
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
            )}
            {post.author && <span> · {post.author}</span>}
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-navy prose-a:text-nyc-orange hover:prose-a:text-nyc-orange-dark">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
