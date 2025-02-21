"use client";

import { useState, useEffect } from 'react';

// Simulated async function to fetch ticker items
async function fetchItems() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, text: 'Breaking News: Market Hits All-Time High' },
    { id: 2, text: 'Weather Update: Sunny Skies Ahead' },
    { id: 3, text: 'Tech Spotlight: New Gadgets Unveiled' },
  ];
}

function Ticker() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchItems().then(data => setItems(data));
  }, []);

  if (!items) {
    return (
      <div className="text-center text-lg text-gray-500">
        Loading...
      </div>
    );
  }

  // Render the items only once; we’ll duplicate them in the DOM.
  const renderItems = () =>
    items.map(item => (
      <span
        key={item.id}  // Use stable keys!
        className="px-6 py-2 text-lg font-medium text-blue-800 whitespace-nowrap"
      >
        {item.text}
      </span>
    ));

  return (
    <div className="w-full overflow-hidden bg-gray-100">
      <div className="ticker-wrapper">
        {/* Render the items twice for seamless looping */}
        <div className="ticker-content">
          {renderItems()}
          {renderItems()}
        </div>
      </div>
      <style jsx>{`
        .ticker-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .ticker-content {
          display: flex;
          /* Adjust the animation duration as needed for your speed */
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Ticker;
