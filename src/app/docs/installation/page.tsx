'use client';

import { useState, useCallback } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Toast } from '@/components/ui/Toast';

export default function InstallationPage() {
  const [showToast, setShowToast] = useState(false);
  const [copiedText, setCopiedText] = useState('');

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
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Node.js 16.8 or later</li>
              <li>React 18 or later</li>
              <li>Next.js 13 or later (for Next.js projects)</li>
              <li>Tailwind CSS 3.0 or later</li>
            </ul>
          </div>
        </section>

        {/* Installation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="text-gray-300 mb-4">
            Install Artic-UI and its peer dependencies using your preferred package manager:
          </p>
          
          <div className="space-y-4">
            <CodeBlock 
              label="npm"
              code="npm install artic-ui @tailwindcss/typography framer-motion"
            />

            <CodeBlock 
              label="yarn"
              code="yarn add artic-ui @tailwindcss/typography framer-motion"
            />

            <CodeBlock 
              label="pnpm"
              code="pnpm add artic-ui @tailwindcss/typography framer-motion"
            />
          </div>
        </section>

        {/* Configuration Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <p className="text-gray-300 mb-4">
            Update your tailwind.config.js to include Artic-UI's components:
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
        </section>

        {/* Usage Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-gray-300 mb-4">
            Import and use Artic-UI components in your React application:
          </p>

          <CodeBlock 
            code={`import { Button } from 'artic-ui'

export default function App() {
  return (
    <Button variant="gradient">
      Click me
    </Button>
  )
}`}
          />
        </section>
      </div>

      <Toast message={copiedText} isVisible={showToast} />
    </div>
  );
} 