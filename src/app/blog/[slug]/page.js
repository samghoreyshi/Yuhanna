import RichTextRenderer from '@/components/RichTextRenderer';
import Link from 'next/link';
import { HiOutlineArrowRight, HiOutlineClock, HiOutlineUser } from 'react-icons/hi';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';

async function getArticle(slug) {
  try {
    console.log('Fetching article with slug:', slug);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?filters[Slug][$eq]=${slug}&populate=*`,
      { cache: 'no-store' }
    );
    const { data } = await res.json();
    console.log('Article API response:', data);
    if (!data || data.length === 0) {
      return null;
    }
    return data[0];
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    return {
      title: 'مقاله یافت نشد | یوحنا',
      description: 'متاسفانه مقاله مورد نظر یافت نشد.'
    };
  }

  const title = article.Title;
  const description = article.Content[0]?.children?.[0]?.text || '';
  const imageUrl = article.CoverImage?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.CoverImage.url}`
    : null;

  return {
    title: `${title} | وبلاگ یوحنا`,
    description: description.substring(0, 160),
    openGraph: {
      title: `${title} | وبلاگ یوحنا`,
      description: description.substring(0, 160),
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.Author],
      images: imageUrl ? [imageUrl] : [],
      locale: 'fa_IR',
      siteName: 'یوحنا',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | وبلاگ یوحنا`,
      description: description.substring(0, 160),
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://yuhanna.ir/blog/${params.slug}`
    }
  };
}

export default async function BlogPost({ params }) {
  const post = await getArticle(params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            مقاله مورد نظر یافت نشد
          </h1>
          <Link href="/blog" className="text-accent hover:text-accent/80 inline-flex items-center gap-2">
            <HiOutlineArrowRight className="w-5 h-5" />
            بازگشت به صفحه مقالات
          </Link>
        </div>
      </div>
    );
  }

  const { Title, Content, PostDate, Author, CoverImage, Tags } = post;
  const date = new Date(PostDate).toLocaleDateString('fa-IR');

  return (
    <div className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50 " dir="rtl">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:34px_34px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-purple-500/20 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
            <HiOutlineArrowRight className="w-5 h-5" />
            بازگشت به صفحه مقالات
          </Link>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          {Tags && Tags.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {Tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600"
                >
                  {tag.Tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-black text-gray-900 mb-6">
            {Title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <HiOutlineUser className="w-5 h-5" />
              <span>{Author}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineClock className="w-5 h-5" />
              <time dateTime={PostDate}>{date}</time>
            </div>
          </div>

          {/* Cover Image */}
          {CoverImage && (
            <div className="relative w-full md:h-[500px] object-cover rounded-lg my-8">
              <ImageWithPlaceholder
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.url}`}
                alt={Title}
                fill
                className="w-full md:h-[500px] object-cover rounded-lg my-8"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <RichTextRenderer content={Content} />
          </div>
        </div>
      </div>
    </div>
  );
}
