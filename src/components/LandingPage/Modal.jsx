"use client";

import React, { useState, useEffect } from 'react';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';

export default function Modal({ onClose }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API
    useEffect(() => {
        async function fetchModalData() {
            try {
                const response = await fetch(
                    'https://admin.yuhanna.ir/api/modal-advertises?populate=*'
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                // Only set modalData if there is at least one item
                if (result.data && result.data.length > 0) {
                    setModalData(result.data[0]);
                }
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchModalData();
    }, []);

    // Open modal after a delay, but only if data exists
    useEffect(() => {
        if (modalData) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [modalData]);

    // Render nothing if still loading, if there is an error, or if no data was returned
    if (loading) return null;
    if (error || !modalData) return null;
    if (!isModalOpen) return null;

    // Build the full image URL using the API's base URL
    const baseUrl = "https://admin.yuhanna.ir";
    const imageUrl = modalData.Image.url.startsWith("/")
        ? `${baseUrl}${modalData.Image.url}`
        : modalData.Image.url;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white mx-8 p-4 rounded-lg relative">
                <div className="w-fit h-[500px] sm:[800px] overflow-hidden mt-5 rounded-md sm:rounded-lg bg-accent/20 relative z-10">
                    <ImageWithPlaceholder
                        src={imageUrl}
                        className="w-full h-auto object-contain sm:object-cover object-center"
                        alt={modalData.TitleSEO}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                    />
                </div>
                <button
                    onClick={() => {
                        setIsModalOpen(false);
                        if (onClose) onClose();
                    }}
                    className="absolute top-2 right-2 text-accent hover:text-red-500 text-4xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
