'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { motion } from 'framer-motion';

const gradientEffects = [
  {
    title: 'Animated Gradient Background',
    description: 'A smoothly animated gradient background effect',
    preview: (
      <div className="p-8">
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" />
          <div className="relative h-full flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">Animated Gradient</h3>
          </div>
        </div>
      </div>
    ),
    code: `// Add to your globals.css
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

// React Component
export function AnimatedGradient({ children }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r 
        from-blue-500 via-purple-500 to-pink-500 
        animate-gradient" 
      />
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}`
  },
  {
    title: 'Gradient Text',
    description: 'Text with animated gradient effect',
    preview: (
      <div className="p-8 flex justify-center">
        <motion.h3 
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ backgroundSize: '200% 200%' }}
        >
          Gradient Text
        </motion.h3>
      </div>
    ),
    code: `import { motion } from 'framer-motion'

export function GradientText({ children }) {
  return (
    <motion.h3 
      className="text-4xl font-bold bg-clip-text text-transparent 
        bg-gradient-to-r from-blue-400 to-emerald-400"
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{ backgroundSize: '200% 200%' }}
    >
      {children}
    </motion.h3>
  );
}`
  },
  {
    title: 'Gradient Border',
    description: 'Element with animated gradient border',
    preview: (
      <div className="p-8 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient" />
          <div className="relative px-6 py-4 bg-black rounded-lg leading-none flex items-center">
            <span className="text-gray-100">Gradient Border Effect</span>
          </div>
        </div>
      </div>
    ),
    code: `export function GradientBorder({ children }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r 
        from-pink-600 to-purple-600 rounded-lg blur 
        opacity-75 group-hover:opacity-100 
        transition duration-1000 
        group-hover:duration-200 animate-gradient" 
      />
      <div className="relative px-6 py-4 bg-black rounded-lg 
        leading-none flex items-center"
      >
        {children}
      </div>
    </div>
  );
}`
  },
  {
    title: 'Mesh Gradient',
    description: 'Complex mesh gradient with multiple colors',
    preview: (
      <div className="p-8">
        <div className="h-48 w-full rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(92,238,205,0.35),rgba(0,0,0,0)_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.35),rgba(0,0,0,0)_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.35),rgba(0,0,0,0)_65%)]" />
          <div className="relative h-full flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">Mesh Gradient</h3>
          </div>
        </div>
      </div>
    ),
    code: `export function MeshGradient({ children }) {
  return (
    <div className="h-48 w-full rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_50%_50%,
        rgba(92,238,205,0.35),
        rgba(0,0,0,0)_65%)]" 
      />
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_80%_20%,
        rgba(124,58,237,0.35),
        rgba(0,0,0,0)_65%)]" 
      />
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_80%,
        rgba(236,72,153,0.35),
        rgba(0,0,0,0)_65%)]" 
      />
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}`
  },
  {
    title: 'Gradient Outline',
    description: 'A button with animated gradient outline',
    preview: (
      <div className="p-8 flex justify-center">
        <button className="relative p-[1px] overflow-hidden rounded-lg group">
          <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="relative px-6 py-2 bg-gray-900 rounded-lg group-hover:bg-gray-800">
            <span className="relative z-10 text-white font-medium">Gradient Outline</span>
          </div>
        </button>
      </div>
    ),
    code: `export function GradientOutline({ children }) {
  return (
    <button className="relative p-[1px] overflow-hidden rounded-lg group">
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" 
      />
      <div className="relative px-6 py-2 bg-gray-900 rounded-lg group-hover:bg-gray-800">
        <span className="relative z-10 text-white font-medium">{children}</span>
      </div>
    </button>
  )
}`
  },
  {
    title: 'Radial Gradient',
    description: 'Animated radial gradient effect',
    preview: (
      <div className="p-8">
        <div className="h-48 w-full rounded-lg relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),rgba(0,0,0,0)_50%)] animate-[ping_4s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),rgba(0,0,0,0)_50%)] animate-[ping_4s_ease-in-out_infinite_500ms]" />
          <div className="relative h-full flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">Radial Gradient</h3>
          </div>
        </div>
      </div>
    ),
    code: `export function RadialGradient({ children }) {
  return (
    <div className="h-48 w-full rounded-lg relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_50%_50%,
        rgba(56,189,248,0.15),rgba(0,0,0,0)_50%)] 
        animate-[ping_4s_ease-in-out_infinite]" 
      />
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_50%_50%,
        rgba(14,165,233,0.15),rgba(0,0,0,0)_50%)] 
        animate-[ping_4s_ease-in-out_infinite_500ms]" 
      />
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}`
  },
  {
    title: 'Conic Gradient',
    description: 'Animated conic gradient effect',
    preview: (
      <div className="p-8">
        <div className="h-48 w-full rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,#14b8a6,#8b5cf6,#ec4899,#14b8a6)]" />
          <div className="absolute inset-[2px] rounded-lg bg-gray-900 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">Conic Gradient</h3>
          </div>
        </div>
      </div>
    ),
    code: `// Add to tailwind.config.js
animation: {
  'spin-slow': 'spin 3s linear infinite',
}

// Component
export function ConicGradient({ children }) {
  return (
    <div className="h-48 w-full rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 animate-spin-slow 
        bg-[conic-gradient(from_0deg,#14b8a6,#8b5cf6,#ec4899,#14b8a6)]" 
      />
      <div className="absolute inset-[2px] rounded-lg bg-gray-900 
        flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  )
}`
  }
];

export default function GradientEffectsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Gradient Effects</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful gradient effects and animations for your UI elements.
        </p>
      </div>

      <div className="space-y-12">
        {gradientEffects.map((effect) => (
          <div key={effect.title}>
            <div className="max-w-2xl mb-4">
              <h2 className="text-2xl font-semibold">{effect.title}</h2>
              <p className="text-gray-400 mt-1">{effect.description}</p>
            </div>
            <ButtonPreview
              preview={effect.preview}
              code={effect.code}
              title="Preview"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 