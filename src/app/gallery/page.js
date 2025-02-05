'use client';

import { useState, useEffect } from 'react';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Helper function for Persian numbers
const toPersianDigits = (num) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/[0-9]/g, w => persianDigits[w]);
};

const ImageModal = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <HiX className="w-8 h-8" />
                </button>

                {/* Navigation buttons */}
                {hasPrev && (
                    <button
                        onClick={onPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                    >
                        <HiChevronLeft className="w-8 h-8" />
                    </button>
                )}
                {hasNext && (
                    <button
                        onClick={onNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                    >
                        <HiChevronRight className="w-8 h-8" />
                    </button>
                )}

                {/* Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <ImageWithPlaceholder
                        src={`https://admin.yuhanna.ir${image.formats.large?.url || image.url}`}
                        alt={image.alternativeText || image.name}
                        className="object-contain w-full h-full"
                    />
                </div>

                {/* Caption */}
                {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white backdrop-blur-sm rounded-b-lg">
                        <p className="text-right">{image.caption}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const GalleryPage = () => {
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch('https://admin.yuhanna.ir/api/galleries?populate=*');
                if (!response.ok) {
                    throw new Error('خطا در دریافت تصاویر');
                }
                const data = await response.json();
                setGalleryData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setSelectedIndex(index);
    };

    const handleNext = () => {
        if (selectedIndex < galleryData.data[0].Images.length - 1) {
            setSelectedImage(galleryData.data[0].Images[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedIndex > 0) {
            setSelectedImage(galleryData.data[0].Images[selectedIndex - 1]);
            setSelectedIndex(selectedIndex - 1);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center font-IranSans bg-slate-50" dir="rtl">
                <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                    <div className="mt-4 text-gray-600">در حال بارگذاری...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center font-IranSans bg-slate-50" dir="rtl">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

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

            <div className="container mx-auto px-4 py-16 relative z-10">
                <h1 className="text-4xl mt-10 md:text-5xl font-black text-blue-600 mb-8 text-right">
                    {galleryData?.data[0]?.Title || 'گالری تصاویر'}
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-2 lg:gap-2">
                    {galleryData?.data[0]?.Images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleImageClick(image, index)}
                        >
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-white">
                                <ImageWithPlaceholder
                                    src={`https://admin.yuhanna.ir${image.formats.large?.url || image.url}`}
                                    alt={image.alternativeText || image.name}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <ImageModal
                        image={selectedImage}
                        onClose={() => setSelectedImage(null)}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        hasNext={selectedIndex < (galleryData?.data[0]?.Images.length - 1)}
                        hasPrev={selectedIndex > 0}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
