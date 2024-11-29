'use client';

import { useState, useCallback } from 'react';
import { CodeBracketIcon, PlayIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { motion } from 'framer-motion';
import { Toast } from '@/components/ui/Toast';

export function CodePreview() {
  const [showPreview, setShowPreview] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const codeSnippet = `import { Button } from '@chill-ui/react'

export default function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setIsCopied(true);
      setShowToast(true);
      
      // Reset copy button after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, [codeSnippet]);

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg text-gray-300">Quick Start</h3>
          <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
            <button
              onClick={() => setShowPreview(false)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
                !showPreview ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`}
            >
              <CodeBracketIcon className="h-4 w-4" />
              <span>Code</span>
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
                showPreview ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`}
            >
              <PlayIcon className="h-4 w-4" />
              <span>Preview</span>
            </button>
          </div>
        </div>
        {showPreview ? (
          <div className="flex justify-center items-center p-8 bg-gray-900/50 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Click me
              </span>
            </motion.button>
          </div>
        ) : (
          <div className="relative">
            <pre className="text-sm text-gray-300">
              <code>{codeSnippet}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
            >
              <ClipboardIcon className="h-4 w-4" />
              <span>Copy Code</span>
            </button>
          </div>
        )}
      </MotionDiv>
      <Toast message="Code copied to clipboard!" isVisible={showToast} />
    </>
  );
} 