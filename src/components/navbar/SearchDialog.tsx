'use client';

import { useState, useEffect } from 'react';
import { SearchIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';

type SearchResult = {
  title: string;
  description: string;
  category: 'components' | 'templates' | 'docs';
  href: string;
};

const searchResults: SearchResult[] = [
  { title: 'Buttons', description: 'Interactive button components with various styles', category: 'components', href: '/components/buttons' },
  { title: 'Forms', description: 'Form components and input elements', category: 'components', href: '/components/forms' },
  { title: 'Cards', description: 'Content containers with different variations', category: 'components', href: '/components/cards' },
  { title: 'Progress', description: 'Progress indicators and loading states', category: 'components', href: '/components/progress' },
  { title: 'Avatars', description: 'User avatar components and groups', category: 'components', href: '/components/avatars' },
  { title: 'Badges', description: 'Status indicators and labels', category: 'components', href: '/components/badges' },
  { title: 'Inputs', description: 'Various input components for forms', category: 'components', href: '/components/inputs' },
  { title: 'Modals', description: 'Popup modal components for dialogs', category: 'components', href: '/components/modals' },
  { title: 'Tooltips', description: 'Informative tooltips for UI elements', category: 'components', href: '/components/tooltips' },
  { title: 'Breadcrumbs', description: 'Navigation breadcrumbs for pages', category: 'components', href: '/components/breadcrumbs' },
  { title: 'Tabs', description: 'Tab components for content organization', category: 'components', href: '/components/tabs' },
  { title: 'Pagination', description: 'Pagination controls for data navigation', category: 'components', href: '/components/pagination' },
  { title: 'Alerts', description: 'Alert components for notifications', category: 'components', href: '/components/alerts' },
  { title: 'Skeletons', description: 'Loading skeletons for content placeholders', category: 'components', href: '/components/skeletons' },
  { title: 'Installation', description: 'How to install and setup Artic-UI', category: 'docs', href: '/docs/installation' },
  { title: 'Introduction', description: 'Introduction to Artic-UI', category: 'docs', href: '/docs/introduction' },
  { title: 'Dashboard Template', description: 'Admin dashboard layout with analytics', category: 'templates', href: '/templates/dashboard' },
  { title: 'Landing Page Template', description: 'Landing page layout for marketing', category: 'templates', href: '/templates/landing' },
  { title: 'E-commerce Template', description: 'E-commerce site layout with product listings', category: 'templates', href: '/templates/ecommerce' },
  { title: 'Blog Template', description: 'Blog layout with categories and posts', category: 'templates', href: '/templates/blog' },
  { title: 'Portfolio Template', description: 'Portfolio layout for showcasing work', category: 'templates', href: '/templates/portfolio' },
];

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredResults = searchResults.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg transition-colors"
      >
        <SearchIcon className="h-4 w-4" />
        <span>Search components...</span>
        <kbd className="hidden md:inline-flex h-5 items-center gap-1 rounded border border-gray-700 bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-[50%] top-[20%] z-50 w-full max-w-lg -translate-x-[50%] rounded-xl bg-gray-900 shadow-xl border border-gray-800"
            >
              <Command className="w-full" label="Command Menu">
                <div className="flex items-center border-b border-gray-800 px-3">
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                  <Command.Input
                    value={query}
                    onValueChange={setQuery}
                    placeholder="Search components..."
                    className="flex-1 bg-transparent py-4 px-2 text-gray-100 outline-none placeholder:text-gray-500"
                  />
                </div>
                <Command.List className="max-h-[300px] overflow-y-auto p-2">
                  {filteredResults.map((item) => (
                    <Command.Item
                      key={item.title}
                      value={item.title}
                      onSelect={() => handleSelect(item.href)}
                      className="flex flex-col gap-1 rounded-lg px-4 py-3 hover:bg-gray-800 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-100">{item.title}</span>
                        <span className="text-xs text-gray-500 capitalize">{item.category}</span>
                      </div>
                      <span className="text-sm text-gray-400">{item.description}</span>
                    </Command.Item>
                  ))}
                </Command.List>
              </Command>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 