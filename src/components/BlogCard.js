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
    <Link href={`/blog/${post.Slug}`} className="block">
      <article className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md group">
        {/* Image */}
        {imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
              alt={post.Title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex gap-2 mb-2 flex-wrap">
            {post.Tags?.map((tag) => (
              <span
                key={tag.id}
                className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600"
              >
                {tag.Tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.Title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{post.Author}</span>
            <time dateTime={post.PostDate}>{date}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
