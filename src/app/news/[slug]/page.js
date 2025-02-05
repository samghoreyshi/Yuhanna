import RichTextRenderer from '@/components/RichTextRenderer';
import Link from 'next/link';
import { HiOutlineArrowRight, HiOutlineClock } from 'react-icons/hi';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';

async function getNewsItem(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newspages?filters[Slug][$eq]=${slug}&populate=*`,
    { cache: 'no-store' }
  );
  const { data } = await res.json();
  if (!data || data.length === 0) {
    return null;
  }
  return data[0];
}

export async function generateMetadata({ params }) {
  const newsItem = await getNewsItem(params.slug);
  
  if (!newsItem) {
    return {
      title: 'خبر یافت نشد | یوحنا',
      description: 'متاسفانه خبر مورد نظر یافت نشد.'
    };
  }

  const title = newsItem.Title;
  const description = newsItem.Content?.[0]?.children?.[0]?.text || '';
  const imageUrl = newsItem.CoverImage?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${newsItem.CoverImage.url}`
    : null;

  return {
    title: `${title} | اخبار یوحنا`,
    description: description.substring(0, 160),
    openGraph: {
      title: `${title} | اخبار یوحنا`,
      description: description.substring(0, 160),
      type: 'article',
      publishedTime: newsItem.publishedAt,
      modifiedTime: newsItem.updatedAt,
      section: 'News',
      images: imageUrl ? [imageUrl] : [],
      locale: 'fa_IR',
      siteName: 'یوحنا',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | اخبار یوحنا`,
      description: description.substring(0, 160),
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://yuhanna.ir/news/${params.slug}`
    }
  };
}

export default async function NewsPost({ params }) {
  const post = await getNewsItem(params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            خبر مورد نظر یافت نشد
          </h1>
          <Link href="/news" className="text-accent hover:text-accent/80 inline-flex items-center gap-2">
            <HiOutlineArrowRight className="w-5 h-5" />
            بازگشت به صفحه اخبار
          </Link>
        </div>
      </div>
    );
  }

  const { Title, Content, PostDate, CoverImage } = post;

  return (
    <div className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50" dir="rtl">
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

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Cover Image */}
          <div className="relative w-full h-[60vh] max-h-[600px]">
            <ImageWithPlaceholder
              src={CoverImage?.formats?.large?.url ? 
                `${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.formats.large.url}` :
                `${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage?.url || '/placeholder-image.jpg'}`
              }
              alt={Title}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 w-full p-8">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {Title}
              </h1>
              {PostDate && (
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-5 h-5" />
                    <time dateTime={PostDate}>{new Date(PostDate).toLocaleDateString('fa-IR')}</time>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <RichTextRenderer content={Content} />
            </div>
          </div>
        </article>

        {/* Back to News Link */}
        <div className="text-center mt-12">
          <Link href="/news" className="text-accent hover:text-accent/80 inline-flex items-center gap-2">
            <HiOutlineArrowRight className="w-5 h-5" />
            بازگشت به صفحه اخبار
          </Link>
        </div>
      </div>
    </div>
  );
}
