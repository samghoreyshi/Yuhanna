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

  const title = question.Title;
  const description = question.Content || '';
  const tags = question.Tags?.map(tag => tag.Tag).join('، ') || '';

  return {
    title: `${title} | انجمن یوحنا`,
    description: `${description.substring(0, 150)}${description.length > 150 ? '...' : ''} | برچسب‌ها: ${tags}`,
    openGraph: {
      title: `${title} | انجمن یوحنا`,
      description: `${description.substring(0, 150)}${description.length > 150 ? '...' : ''} | برچسب‌ها: ${tags}`,
      type: 'article',
      publishedTime: question.publishedAt,
      modifiedTime: question.updatedAt,
      section: 'Forum',
      tags: question.Tags?.map(tag => tag.Tag) || [],
      locale: 'fa_IR',
      siteName: 'یوحنا',
    },
    twitter: {
      card: 'summary',
      title: `${title} | انجمن یوحنا`,
      description: `${description.substring(0, 150)}${description.length > 150 ? '...' : ''} | برچسب‌ها: ${tags}`,
    },
    alternates: {
      canonical: `https://yuhanna.ir/forum/question/${params.id}`
    },
    keywords: question.Tags?.map(tag => tag.Tag).join(', ') || ''
  };
}
