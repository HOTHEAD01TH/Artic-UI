'use client';

import { SparklesIcon, CodeBracketIcon, CubeIcon, ShieldCheckIcon, PaintBrushIcon, BoltIcon } from '@heroicons/react/24/outline';

export default function IntroductionPage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Introduction</h1>
        <p className="text-gray-400 text-lg mb-8">
          Welcome to Artic-UI, a modern React component library designed for building beautiful and accessible user interfaces.
        </p>
      </div>

      <div className="space-y-12">
        {/* What is Artic-UI Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is Artic-UI?</h2>
          <p className="text-gray-300 mb-6">
            Artic-UI is a comprehensive collection of React components that combines the power of Tailwind CSS with the fluidity of Framer Motion. 
            Built with TypeScript and designed with modern web applications in mind, it provides developers with the tools they need to create 
            stunning user interfaces without sacrificing performance or accessibility.
          </p>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <SparklesIcon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beautiful by Default</h3>
              <p className="text-gray-300">
                Carefully crafted components with modern design principles and smooth animations.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <CodeBracketIcon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
              <p className="text-gray-300">
                Built with TypeScript for better type safety and development experience.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <PaintBrushIcon className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-300">
                Fully customizable with Tailwind CSS, adapt components to match your brand.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <ShieldCheckIcon className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accessible</h3>
              <p className="text-gray-300">
                Built with accessibility in mind, following WAI-ARIA guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">When to Use Artic-UI</h2>
          <div className="space-y-4 text-gray-300">
            <p>Artic-UI is perfect for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modern React applications</li>
              <li>Next.js projects requiring beautiful UI components</li>
              <li>Projects that need accessible components out of the box</li>
              <li>Applications requiring smooth animations and transitions</li>
              <li>Developers who want to maintain consistent design systems</li>
            </ul>
          </div>
        </section>

        {/* Getting Started */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-4">
            Ready to build beautiful interfaces with Artic-UI? Check out our installation guide to get started:
          </p>
          <a 
            href="/docs/installation" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg text-white font-medium"
          >
            <BoltIcon className="w-5 h-5" />
            Installation Guide
          </a>
        </section>
      </div>
    </div>
  );
} 