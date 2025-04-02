import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  // Extract the first paragraph of content for the excerpt
  const excerpt = post.Content.find(
    block => block.type === 'paragraph' && block.children?.[0]?.text
  )?.children[0]?.text || '';

  // Format date
  const date = new Date(post.PostDate).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get the correct image URL
  const imageUrl = post.CoverImage?.formats?.small?.url || post.CoverImage?.url || '';

  return (
    <Link href={`/blog/${post.Slug || post.id}`} className="block group">
      <article className="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group-hover:border-accent/20">
        {/* Image */}
        {imageUrl && (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
              alt={post.Title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex gap-2 mb-2 flex-wrap">
            {post.Tags?.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="text-xs px-2 py-0.5 rounded-md bg-gray-50 text-gray-600"
              >
                {tag.Tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {post.Title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-50">
            <time dateTime={post.PostDate}>
              {date}
            </time>
            <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              ادامه مطلب
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
