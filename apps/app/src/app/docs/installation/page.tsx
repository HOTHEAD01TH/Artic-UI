'use client';

import { useState, useCallback } from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { Toast } from '@/components/ui/Toast';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function InstallationPage() {
  const [showToast, setShowToast] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [activeTab, setActiveTab] = useState<'nextjs' | 'vite'>('nextjs');
  const [packageManager, setPackageManager] = useState<'npm' | 'yarn' | 'pnpm'>('npm');

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText('Code copied to clipboard!');
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopiedText('Failed to copy code');
      setShowToast(true);
    }
  }, []);

  const handleTabChange = (tab: 'nextjs' | 'vite') => {
    console.log('Changing tab to:', tab);
    setActiveTab(tab);
  };

  const handlePackageManagerChange = (pm: 'npm' | 'yarn' | 'pnpm') => {
    console.log('Changing package manager to:', pm);
    setPackageManager(pm);
  };

  const CodeBlock = ({ code, label }: { code: string; label?: string }) => (
    <div className="bg-gray-800/50 rounded-lg p-4 relative group">
      {label && <p className="text-sm text-gray-400 mb-2">{label}</p>}
      <code className="text-gray-300 block whitespace-pre">{code}</code>
      <button
        onClick={() => handleCopy(code)}
        className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-700/50 rounded-md 
          opacity-0 group-hover:opacity-100 hover:bg-gray-600/50 transition-all duration-200"
      >
        <ClipboardIcon className="h-4 w-4" />
        <span>Copy</span>
      </button>
    </div>
  );

  const getInstallCommand = (packages: string) => {
    switch (packageManager) {
      case 'npm':
        return `npm install ${packages}`;
      case 'yarn':
        return `yarn add ${packages}`;
      case 'pnpm':
        return `pnpm add ${packages}`;
    }
  };

  return (
    
    <div className="w-full max-w-[1000px] mx-auto px-4">
      <div className="max-w-2xl">
        
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-gray-400 text-lg mb-8">
          Get started with Artic-UI in your React project. Follow these steps to set up your development environment.
        </p>
      </div>

      <div className="space-y-12">
        {/* Prerequisites Section */}
        <section>
        <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3">
        <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <h3 className="text-yellow-500 font-medium mb-1">Beta Release</h3>
          <p className="text-yellow-500/80">
            This library is currently in beta. Only a subset of components is available on npm. However, you can still use other components by copying their code directly from our documentation. We're actively working on publishing all components.
          </p>
        </div>
      </div>
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Node.js 16.8 or later</li>
              <li>React 18 or later (including React 19)</li>
              <li>Next.js 13 or later (for Next.js projects)</li>
              <li>Tailwind CSS 3.0 or later (including Tailwind v4)</li>
            </ul>
          </div>
        </section>

        {/* Package Manager Selection */}

          <h2 className="text-2xl font-semibold mb-4">Package Manager</h2>
<div className="flex space-x-2 mb-4">
  <button
    type="button"
    onClick={() => handlePackageManagerChange('npm')}
    className={`px-4 py-2 rounded-md transition-colors cursor-pointer z-10 ${
      packageManager === 'npm' 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
    }`}
  >
    npm
  </button>
  <button
    type="button"
    onClick={() => handlePackageManagerChange('yarn')}
    className={`px-4 py-2 rounded-md transition-colors cursor-pointer z-10 ${
      packageManager === 'yarn' 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
    }`}
  >
    yarn
  </button>
  <button
    type="button"
    onClick={() => handlePackageManagerChange('pnpm')}
    className={`px-4 py-2 rounded-md transition-colors cursor-pointer z-10 ${
      packageManager === 'pnpm' 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
    }`}
  >
    pnpm
  </button>
</div>
       

        {/* Installation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="text-gray-300 mb-4">
            Install Artic-UI and its peer dependencies:
          </p>
          
          <div className="space-y-4">
            <CodeBlock 
              code={getInstallCommand("artic-ui framer-motion @tailwindcss/typography")}
            />
          </div>
        </section>

        {/* Framework Setup Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Framework Setup</h2>
          
          {/* Tabs */}


{/* Tabs */}
<div className="flex space-x-2 mb-6">
  <button
    type="button"
    onClick={() => handleTabChange('nextjs')}
    className={`px-4 py-2 rounded-md transition-colors cursor-pointer z-10 ${
      activeTab === 'nextjs' 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
    }`}
  >
    Next.js
  </button>
  <button
    type="button"
    onClick={() => handleTabChange('vite')}
    className={`px-4 py-2 rounded-md transition-colors cursor-pointer z-10 ${
      activeTab === 'vite' 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
    }`}
  >
    Vite
  </button>
</div>

          {/* Next.js Setup */}
          {activeTab === 'nextjs' && (
            <div className="space-y-6">
              <p className="text-gray-300">Follow these steps to set up Artic-UI with Next.js and Tailwind CSS v4:</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">1. Install Tailwind CSS</h3>
                  <p className="text-gray-300 mb-3">
                    Install Tailwind CSS and its PostCSS plugin:
                  </p>
                  <CodeBlock 
                    code={getInstallCommand("tailwindcss @tailwindcss/postcss postcss")}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">2. Configure PostCSS</h3>
                  <p className="text-gray-300 mb-3">
                    Create a postcss.config.mjs file in the root of your project:
                  </p>
                  <CodeBlock 
                    code={`const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">3. Import Tailwind CSS</h3>
                  <p className="text-gray-300 mb-3">
                    Add an import to your globals.css file:
                  </p>
                  <CodeBlock 
                    code={`/* Import Tailwind CSS */
@import "tailwindcss";

/* Your custom styles below */`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">4. Configure Tailwind</h3>
                  <p className="text-gray-300 mb-3">
                    Create or update your tailwind.config.js file to include Artic-UI components:
                  </p>
                  <CodeBlock 
                    code={`// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/artic-ui/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Vite Setup */}
          {activeTab === 'vite' && (
            <div className="space-y-6">
              <p className="text-gray-300">Follow these steps to set up Artic-UI with Vite and Tailwind CSS v4:</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">1. Install Tailwind CSS</h3>
                  <p className="text-gray-300 mb-3">
                    Install Tailwind CSS and its Vite plugin:
                  </p>
                  <CodeBlock 
                    code={getInstallCommand("tailwindcss @tailwindcss/vite")}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">2. Configure Vite</h3>
                  <p className="text-gray-300 mb-3">
                    Add the Tailwind CSS plugin to your vite.config.ts or vite.config.js file:
                  </p>
                  <CodeBlock 
                    code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">3. Import Tailwind CSS</h3>
                  <p className="text-gray-300 mb-3">
                    Add an import to your main CSS file:
                  </p>
                  <CodeBlock 
                    code={`/* Import Tailwind CSS */
@import "tailwindcss";

/* Your custom styles below */`}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">4. Configure Tailwind</h3>
                  <p className="text-gray-300 mb-3">
                    Create or update your tailwind.config.js file to include Artic-UI components:
                  </p>
                  <CodeBlock 
                    code={`// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/artic-ui/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}`}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Usage Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-gray-300 mb-4">
            Import and use Artic-UI components in your React application:
          </p>

          <CodeBlock 
            code={`import { Button, Alert } from 'artic-ui'

export default function App() {
  return (
    <div className="space-y-4">
      <Alert 
        variant="success" 
        message="Operation completed successfully!" 
      />
      
      <Button variant="gradient">
        Click me
      </Button>
    </div>
  )
}`}
          />
        </section>
      </div>

     

      <Toast message={copiedText} isVisible={showToast} />
    </div>
  );
}