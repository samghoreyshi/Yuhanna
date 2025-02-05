import QuestionClient from './QuestionClient';

// Server-side data fetching for metadata
async function getQuestionMetadata(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/questions?filters[documentId][$eq]=${id}&populate=*`,
      { next: { revalidate: 60 } }
    );
    const { data } = await res.json();
    return data?.[0] || null;
  } catch (error) {
    console.error('Error fetching question metadata:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const question = await getQuestionMetadata(params.id);
  
  if (!question) {
    return {
      title: 'سوال یافت نشد | انجمن یوحنا',
      description: 'متاسفانه سوال مورد نظر یافت نشد.'
    };
  }

  const title = question.title;
  const description = Array.isArray(question.content) 
    ? question.content.map(block => block.children?.map(child => child.text).join(' ')).join(' ')
    : '';

  return {
    title: `${title} | انجمن یوحنا`,
    description: `${description.substring(0, 150)}${description.length > 150 ? '...' : ''}`,
    openGraph: {
      title: `${title} | انجمن یوحنا`,
      description: `${description.substring(0, 150)}${description.length > 150 ? '...' : ''}`,
      type: 'article',
      publishedTime: question.publishedAt,
      modifiedTime: question.updatedAt,
      section: 'Forum',
      locale: 'fa_IR',
      siteName: 'یوحنا',
    },
    twitter: {
      card: 'summary',
      title: `${title} | انجمن یوحنا`,
      description: `${description.substring(0, 150)}${description.length > 150 ? '...' : ''}`,
    },
    alternates: {
      canonical: `https://yuhanna.ir/forum/question/${params.id}`
    }
  };
}

export default function Page({ params }) {
  return <QuestionClient params={params} />;
}