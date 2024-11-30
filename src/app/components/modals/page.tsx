'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalPreviewProps {
  children: (isOpen: boolean, setIsOpen: (open: boolean) => void) => React.ReactNode;
}

const ModalPreview: React.FC<ModalPreviewProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg text-white"
      >
        Open Modal
      </button>
      {children(isOpen, setIsOpen)}
    </div>
  );
};

const modalVariants = [
  {
    title: 'Basic Modal',
    description: 'A simple modal with fade animation',
    preview: (
      <ModalPreview>
        {(isOpen: boolean, setIsOpen: (open: boolean) => void) => (
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-full max-w-md"
                >
                  <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between p-4 border-b border-gray-800">
                      <h3 className="text-lg font-semibold text-white">Modal Title</h3>
                      <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300">This is a basic modal with a simple fade animation.</p>
                    </div>
                    <div className="flex justify-end gap-2 p-4 border-t border-gray-800">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-sm text-gray-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm text-white rounded-lg"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}
      </ModalPreview>
    ),
    code: `import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, setIsOpen, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-[50%] top-[50%] translate-x-[-50%] 
              translate-y-[-50%] z-50 w-full max-w-md"
          >
            <div className="bg-gray-900 border border-gray-800 
              rounded-lg shadow-xl"
            >
              <div className="flex items-center justify-between p-4 
                border-b border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                {children}
              </div>
              <div className="flex justify-end gap-2 p-4 
                border-t border-gray-800"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-400 
                    hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 
                    text-sm text-white rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}`
  },
  {
    title: 'Slide Modal',
    description: 'A modal that slides in from the side',
    preview: (
      <ModalPreview>
        {(isOpen: boolean, setIsOpen: (open: boolean) => void) => (
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="fixed right-0 top-0 h-full w-full max-w-md z-50"
                >
                  <div className="h-full bg-gray-900 border-l border-gray-800 shadow-xl">
                    <div className="flex items-center justify-between p-4 border-b border-gray-800">
                      <h3 className="text-lg font-semibold text-white">Slide Modal</h3>
                      <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300">This modal slides in from the right side of the screen.</p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}
      </ModalPreview>
    ),
    code: `interface SlideModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export function SlideModal({ 
  isOpen, 
  setIsOpen, 
  title, 
  children 
}: SlideModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md z-50"
          >
            <div className="h-full bg-gray-900 border-l 
              border-gray-800 shadow-xl"
            >
              <div className="flex items-center justify-between p-4 
                border-b border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}`
  }
];

export default function ModalsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Modals</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful modal components with smooth animations and transitions.
        </p>
      </div>

      <div className="space-y-12">
        {modalVariants.map((variant) => (
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