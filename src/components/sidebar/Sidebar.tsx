'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const components = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Buttons', href: '/components/buttons' },
      { title: 'Cards', href: '/components/cards' },
      { title: 'Inputs', href: '/components/inputs' },
      { title: 'Modals', href: '/components/modals' },
      { title: 'Tooltips', href: '/components/tooltips' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Skeletons', href: '/components/skeletons' },
      { title: 'Forms', href: '/components/forms' },
      { title: 'Avatars', href: '/components/avatars' },
    ],
  },
  {
    title: 'Effects',
    items: [
      { title: 'Gradient', href: '/effects/gradient' },
      { title: 'Spotlight', href: '/effects/spotlight' },
      { title: 'Sparkles', href: '/effects/sparkles' },
      { title: 'Parallax', href: '/effects/parallax' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { title: 'Statistics Card', href: '/components/statistics' },
      { title: 'Timeline', href: '/components/timeline' },
      { title: 'Tables', href: '/components/tables' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { title: 'Breadcrumbs', href: '/components/breadcrumbs' },
      { title: 'Tabs', href: '/components/tabs' },
      { title: 'Pagination', href: '/components/pagination' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { title: 'Alerts', href: '/components/alerts' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Skeletons', href: '/components/skeletons' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-[3.75rem] left-0 bottom-0 w-64 bg-gray-900 border-r border-gray-800 overflow-y-auto 
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-gray-800/20
      [&::-webkit-scrollbar-thumb]:bg-gray-800
      [&::-webkit-scrollbar-thumb]:hover:bg-gray-700
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:rounded-full">
      <div className="p-4">
        {components.map((section) => (
          <div key={section.title} className={cn("mb-6", section.title === "Getting Started" && "mt-7")}>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {section.title}
            </h2>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-1.5 rounded-md text-sm transition-colors',
                    pathname === item.href
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 