'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700"
        >
          <CheckCircleIcon className="h-5 w-5 text-green-400" />
          <span className="text-sm">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 