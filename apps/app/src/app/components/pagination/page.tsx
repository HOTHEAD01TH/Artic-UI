'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const paginationVariants = [
  {
    title: 'Basic Pagination',
    description: 'Simple pagination with page numbers',
    preview: (() => {
      function BasicPagination() {
        const pages = [1, 2, 3, 4, 5];
        const currentPage = 2;
        
        return (
          <div className="flex items-center justify-center space-x-1">
            <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            {pages.map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg transition-colors
                  ${currentPage === page 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        );
      }
      return <BasicPagination />;
    })(),
    code: `export function BasicPagination() {
  const pages = [1, 2, 3, 4, 5];
  const currentPage = 2;
  
  return (
    <div className="flex items-center justify-center space-x-1">
      <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={\`px-4 py-2 rounded-lg transition-colors
            \${currentPage === page 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }\`}
        >
          {page}
        </button>
      ))}
      <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}`
  },
  {
    title: 'Compact Pagination',
    description: 'Pagination with ellipsis for large page counts',
    preview: (() => {
      function CompactPagination() {
        const currentPage = 5;
        const totalPages = 20;
        
        return (
          <div className="flex items-center justify-center space-x-1">
            <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
              1
            </button>
            <span className="px-2 text-gray-600">...</span>
            {[currentPage - 1, currentPage, currentPage + 1].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg transition-colors
                  ${currentPage === page 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2 text-gray-600">...</span>
            <button className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
              {totalPages}
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        );
      }
      return <CompactPagination />;
    })(),
    code: `export function CompactPagination() {
  const currentPage = 5;
  const totalPages = 20;
  
  return (
    <div className="flex items-center justify-center space-x-1">
      <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
        1
      </button>
      <span className="px-2 text-gray-600">...</span>
      {[currentPage - 1, currentPage, currentPage + 1].map((page) => (
        <button
          key={page}
          className={\`px-4 py-2 rounded-lg transition-colors
            \${currentPage === page 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }\`}
        >
          {page}
        </button>
      ))}
      <span className="px-2 text-gray-600">...</span>
      <button className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
        {totalPages}
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors">
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}`
  }
];

export default function PaginationPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Pagination</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful pagination components for navigating through multiple pages of content.
        </p>
      </div>

      <div className="space-y-12">
        {paginationVariants.map((variant) => (
          <div key={variant.title}>
            <div className="max-w-2xl mb-4">
              <h2 className="text-2xl font-semibold">{variant.title}</h2>
              <p className="text-gray-400 mt-1">{variant.description}</p>
            </div>
            <ButtonPreview
              preview={variant.preview}
              code={variant.code}
              title="Preview"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 