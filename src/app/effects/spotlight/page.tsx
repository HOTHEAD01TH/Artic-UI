'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const spotlightEffects = [
  {
    title: 'Gradient Spotlight Button',
    description: 'A button with gradient background and spotlight effect',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <div 
          className="group relative w-fit overflow-hidden rounded-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,.1),transparent_40%)]" />
          <button 
            className="relative z-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Hover me
          </button>
        </div>
      </div>
    ),
    code: `export function GradientSpotlightButton() {
  return (
    <div 
      className="group relative w-fit overflow-hidden rounded-lg"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', \`\${x}px\`);
        e.currentTarget.style.setProperty('--mouse-y', \`\${y}px\`);
      }}
    >
      <div className="absolute inset-0 opacity-0 
        group-hover:opacity-100 transition duration-300 
        bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_
        var(--mouse-y,0px),rgba(255,255,255,.1),transparent_40%)]" 
      />
      <button 
        className="relative z-10 px-8 py-4 
          bg-gradient-to-r from-blue-600 to-purple-600 
          text-white font-medium rounded-lg 
          transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
      >
        Hover me
      </button>
    </div>
  );
}`
  },
  {
    title: 'Glass Spotlight Button',
    description: 'A glass-morphism button with spotlight effect',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <div 
          className="group relative w-fit overflow-hidden rounded-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,.1),transparent_40%)]" />
          <button 
            className="relative z-10 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg 
              transition-all duration-300 hover:bg-white/20"
          >
            Glass Button
          </button>
        </div>
      </div>
    ),
    code: `export function GlassSpotlightButton() {
  return (
    <div 
      className="group relative w-fit overflow-hidden rounded-lg"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', \`\${x}px\`);
        e.currentTarget.style.setProperty('--mouse-y', \`\${y}px\`);
      }}
    >
      <div className="absolute inset-0 opacity-0 
        group-hover:opacity-100 transition duration-300 
        bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_
        var(--mouse-y,0px),rgba(255,255,255,.1),transparent_40%)]" 
      />
      <button 
        className="relative z-10 px-8 py-4 
          bg-white/10 backdrop-blur-sm 
          border border-white/20 text-white 
          font-medium rounded-lg 
          transition-all duration-300 
          hover:bg-white/20"
      >
        Glass Button
      </button>
    </div>
  );
}`
  },
  {
    title: 'Neon Spotlight Button',
    description: 'A neon-styled button with spotlight and glow effects',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <div 
          className="group relative w-fit overflow-hidden rounded-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,.2),transparent_40%)]" />
          <button 
            className="relative z-10 px-8 py-4 bg-black border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:text-cyan-300 hover:border-cyan-300"
          >
            Neon Button
          </button>
        </div>
      </div>
    ),
    code: `export function NeonSpotlightButton() {
  return (
    <div 
      className="group relative w-fit overflow-hidden rounded-lg"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', \`\${x}px\`);
        e.currentTarget.style.setProperty('--mouse-y', \`\${y}px\`);
      }}
    >
      <div className="absolute inset-0 opacity-0 
        group-hover:opacity-100 transition duration-300 
        bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_
        var(--mouse-y,0px),rgba(56,189,248,.2),transparent_40%)]" 
      />
      <button 
        className="relative z-10 px-8 py-4 
          bg-black border-2 border-cyan-400 
          text-cyan-400 font-medium rounded-lg 
          transition-all duration-300 
          hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] 
          hover:text-cyan-300 hover:border-cyan-300"
      >
        Neon Button
      </button>
    </div>
  );
}`
  },
  {
    title: 'Spotlight Card',
    description: 'A card with a larger spotlight effect',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <div 
          className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 px-8 py-16 shadow-2xl w-full max-w-md"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(800px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,.07),transparent_40%)]" />
          <div className="relative z-10 mx-auto max-w-md text-center">
            <h3 className="text-xl font-bold text-white">Spotlight Card</h3>
            <p className="mt-2 text-gray-300">
              Hover anywhere on this card to see the spotlight effect follow your cursor.
            </p>
          </div>
        </div>
      </div>
    ),
    code: `export function SpotlightCard() {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl 
        border border-gray-800 bg-gray-900 px-8 py-16 
        shadow-2xl w-full max-w-md"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', \`\${x}px\`);
        e.currentTarget.style.setProperty('--mouse-y', \`\${y}px\`);
      }}
    >
      <div className="absolute inset-0 opacity-0 
        group-hover:opacity-100 transition duration-300 
        bg-[radial-gradient(800px_circle_at_var(--mouse-x,0px)_
        var(--mouse-y,0px),rgba(255,255,255,.07),transparent_40%)]" 
      />
      <div className="relative z-10 mx-auto max-w-md text-center">
        <h3 className="text-xl font-bold text-white">Spotlight Card</h3>
        <p className="mt-2 text-gray-300">
          Hover anywhere on this card to see the spotlight effect 
          follow your cursor.
        </p>
      </div>
    </div>
  );
}`
  }
];

export default function SpotlightPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Spotlight Effects</h1>
        <p className="text-gray-400 text-lg mb-8">
          Create beautiful spotlight effects that follow the cursor movement.
        </p>
      </div>

      <div className="space-y-12">
        {spotlightEffects.map((effect) => (
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