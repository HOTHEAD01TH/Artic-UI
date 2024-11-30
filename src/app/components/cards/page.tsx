'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariants = [
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