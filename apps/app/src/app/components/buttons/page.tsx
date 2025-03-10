'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/gradient-button';
import { LoadingButtonPreview } from '@/components/ui/loading-button';
import { useState } from 'react';

const buttonVariants = [
  {
    id: 'gradient-border',
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
  {
    id: 'loading-button',
    title: 'Loading Button',
    description: 'Button with loading state animation',
    preview: <LoadingButtonPreview />,
    code: `export function LoadingButton({ children }) {
  const [isLoading, setIsLoading] = useState(false);
      
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="relative inline-flex items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  )
}`
  },
  {
    id: 'metallic-button',
    title: 'Metallic Effect Button',
    description: 'Button with a sleek metallic gradient effect',
    preview: (
      <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 font-medium">
        Metallic Button
      </button>
    ),
    code: `export function MetallicButton({ children }) {
  return (
    <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 font-medium">
      {children}
    </button>
  )
}`
  },
  {
    id: 'neon-glow',
    title: 'Neon Glow Button',
    description: 'Button with neon glow effect on hover',
    preview: (
      <button className="px-6 py-2.5 bg-purple-600 rounded-lg text-white relative overflow-hidden group">
        <span className="relative z-10">Neon Glow</span>
        <div className="absolute inset-0 group-hover:opacity-50 opacity-0 transition-opacity duration-300 bg-purple-500 blur-xl" />
      </button>
    ),
    code: `export function NeonGlowButton({ children }) {
  return (
    <button className="px-6 py-2.5 bg-purple-600 rounded-lg text-white relative overflow-hidden group">
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 group-hover:opacity-50 opacity-0 transition-opacity duration-300 bg-purple-500 blur-xl" />
    </button>
  )
}`
  },
  {
    id: 'shimmer-effect',
    title: 'Shimmer Effect Button',
    description: 'Button with a moving shimmer effect',
    preview: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg bg-slate-800 px-6 font-medium text-white transition-colors hover:bg-slate-700">
        <span className="relative z-10 flex items-center justify-center w-full">Shimmer Effect</span>
        <div className="absolute inset-0 flex translate-x-[-50%]">
          <div className="h-full w-32 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </button>
    ),
    code: `export function ShimmerButton({ children }) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg bg-slate-800 px-6 font-medium text-white transition-colors hover:bg-slate-700">
      <span className="relative z-10 flex items-center justify-center w-full">{children}</span>
      <div className="absolute inset-0 flex translate-x-[-50%]">
        <div className="h-full w-32 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </button>
  )
}`
  },
  {
    id: 'cyberpunk',
    title: 'Cyberpunk Button',
    description: 'Futuristic cyberpunk-styled button',
    preview: (
      <button className="relative px-6 py-2.5 bg-black border border-cyan-500 text-cyan-500 rounded group">
        <span className="relative z-10">CYBER_BUTTON.exe</span>
        <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
        <span className="absolute inset-0 z-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
      </button>
    ),
    code: `export function CyberpunkButton({ children }) {
  return (
    <button className="relative px-6 py-2.5 bg-black border border-cyan-500 text-cyan-500 rounded group">
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
      <span className="absolute inset-0 z-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
    </button>
  )
}`
  },
  {
    id: 'magnetic-glow',
    title: 'Magnetic Glow Button',
    description: 'Button with magnetic glow effect',
    preview: (
      <div className="relative inline-block">
        <button className="relative z-10 px-6 py-2.5 bg-gray-900 text-white rounded-lg group">
          Magnetic Glow
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500" />
        </button>
      </div>
    ),
    code: `export function MagneticGlowButton({ children }) {
  return (
    <div className="relative inline-block">
      <button className="relative z-10 px-6 py-2.5 bg-gray-900 text-white rounded-lg group">
        {children}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500" />
      </button>
    </div>
  )
}`
  },
  {
    id: 'spotlight-button',
    title: 'Spotlight Button',
    description: 'Button with a moving spotlight effect',
    preview: (
      <button className="relative inline-flex h-12 items-center justify-center px-6 py-2 bg-slate-900 text-white rounded-lg overflow-hidden group">
        <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 transition-all duration-500 ease-out group-hover:w-full" />
        <span className="relative">Spotlight</span>
      </button>
    ),
    code: `export function SpotlightButton({ children }) {
  return (
    <button className="relative inline-flex h-12 items-center justify-center px-6 py-2 bg-slate-900 text-white rounded-lg overflow-hidden group">
      <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 transition-all duration-500 ease-out group-hover:w-full" />
      <span className="relative">{children}</span>
    </button>
  )
}`
  },
  {
    id: 'glass-morphism',
    title: 'Glass Morphism Button',
    description: 'Modern glass morphism effect button',
    preview: (
      <button className="relative group px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <span className="relative z-10 text-white font-medium">Glass Button</span>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
      </button>
    ),
    code: `export function GlassMorphismButton({ children }) {
  return (
    <button className="relative group px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
      <span className="relative z-10 text-white font-medium">{children}</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
    </button>
  )
}`
  },
  {
    id: 'pulse-border',
    title: 'Pulse Border Button',
    description: 'Button with pulsing border effect',
    preview: (
      <button className="relative inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg group">
        <span className="relative">Pulse Border</span>
        <div className="absolute inset-0 rounded-lg border border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_2s_infinite]" />
      </button>
    ),
    code: `export function PulseBorderButton({ children }) {
  return (
    <button className="relative inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg group">
      <span className="relative">{children}</span>
      <div className="absolute inset-0 rounded-lg border border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-[pulse_2s_infinite]" />
    </button>
  )
}`
  },
  {
    id: '3d-button',
    title: '3D Push Button',
    description: 'Button with 3D push effect',
    preview: (
      <button className="px-6 py-2.5 bg-blue-500 text-white rounded-lg transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none transition-all">
        Push Me
      </button>
    ),
    code: `export function PushButton({ children }) {
  return (
    <button className="px-6 py-2.5 bg-blue-500 text-white rounded-lg transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none transition-all">
      {children}
    </button>
  )
}`
  },
  {
    id: 'rainbow-border',
    title: 'Rainbow Border Button',
    description: 'Button with animated rainbow border',
    preview: (
      <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-purple-200">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 group-hover:text-white">
          Rainbow Border
        </span>
      </button>
    ),
    code: `export function RainbowBorderButton({ children }) {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-purple-200">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 group-hover:text-white">
        {children}
      </span>
    </button>
  )
}`
  }
];

export default function ButtonsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Buttons</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful animated buttons with various styles and effects.
        </p>
      </div>

      <div className="space-y-12">
        {buttonVariants.map((variant) => (
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