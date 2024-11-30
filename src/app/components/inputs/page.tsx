'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

const inputVariants = [
  {
    title: 'Gradient Input',
    description: 'A beautiful input field with gradient border effect',
    preview: (
      <div className="relative">
        <input
          type="text"
          placeholder="Type something..."
          className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-sm -z-10" />
      </div>
    ),
    code: `export function GradientInput({ placeholder = "Type something..." }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg 
          border border-transparent focus:border-blue-500 
          focus:ring-2 focus:ring-blue-500/20 
          transition-all duration-200 outline-none"
      />
      <div className="absolute inset-0 rounded-lg 
        bg-gradient-to-r from-blue-500 to-purple-500 
        opacity-20 blur-sm -z-10" 
      />
    </div>
  )
}`
  },
  {
    title: 'Search Input',
    description: 'A search input with icon and hover effect',
    preview: (
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-gray-800/50 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    ),
    code: `export function SearchInput({ placeholder = "Search..." }) {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full bg-gray-800/50 text-white pl-10 pr-4 py-2 
          rounded-lg border border-gray-700/50 
          focus:border-blue-500 focus:ring-2 
          focus:ring-blue-500/20 transition-all 
          duration-200 outline-none"
      />
      <svg
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}`
  }
];

export default function InputsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Inputs</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful and accessible input components with various styles and animations.
        </p>
      </div>

      <div className="space-y-12">
        {inputVariants.map((variant) => (
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