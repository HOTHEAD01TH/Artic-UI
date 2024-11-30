'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute ${positionClasses[position]} z-50`}
          >
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-800">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const tooltipVariants = [
  {
    title: 'Basic Tooltip',
    description: 'A simple tooltip with fade animation',
    preview: (
      <div className="flex gap-4 items-center justify-center p-8">
        <Tooltip content="This is a tooltip">
          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <InformationCircleIcon className="w-5 h-5" />
          </button>
        </Tooltip>
      </div>
    ),
    code: `interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 
              rounded-lg shadow-lg border border-gray-800"
            >
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`
  },
  {
    title: 'Positioned Tooltips',
    description: 'Tooltips that can be positioned on any side',
    preview: (
      <div className="flex gap-8 items-center justify-center p-12">
        <Tooltip content="Top tooltip" position="top">
          <button className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-600">
            Top
          </button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <button className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-600">
            Right
          </button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <button className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-600">
            Bottom
          </button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <button className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-600">
            Left
          </button>
        </Tooltip>
      </div>
    ),
    code: `interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ 
  content, 
  children, 
  position = 'top' 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={\`absolute \${positionClasses[position]} z-50\`}
          >
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 
              rounded-lg shadow-lg border border-gray-800"
            >
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`
  }
];

export default function TooltipsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Tooltips</h1>
        <p className="text-gray-400 text-lg mb-8">
          Lightweight and accessible tooltip components with smooth animations.
        </p>
      </div>

      <div className="space-y-12">
        {tooltipVariants.map((variant) => (
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