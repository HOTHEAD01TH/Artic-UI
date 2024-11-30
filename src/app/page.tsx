'use client';

import { SparklesIcon, CodeBracketIcon, CubeIcon } from '@heroicons/react/24/outline';
import { MotionDiv, MotionButton } from '@/components/motion/MotionDiv';
import { CodePreview } from '@/components/code-preview/CodePreview';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Ice/Snow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent mix-blend-overlay" />
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-snowfall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 10}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse-slow">
            Artic-UI
          </h1>
          <p className="text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Beautiful, modern, and accessible React components for your Next.js applications
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/components/buttons">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-blue-600 rounded-lg font-medium text-lg"
              >
                Get Started
              </MotionButton>
            </Link>
            <Link href="/components/buttons">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gray-800 rounded-lg font-medium text-lg"
              >
                Documentation
              </MotionButton>
            </Link>
          </div>
        </MotionDiv>

        {/* Frost Effect Corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full" />
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <SparklesIcon className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beautiful Components</h3>
            <p className="text-gray-400">
              Carefully crafted components that look great out of the box
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <CodeBracketIcon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
            <p className="text-gray-400">
              Built with TypeScript and fully customizable with Tailwind CSS
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <CubeIcon className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-400">
              Built for React and Next.js with modern best practices
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="container mx-auto px-4 py-20">
        <CodePreview />
      </section>
    </div>
  );
}