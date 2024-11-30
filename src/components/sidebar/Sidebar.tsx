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
    title: 'All Components',
    items: [
      { title: 'Buttons', href: '/components/buttons' },
      { title: 'Inputs', href: '/components/inputs' },
      { title: 'Cards', href: '/components/cards' },
      { title: 'Modals', href: '/components/modals' },
      { title: 'Tooltips', href: '/components/tooltips' },
    ],
  },
  {
    title: 'Effects & Animations',
    items: [
      { title: 'Gradient', href: '/components/effects/gradient' },
      { title: 'Spotlight', href: '/components/effects/spotlight' },
      { title: 'Sparkles', href: '/components/effects/sparkles' },
      { title: 'Parallax', href: '/components/effects/parallax' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-900/50 border-r border-gray-800 p-6 fixed overflow-y-auto 
      scrollbar-thin scrollbar-track-gray-900/20 scrollbar-thumb-gray-800/50
      hover:scrollbar-thumb-gray-700/50 transition-colors">
      <div className="space-y-8">
        {components.map((section) => (
          <div key={section.title}>
            <h2 className="font-semibold text-gray-400 text-sm mb-2">
              {section.title}
            </h2>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-sm transition-colors',
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