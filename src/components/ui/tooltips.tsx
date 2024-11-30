'use client';

import { motion, AnimatePresence } from 'framer-motion';

export function BasicTooltip() {
  return (
    <div className="relative inline-block group">
      <span className="cursor-help text-blue-400 border-b border-dashed border-blue-400">
        Hover over me
      </span>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 
        bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
        This is a tooltip
      </div>
    </div>
  );
}

export function ArrowTooltip() {
  return (
    <div className="relative inline-block group">
      <span className="cursor-help text-purple-400 border-b border-dashed border-purple-400">
        Hover for info
      </span>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-200">
        <div className="relative px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
          Tooltip with arrow
          <div className="absolute left-1/2 -translate-x-1/2 top-full 
            border-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  );
}

export function AnimatedTooltip() {
  return (
    <div className="relative inline-block group">
      <span className="cursor-help text-blue-500 underline decoration-dotted">
        Important information
      </span>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible">
          <div className="relative px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 
            text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
            Animated tooltip with gradient
            <div className="absolute left-1/2 -translate-x-1/2 top-full 
              border-4 border-transparent border-t-blue-500" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 