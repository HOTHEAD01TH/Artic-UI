'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

const skeletonVariants = [
  {
    title: 'Basic Skeletons',
    description: 'Simple loading skeletons for text and images',
    preview: (
      <div className="space-y-4 w-full max-w-lg">
        {/* Text skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
        </div>

        {/* Image skeleton */}
        <div className="h-48 bg-gray-700 rounded-lg animate-pulse"></div>
      </div>
    ),
    code: `export function BasicSkeletons() {
  return (
    <div className="space-y-4 w-full max-w-lg">
      {/* Text skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
      </div>

      {/* Image skeleton */}
      <div className="h-48 bg-gray-700 rounded-lg animate-pulse"></div>
    </div>
  )
}`
  },
  {
    title: 'Card Skeleton',
    description: 'Loading skeleton for a card layout',
    preview: (
      <div className="w-full max-w-sm rounded-lg border border-gray-700 p-4 space-y-4">
        {/* Image skeleton */}
        <div className="h-48 bg-gray-700 rounded-lg animate-pulse"></div>
        
        {/* Title skeleton */}
        <div className="h-6 bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
        
        {/* Description skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-gray-700 rounded-lg w-1/2 animate-pulse"></div>
      </div>
    ),
    code: `export function CardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-700 p-4 space-y-4">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-700 rounded-lg animate-pulse"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-700 rounded-full w-3/4 animate-pulse"></div>
      
      {/* Description skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-full w-5/6 animate-pulse"></div>
      </div>
      
      {/* Button skeleton */}
      <div className="h-10 bg-gray-700 rounded-lg w-1/2 animate-pulse"></div>
    </div>
  )
}`
  },
  {
    title: 'Table Skeleton',
    description: 'Loading skeleton for table rows',
    preview: (
      <div className="w-full overflow-x-auto">
        <div className="min-w-full bg-gray-800/50 rounded-lg p-4">
          <div className="space-y-4">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex gap-4">
                <div className="h-4 bg-gray-700 rounded-full w-1/4 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded-full w-1/3 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded-full w-1/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    code: `export function TableSkeleton() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full bg-gray-800/50 rounded-lg p-4">
        <div className="space-y-4">
          {[1, 2, 3].map((row) => (
            <div key={row} className="flex gap-4">
              <div className="h-4 bg-gray-700 rounded-full w-1/4 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded-full w-1/3 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded-full w-1/4 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`
  }
];

export default function SkeletonsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Skeletons</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful loading skeleton components for showing content placeholders.
        </p>
      </div>

      <div className="space-y-12">
        {skeletonVariants.map((variant) => (
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