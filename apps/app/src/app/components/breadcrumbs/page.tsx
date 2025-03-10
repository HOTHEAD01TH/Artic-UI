'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const breadcrumbsVariants = [
  {
    title: 'Basic Breadcrumbs',
    description: 'Simple breadcrumbs with chevron separators',
    preview: (
      <nav className="flex">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Products
            </a>
          </li>
          <li>
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </li>
          <li>
            <span className="text-white">Categories</span>
          </li>
        </ol>
      </nav>
    ),
    code: `export function BasicBreadcrumbs() {
  return (
    <nav className="flex">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Home
          </a>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Products
          </a>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        </li>
        <li>
          <span className="text-white">Categories</span>
        </li>
      </ol>
    </nav>
  )
}`
  },
  {
    title: 'Breadcrumbs with Icons',
    description: 'Breadcrumbs with icons and background',
    preview: (
      <nav className="flex">
        <ol className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg">
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <HomeIcon className="w-4 h-4 mr-1" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </li>
          <li>
            <span className="text-white">Settings</span>
          </li>
        </ol>
      </nav>
    ),
    code: `export function IconBreadcrumbs() {
  return (
    <nav className="flex">
      <ol className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg">
        <li>
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <HomeIcon className="w-4 h-4 mr-1" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        </li>
        <li>
          <span className="text-white">Settings</span>
        </li>
      </ol>
    </nav>
  )
}`
  }
];

export default function BreadcrumbsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Breadcrumbs</h1>
        <p className="text-gray-400 text-lg mb-8">
          Navigation components that help users understand their current location within a website's hierarchy.
        </p>
      </div>

      <div className="space-y-12">
        {breadcrumbsVariants.map((variant) => (
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