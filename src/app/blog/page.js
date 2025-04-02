'use client';

import { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import { Search, Clock, Tag, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- Data Fetching (Keep as is) ---
async function getArticles() {
    // ... (fetch logic remains the same)
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}/api/articles?populate=*`;
        // Consider Strapi sorting: &sort=publishedAt:desc
        const res = await fetch(apiUrl, { cache: 'no-store' });
        if (!res.ok) throw new Error(`API request failed with status ${res.status}`);
        const response = await res.json();
        console.log('API Response:', response);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

// --- Skeleton (Keep as is) ---
function BlogCardSkeleton() {
    // ... (skeleton code remains the same)
    return (
        <div className="bg-white rounded-xl p-4 animate-pulse overflow-hidden border border-gray-100 shadow-sm">
            <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
        </div>
    );
}

export default function BlogPage() {
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [randomFeaturedPost, setRandomFeaturedPost] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('همه');
    const [isLoading, setIsLoading] = useState(true);
    const [allTags, setAllTags] = useState(['همه']);

    // --- Fetch Posts Effect (Keep as is) ---
    useEffect(() => {
        const fetchAndProcessPosts = async () => {
            setIsLoading(true);
            try {
                const data = await getArticles();
                console.log('Fetched Posts:', data);

                if (Array.isArray(data) && data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const featured = data[randomIndex];
                    setRandomFeaturedPost(featured);

                    const sortedData = [...data].sort((a, b) => {
                        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
                        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
                        return dateB - dateA;
                    });
                    setAllPosts(sortedData);
                    setFilteredPosts(sortedData.filter(p => p.id !== featured.id));

                    // Calculate Tags (assuming Tags field exists)
                    const uniqueTags = [...new Set(
                        (sortedData || [])
                        .flatMap(post => post.Tags?.map(tag => tag.Tag).filter(Boolean) || [])
                    )];
                    setAllTags(['همه', ...uniqueTags]);

                } else if (Array.isArray(data)) {
                    setAllPosts([]);
                    setFilteredPosts([]);
                    setRandomFeaturedPost(null);
                    setAllTags(['همه']);
                } else {
                    // Handle non-array data case
                    console.error("Fetched data is not an array:", data);
                    setAllPosts([]);
                    setFilteredPosts([]);
                    setRandomFeaturedPost(null);
                    setAllTags(['همه']);
                }
            } catch (error) {
                console.error('Error in fetchAndProcessPosts effect:', error);
                setAllPosts([]);
                setFilteredPosts([]);
                setRandomFeaturedPost(null);
                setAllTags(['همه']);
            } finally {
                setIsLoading(false);
            }
        };
        fetchAndProcessPosts();
    }, []);

    // --- Filter Posts Effect (Keep as is) ---
    useEffect(() => {
        const currentPosts = Array.isArray(allPosts) ? allPosts.filter(p => p.id !== randomFeaturedPost?.id) : [];
        let result = [...currentPosts];

        const query = searchQuery.toLowerCase().trim();
        if (query) {
            result = result.filter(post =>
                post.Title?.toLowerCase().includes(query) ||
                (post.Content && Array.isArray(post.Content) && post.Content.some(block =>
                    block.type === 'paragraph' &&
                    block.children && Array.isArray(block.children) &&
                    block.children.some(child =>
                        child.text?.toLowerCase().includes(query)
                    )
                ))
            );
        }

        if (selectedTag && selectedTag !== 'همه') {
            result = result.filter(post =>
                post.Tags?.some(tag => tag.Tag === selectedTag)
            );
        }

        setFilteredPosts(result);

    }, [searchQuery, selectedTag, allPosts, randomFeaturedPost]);

    // --- JSX ---
    return (
        <div className="min-h-screen font-IranSans bg-gray-50 text-gray-900" dir="rtl">
            <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">

                {/* --- Enhanced Header (Title & Search Only) --- */}
                <header className="mb-10 md:mb-12 max-w-6xl mx-auto border-b border-gray-200 pb-8"> {/* Added bottom border/padding */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center md:text-right">
                            <span className='text-secondary'>مقالات</span> و اخبار
                        </h1>
                        {/* Improved Search Bar */}
                        <div className="w-full md:w-auto md:min-w-[300px] lg:min-w-[350px]">
                            <div className="relative group">
                                <input
                                    type="search"
                                    placeholder="جستجوی عنوان یا محتوا..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pr-12 pl-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-gray-800 placeholder-gray-400 transition duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors duration-300">
                                    <Search className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Filter tabs removed from here */}
                </header>

                {/* --- Random Featured Post --- */}
                {!isLoading && randomFeaturedPost && (
                    <div className="mb-12 md:mb-16 max-w-6xl mx-auto">
                         {/* ... (Featured post JSX remains the same) ... */}
                        <Link href={`/blog/${randomFeaturedPost.Slug || randomFeaturedPost.id}`} className="group block">
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-accent/30">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image Side */}
                                    {randomFeaturedPost.CoverImage?.url && (
                                        <div className="relative h-64 md:h-96 overflow-hidden">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${randomFeaturedPost.CoverImage.url}`}
                                                alt={randomFeaturedPost.Title || 'Featured post image'}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-l md:from-black/10 md:via-transparent md:to-transparent"></div>
                                        </div>
                                    )}
                                    {/* Content Side */}
                                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {randomFeaturedPost.Tags?.slice(0, 3).map((tag) => (
                                                <span key={tag.id} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                                                    {tag.Tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors duration-300">
                                            {randomFeaturedPost.Title}
                                        </h2>
                                        <p className="text-gray-600 line-clamp-3 md:line-clamp-4 mb-6 text-base">
                                            {randomFeaturedPost.Content?.find(block => block.type === 'paragraph')?.children[0]?.text || 'چکیده‌ای در دسترس نیست...'}
                                        </p>
                                        <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                                            <span className="flex items-center">
                                                <Clock className="w-4 h-4 ml-1.5" />
                                                {randomFeaturedPost.publishedAt ? new Date(randomFeaturedPost.publishedAt).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }) : 'تاریخ نامشخص'}
                                            </span>
                                            <span className="text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center group-hover:translate-x-[-4px]">
                                                ادامه مطلب
                                                <ArrowRight className="w-4 h-4 mr-1.5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* --- Filter Tabs Section (Moved Here) --- */}
                {/* Show tabs only if there are tags beyond 'همه' and not loading */}
                {!isLoading && allTags.length > 1 && (
                    <section className="max-w-6xl mx-auto mb-10 md:mb-12"> {/* Added margin bottom */}
                         {/* Optional Label for context */}
                         <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3"> {/* Align start on larger screens */}
                             {allTags.map((tag) => (
                                 <button
                                     key={tag}
                                     onClick={() => setSelectedTag(tag)}
                                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-out ${selectedTag === tag
                                         ? 'bg-accent text-white shadow-md scale-105'
                                         : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                                         }`}
                                 >
                                     {tag}
                                 </button>
                             ))}
                         </div>
                    </section>
                )}

                {/* --- All Posts Section --- */}
                <section className="max-w-6xl mx-auto">
                    {/* Blog Grid or Loading Skeletons */}
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[...Array(6)].map((_, i) => (
                                <BlogCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : (
                        // Check if there are posts to display AFTER filtering
                        filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {filteredPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>
                        ) : (
                            // No Results Message
                            <div className="text-center py-16 bg-white border border-gray-100 rounded-lg shadow-sm col-span-full">
                                <Tag className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                                <p className="text-lg font-medium text-gray-700 mb-2">
                                    {searchQuery || selectedTag !== 'همه' ? 'هیچ مقاله‌ای با این فیلترها یافت نشد.' : 'مقاله دیگری یافت نشد.'}
                                </p>
                                <p className="text-gray-500 mb-5">فیلترها را تغییر دهید یا بعداً دوباره بررسی کنید.</p>
                                {(searchQuery || selectedTag !== 'همه') && (
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedTag('همه');
                                        }}
                                        className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                                    >
                                        پاک کردن فیلترها
                                    </button>
                                )}
                            </div>
                        )
                    )}
                </section>
            </div>
        </div>
    );
}