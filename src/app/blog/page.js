'use client';

import { Suspense, useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import { Search } from 'lucide-react';

async function getArticles() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`, {
      cache: 'no-store'
    });
    const response = await res.json();
    console.log('API Response:', response); // For debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg p-3 shadow-sm animate-pulse">
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('همه');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getArticles();
        console.log('Fetched Posts:', data); // For debugging
        setPosts(data);
        setFilteredPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error in fetchPosts:', error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Get unique tags from all posts
  const allTags = ['همه', ...new Set(posts.flatMap(post => 
    post.Tags?.map(tag => tag.Tag) || []
  ))];

  // Filter posts based on search query and selected tag
  useEffect(() => {
    let result = [...posts];
    
    if (searchQuery) {
      result = result.filter(post => 
        post.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.Content.some(block => 
          block.type === 'paragraph' && 
          block.children.some(child => 
            child.text.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      );
    }
    
    if (selectedTag && selectedTag !== 'همه') {
      result = result.filter(post => 
        post.Tags?.some(tag => tag.Tag === selectedTag)
      );
    }
    
    setFilteredPosts(result);
  }, [searchQuery, selectedTag, posts]);

  return (
    <div className="min-h-screen  relative overflow-hidden font-IranSans bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:34px_34px]"></div>
      </div>

      {/* Content */}
      <div className="container mt-20 mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="relative max-w-5xl mx-auto text-center mb-16">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
          
          {/* Animated shapes */}
          <div className="absolute -top-8 right-1/4 w-6 h-6 rounded bg-blue-500/20 animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-purple-500/20 animate-float-delayed"></div>
          <div className="absolute -bottom-4 right-1/3 w-5 h-5 rounded-full bg-blue-400/20 animate-float"></div>
          
          {/* Main content */}
          <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50 rounded-2xl"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-black text-blue-600 mb-6 animate-gradient">
                مقالات یوحنا
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                آخرین مقالات و اخبار در مورد کنکور و تحصیل
              </p>
              
              {/* Search Bar with enhanced design */}
              <div className="flex items-center justify-center gap-3 max-w-2xl mx-auto">
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-blue-200/20 rounded-xl blur transition group-hover:bg-blue-300/30"></div>
                  <input 
                    type="search"
                    placeholder="جستجو در مقالات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl bg-white/70 backdrop-blur border border-blue-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition relative z-10 placeholder:text-gray-500"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5 z-10" />
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-400/40"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600/40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm border transition-all ${
                selectedTag === tag 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-200 hover:bg-blue-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <BlogSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* No Results Message */}
        {!isLoading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">هیچ مقاله‌ای یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
}
