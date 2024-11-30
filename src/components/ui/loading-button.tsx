'use client';

import { useState } from 'react';

export function LoadingButtonPreview() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="relative inline-flex items-center justify-center px-6 py-2 bg-blue-500 
        text-white rounded-lg overflow-hidden transition-all duration-300
        hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </>
      ) : (
        'Click me'
      )}
    </button>
  );
} 