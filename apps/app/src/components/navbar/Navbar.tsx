'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MoonIcon, SunIcon, GitHubIcon, TwitterIcon } from '@/components/icons';
import { SearchDialog } from '@/components/navbar/SearchDialog';

export function Navbar() {


  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              Artic-UI
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/components" className="text-gray-300 hover:text-white">
                Components
              </Link>
              <Link href="/templates" className="text-gray-300 hover:text-white">
                Templates
              </Link>
              <Link href="/components" className="text-gray-300 hover:text-white">
                Showcase
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <SearchDialog />
            
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/HOTHEAD01TH/Artic-UI"
                className="p-2 text-gray-400 hover:text-white"
                target="_blank"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/HOTHEAD01TH"
                className="p-2 text-gray-400 hover:text-white"
                target="_blank"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 