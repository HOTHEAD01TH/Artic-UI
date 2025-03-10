'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariants = [
  {
    title: 'Interactive Card',
    description: 'A card with hover animations and interactive elements',
    preview: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800/50 rounded-lg overflow-hidden"
      >
        <div className="relative h-48 w-full">
          <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            alt="Gradient"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Interactive Card</h3>
          <p className="text-gray-400 mb-4">
            This card features smooth hover animations and an image.
          </p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg text-white">
            Learn More
          </button>
        </div>
      </motion.div>
    ),
    code: `import { motion } from 'framer-motion'
import Image from 'next/image'
export function InteractiveCard({ 
  title, 
  description, 
  imageUrl 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 rounded-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="px-4 py-2 bg-blue-500 
          hover:bg-blue-600 transition-colors 
          rounded-lg text-white"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  )
}`
  },
  {
    title: 'Gradient Border Card',
    description: 'A card with animated gradient border effect',
    preview: (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000" />
        <div className="relative p-6 bg-gray-900 rounded-lg ring-1 ring-gray-800/50">
          <h3 className="text-lg font-semibold text-white mb-2">Card Title</h3>
          <p className="text-gray-400">This is a beautiful card with gradient border effect that animates on hover.</p>
        </div>
      </div>
    ),
    code: `export function GradientCard({ title, description }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r 
        from-pink-500 to-violet-500 rounded-lg blur 
        opacity-25 group-hover:opacity-100 
        transition duration-1000" 
      />
      <div className="relative p-6 bg-gray-900 rounded-lg 
        ring-1 ring-gray-800/50">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}`
  },
 
  {
    title: 'Glass Card',
    description: 'A modern glass-morphism card with blur effect',
    preview: (
      <div className="relative p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-lg -z-10" />
        <h3 className="text-lg font-semibold text-white mb-2">Glass Card</h3>
        <p className="text-gray-300">
          A beautiful card with glass effect using backdrop blur and subtle gradients.
        </p>
      </div>
    ),
    code: `export function GlassCard({ title, description }) {
  return (
    <div className="relative p-6 rounded-lg 
      bg-white/5 backdrop-blur-lg 
      border border-white/10 shadow-xl"
    >
      <div className="absolute inset-0 
        bg-gradient-to-b from-blue-500/20 
        to-purple-500/20 rounded-lg -z-10" 
      />
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}`
  },
  {
    title: 'Hover Effect Card',
    description: 'Card with smooth hover animations',
    preview: (
      <motion.div
        whileHover={{ y: -5 }}
        className="p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-colors duration-300 hover:border-blue-500/50 hover:bg-gray-800/80"
      >
        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
        <p className="text-gray-300">Get started quickly with our easy-to-follow installation guide.</p>
      </motion.div>
    ),
    code: `export function HoverCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 
        transition-colors duration-300 
        hover:border-blue-500/50 hover:bg-gray-800/80"
    >
      <div className="w-10 h-10 bg-blue-500/20 rounded-lg 
        flex items-center justify-center mb-4"
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}`
  },
  {
    title: 'Interactive Card',
    description: 'Card with click animation and hover effects',
    preview: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group cursor-pointer"
      >
        <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 
          shadow-lg transition-all duration-300 
          group-hover:shadow-blue-500/10 group-hover:border-blue-500/50"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Featured</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            Interactive Elements
          </h3>
          <p className="text-gray-300">
            Enhance user experience with smooth animations and interactive elements.
          </p>
        </div>
      </motion.div>
    ),
    code: `export function InteractiveCard({ icon, title, description, badge }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
    >
      <div className="p-6 rounded-lg bg-gradient-to-br 
        from-gray-800/50 to-gray-900/50 
        border border-gray-700/50 shadow-lg 
        transition-all duration-300 
        group-hover:shadow-blue-500/10 
        group-hover:border-blue-500/50"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-gradient-to-br 
            from-blue-500 to-purple-500 rounded-lg 
            flex items-center justify-center"
          >
            {icon}
          </div>
          <span className="text-sm text-gray-400 
            group-hover:text-blue-400 transition-colors"
          >
            {badge}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 
          group-hover:text-blue-400 transition-colors"
        >
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}`
  }
];

export default function CardsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Cards</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful card components with various styles, animations, and hover effects.
        </p>
      </div>

      <div className="space-y-12">
        {cardVariants.map((variant) => (
          <div key={variant.title}>
            <div className="max-w-2xl mb-4">
              <h2 className="text-2xl font-semibold">{variant.title}</h2>
              <p className="text-gray-400 mt-1">{variant.description}</p>
            </div>
            <ButtonPreview
              preview={variant.preview}
              code={variant.code}
              title="Preview"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 