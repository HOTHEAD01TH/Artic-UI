'use client';

import { MotionDiv } from '@/components/motion/MotionDiv';
import GradientButton from '@/components/ui/gradient-button';
import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import Link from 'next/link';

const components = [
  {
    title: 'Buttons',
    description: 'Beautiful gradient buttons with hover and animation effects',
    href: '/components/buttons',
    component: (
      <ButtonPreview
        preview={<GradientButton>Click me</GradientButton>}
        code={`import { motion } from 'framer-motion'

export default function GradientButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </motion.button>
  )
}`}
      />
    ),
  },
  // Add more components here as we build them
];

export default function ComponentsPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Components</h1>
      <p className="text-gray-400 text-lg mb-8">
        Explore our collection of beautiful and accessible React components.
      </p>
      
      <div className="grid grid-cols-1 gap-8">
        {components.map((component) => (
          <div key={component.title}>
            <div className="mb-4">
              <Link href={component.href}>
                <h2 className="text-2xl font-semibold hover:text-blue-400 transition-colors">{component.title}</h2>
              </Link>
              <p className="text-gray-400 mt-1">{component.description}</p>
            </div>
            {component.component}
          </div>
        ))}
      </div>
    </div>
  );
} 