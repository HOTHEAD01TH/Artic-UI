'use client';

import { SparklesIcon, CodeBracketIcon, CubeIcon } from '@heroicons/react/24/outline';
import { MotionDiv, MotionButton } from '@/components/motion/MotionDiv';
import { CodePreview } from '@/components/code-preview/CodePreview';
//hey add the ice/snow effect and chilling effect to chill ui heading in navbar 
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Artic-UI
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Beautiful, modern, and accessible React components for your Next.js applications
          </p>
          <div className="flex gap-4 justify-center">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 rounded-lg font-medium"
            >
              Get Started
            </MotionButton>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gray-800 rounded-lg font-medium"
            >
              Documentation
            </MotionButton>
          </div>
        </MotionDiv>
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