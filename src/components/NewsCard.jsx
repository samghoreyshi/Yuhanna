import Link from 'next/link';
import { HiOutlineClock } from 'react-icons/hi';
import ImageWithPlaceholder from './ImageWithPlaceholder';

const NewsCard = ({ post }) => {
  const { Title, Content, PostDate, Slug, CoverImage } = post;

  // Get a preview of the content by taking the first paragraph's text
  const description = Content?.[0]?.children?.[0]?.text || '';
  
  return (
    <Link href={`/news/${Slug}`} className="group">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-1">
        <div className="relative w-full h-56">
          <ImageWithPlaceholder
            src={CoverImage?.formats?.medium?.url ? 
              `${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.formats.medium.url}` :
              `${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage?.url || '/placeholder-image.jpg'}`
            }
            alt={Title || 'News post image'}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors line-clamp-2">
            {Title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm text-justify leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {PostDate && (
              <div className="flex items-center gap-1.5">
                <HiOutlineClock className="w-4 h-4" />
                <time dateTime={PostDate}>{new Date(PostDate).toLocaleDateString('fa-IR')}</time>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
