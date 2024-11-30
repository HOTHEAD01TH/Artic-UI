'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    cardRef.current.style.setProperty('--rotateX', `${(y - 0.5) * 20}deg`);
    cardRef.current.style.setProperty('--rotateY', `${(x - 0.5) * 20}deg`);
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotateX', '0deg');
    cardRef.current.style.setProperty('--rotateY', '0deg');
  };

  return (
    <div 
      ref={cardRef}
      className="relative w-80 h-96 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-8 shadow-xl
        transition-transform duration-200 ease-out
        hover:shadow-2xl
        [transform:perspective(1000px)_rotateX(var(--rotateX,0deg))_rotateY(var(--rotateY,0deg))]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm" />
        <div className="relative z-10 text-white">
          <h3 className="text-2xl font-bold mb-4">Parallax Card</h3>
          <p className="text-white/80">
            Move your mouse over this card to see the parallax effect in action.
          </p>
        </div>
      </div>
    </div>
  );
};

const ParallaxLayers = () => {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-xl">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        animate={{
          x: [-20, 20],
          y: [-20, 20],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <motion.h3
            className="text-3xl font-bold text-white mb-2"
            animate={{ y: [-5, 5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            Floating Text
          </motion.h3>
          <motion.p
            className="text-white/80"
            animate={{ y: [5, -5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.2,
            }}
          >
            Multiple layers moving independently
          </motion.p>
        </div>
      </div>
    </div>
  );
};

const ParallaxHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div 
      className="relative h-96 overflow-hidden rounded-xl bg-gray-900"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          style={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          Parallax Hero
        </motion.h2>
        <motion.p
          className="text-xl text-white/80"
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          Move your mouse to see the effect
        </motion.p>
      </div>
    </div>
  );
};

const ParallaxGallery = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div 
      className="grid grid-cols-3 gap-4 p-8 rounded-xl bg-gray-900 min-h-[400px]"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="aspect-square w-full rounded-lg bg-gradient-to-br from-purple-500/40 to-blue-500/40 backdrop-blur-sm"
          animate={{
            x: mousePosition.x * (i % 3 - 1) * 20,
            y: mousePosition.y * (Math.floor(i / 3) - 0.5) * 20,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="w-full h-full flex items-center justify-center text-white/50">
            Item {i + 1}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const parallaxEffects = [
  {
    title: '3D Parallax Card',
    description: 'A card that responds to mouse movement with 3D rotation',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[400px]">
        <ParallaxCard />
      </div>
    ),
    code: `export function ParallaxCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = 
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    cardRef.current.style.setProperty(
      '--rotateX', 
      \`\${(y - 0.5) * 20}deg\`
    );
    cardRef.current.style.setProperty(
      '--rotateY', 
      \`\${(x - 0.5) * 20}deg\`
    );
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotateX', '0deg');
    cardRef.current.style.setProperty('--rotateY', '0deg');
  };

  return (
    <div 
      ref={cardRef}
      className="relative w-80 h-96 rounded-xl 
        bg-gradient-to-br from-violet-600 to-indigo-600 
        p-8 shadow-xl transition-transform duration-200 
        ease-out hover:shadow-2xl
        [transform:perspective(1000px)_rotateX(var(--rotateX,0deg))_
        rotateY(var(--rotateY,0deg))]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-lg 
          bg-white/10 backdrop-blur-sm" 
        />
        <div className="relative z-10 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Parallax Card
          </h3>
          <p className="text-white/80">
            Move your mouse over this card to see the 
            parallax effect in action.
          </p>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Multi-layer Parallax',
    description: 'Multiple layers moving independently for a depth effect',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[400px]">
        <ParallaxLayers />
      </div>
    ),
    code: `import { motion } from 'framer-motion';

export function ParallaxLayers() {
  return (
    <div className="relative h-80 w-full overflow-hidden rounded-xl">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br 
          from-blue-600/20 to-purple-600/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, 
            rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
        animate={{
          x: [-20, 20],
          y: [-20, 20],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <motion.h3
            className="text-3xl font-bold text-white mb-2"
            animate={{ y: [-5, 5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            Floating Text
          </motion.h3>
          <motion.p
            className="text-white/80"
            animate={{ y: [5, -5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.2,
            }}
          >
            Multiple layers moving independently
          </motion.p>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Parallax Hero',
    description: 'A hero section with multiple parallax layers',
    preview: (
      <div className="p-8">
        <ParallaxHero />
      </div>
    ),
    code: `export function ParallaxHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div 
      className="relative h-96 overflow-hidden rounded-xl bg-gray-900"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          style={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          Parallax Hero
        </motion.h2>
        <motion.p
          className="text-xl text-white/80"
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          Move your mouse to see the effect
        </motion.p>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Parallax Gallery',
    description: 'A grid of items with parallax movement',
    preview: (
      <div className="p-8">
        <ParallaxGallery />
      </div>
    ),
    code: `export function ParallaxGallery() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  return (
    <div 
      className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-gray-900"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20"
          style={{
            transform: \`translate(\${mousePosition.x * (i % 3 - 1) * 20}px, \${mousePosition.y * (Math.floor(i / 3) - 0.5) * 20}px)\`,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
      ))}
    </div>
  );
}`
  }
];

export default function ParallaxPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Parallax Effects</h1>
        <p className="text-gray-400 text-lg mb-8">
          Create depth and dimension with parallax animations.
        </p>
      </div>

      <div className="space-y-12">
        {parallaxEffects.map((effect) => (
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