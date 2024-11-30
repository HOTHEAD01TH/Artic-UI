'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { BasicTooltip, ArrowTooltip, AnimatedTooltip } from '@/components/ui/tooltips';

const tooltipVariants = [
  {
    id: 'basic-tooltip',
    title: 'Basic Tooltip',
    description: 'Simple tooltip with fade animation',
    preview: <BasicTooltip />,
    code: `export function BasicTooltip() {
  return (
    <div className="relative inline-block group">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Hover me
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 
        bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible transition-all duration-200">
        This is a tooltip
      </div>
    </div>
  )
}`
  },
  {
    id: 'arrow-tooltip',
    title: 'Arrow Tooltip',
    description: 'Tooltip with an arrow pointer',
    preview: <ArrowTooltip />,
    code: `export function ArrowTooltip() {
  return (
    <div className="relative inline-block group">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Hover me
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-200"
      >
        <div className="relative px-3 py-1 bg-gray-900 text-white text-sm rounded-lg">
          Tooltip with arrow
          <div className="absolute left-1/2 -translate-x-1/2 top-full 
            border-4 border-transparent border-t-gray-900" 
          />
        </div>
      </div>
    </div>
  )
}`
  },
  {
    id: 'animated-tooltip',
    title: 'Animated Tooltip',
    description: 'Tooltip with scale and fade animation',
    preview: <AnimatedTooltip />,
    code: `export function AnimatedTooltip() {
  return (
    <div className="relative inline-block group">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Hover me
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2"
      >
        <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 
          text-white text-sm rounded-lg shadow-lg"
        >
          Animated tooltip
          <div className="absolute left-1/2 -translate-x-1/2 top-full 
            border-4 border-transparent border-t-blue-500" 
          />
        </div>
      </motion.div>
    </div>
  )
}`
  }
];

export default function TooltipsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Tooltips</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful tooltip components with various styles and animations.
        </p>
      </div>

      <div className="space-y-12">
        {tooltipVariants.map((variant) => (
          <div key={variant.id}>
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