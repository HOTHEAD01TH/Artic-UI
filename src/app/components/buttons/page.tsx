'use client';

import GradientButton from '@/components/ui/gradient-button';
import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

const buttonVariants = [
  {
    title: 'Gradient Border Button',
    description: 'An animated button with rotating gradient border',
    preview: <GradientButton>Click me</GradientButton>,
    code: `import { motion } from 'framer-motion'

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
}`,
  },
];

export default function ButtonsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Buttons</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful animated buttons with gradient effects.
        </p>
      </div>

      <div className="space-y-8">
        {buttonVariants.map((variant) => (
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