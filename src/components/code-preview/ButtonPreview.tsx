'use client';

import { useState, useEffect } from 'react';
import { CodeBracketIcon, PlayIcon } from '@heroicons/react/24/outline';
import { MotionDiv } from '@/components/motion/MotionDiv';

interface ButtonPreviewProps {
  code: string;
  preview: React.ReactNode;
  title?: string;
}

export function ButtonPreview({ code, preview, title = "Preview" }: ButtonPreviewProps) {
  const [showPreview, setShowPreview] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm w-full max-w-full"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        <h3 className="text-lg text-gray-300">{title}</h3>
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
        <div className="flex justify-center items-center p-4 bg-gray-900/50 rounded-lg">
          {preview}
        </div>
      ) : (
        <div className="relative w-full">
          <pre className="max-h-[400px] w-full overflow-auto p-4 bg-gray-900/50 rounded-lg text-sm text-gray-300
            scrollbar-thin scrollbar-track-gray-900/20 scrollbar-thumb-gray-800/50
            hover:scrollbar-thumb-gray-700/50 transition-colors">
            <code className="whitespace-pre">{code}</code>
          </pre>
        </div>
      )}
    </MotionDiv>
  );
} 