'use client';

import { useState, useEffect } from 'react';
import { SearchIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'cmdk';

type SearchResult = {
  title: string;
  description: string;
  category: 'components' | 'templates' | 'docs';
  href: string;
};

const searchResults: SearchResult[] = [
  {
    title: 'Button',
    description: 'Clickable button component with various styles',
    category: 'components',
    href: '/components/button'
  },
  {
    title: 'Card',
    description: 'Container for content and actions',
    category: 'components',
    href: '/components/card'
  },
  // Add more components here
];

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

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
                  {searchResults
                    .filter(item => 
                      item.title.toLowerCase().includes(query.toLowerCase()) ||
                      item.description.toLowerCase().includes(query.toLowerCase())
                    )
                    .map((item) => (
                      <Command.Item
                        key={item.title}
                        value={item.title}
                        onSelect={() => {
                          window.location.href = item.href;
                          setIsOpen(false);
                        }}
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