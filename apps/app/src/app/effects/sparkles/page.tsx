'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sparkle component for reuse
const Sparkle = ({ color = 'white', size = 4, style }: { color?: string; size?: number; style?: any }) => (
  <motion.span
    initial={{ scale: 0, rotate: 0 }}
    animate={{
      scale: [0, 1, 0],
      rotate: [0, 90, 180],
    }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: `0 0 ${size}px ${color}`,
      ...style,
    }}
  />
);

const SparkleButton = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const addSparkle = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setSparkles(s => [...s, { id, x, y }]);
    setTimeout(() => {
      setSparkles(s => s.filter(spark => spark.id !== id));
    }, 500);
  };

  return (
    <button
      onMouseMove={addSparkle}
      className="relative px-8 py-4 bg-purple-600 text-white rounded-lg overflow-hidden"
    >
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} style={{ left: x, top: y }} color="#fff" />
        ))}
      </AnimatePresence>
      Hover me for sparkles
    </button>
  );
};

const SparkleText = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      setSparkles(s => [...s, { id, x, y }]);
      setTimeout(() => {
        setSparkles(s => s.filter(spark => spark.id !== id));
      }, 500);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block px-4 py-2">
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} style={{ left: `${x}%`, top: `${y}%` }} color="#ffd700" size={3} />
        ))}
      </AnimatePresence>
      <span className="relative z-10 text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
         Magical Text 
      </span>
    </div>
  );
};

const ClickSparkleButton = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  return (
    <button
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Create 8 sparkles in a circle
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const sparkleX = x + Math.cos(angle) * 20;
          const sparkleY = y + Math.sin(angle) * 20;
          const id = Date.now() + i;
          setSparkles(s => [...s, { id, x: sparkleX, y: sparkleY }]);
          setTimeout(() => {
            setSparkles(s => s.filter(spark => spark.id !== id));
          }, 500);
        }
      }}
      className="relative px-8 py-4 bg-purple-600 text-white rounded-lg overflow-hidden"
    >
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} style={{ left: x, top: y }} color="#fff" />
        ))}
      </AnimatePresence>
      Click for sparkles
    </button>
  );
};

const TrailSparkle = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  return (
    <div 
      className="relative w-full h-48 bg-gray-900 rounded-lg"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setSparkles(s => [...s, { id, x, y }]);
        setTimeout(() => {
          setSparkles(s => s.filter(spark => spark.id !== id));
        }, 300);
      }}
    >
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} style={{ left: x, top: y }} color="#fff" size={2} />
        ))}
      </AnimatePresence>
      <p className="absolute inset-0 flex items-center justify-center text-white/50">
        Move your mouse around
      </p>
    </div>
  );
};

const sparkleEffects = [
  {
    title: 'Sparkle Button',
    description: 'A button that creates sparkles on hover',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <SparkleButton />
      </div>
    ),
    code: `import { motion, AnimatePresence } from 'framer-motion';

const Sparkle = ({ color = 'white', size = 4, style }) => (
  <motion.span
    initial={{ scale: 0, rotate: 0 }}
    animate={{
      scale: [0, 1, 0],
      rotate: [0, 90, 180],
    }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: \`0 0 \${size}px \${color}\`,
      ...style,
    }}
  />
);

export function SparkleButton() {
  const [sparkles, setSparkles] = useState([]);

  const addSparkle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setSparkles(s => [...s, { id, x, y }]);
    setTimeout(() => {
      setSparkles(s => s.filter(spark => spark.id !== id));
    }, 500);
  };

  return (
    <button
      onMouseMove={addSparkle}
      className="relative px-8 py-4 bg-purple-600 
        text-white rounded-lg overflow-hidden"
    >
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} 
            style={{ left: x, top: y }} 
            color="#fff" 
          />
        ))}
      </AnimatePresence>
      Hover me for sparkles
    </button>
  );
}`
  },
  {
    title: 'Sparkle Text',
    description: 'Text with automatic sparkling effect',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <SparkleText />
      </div>
    ),
    code: `export function SparkleText() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      setSparkles(s => [...s, { id, x, y }]);
      setTimeout(() => {
        setSparkles(s => s.filter(spark => spark.id !== id));
      }, 500);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block px-4 py-2">
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} 
            style={{ left: \`\${x}%\`, top: \`\${y}%\` }} 
            color="#ffd700" 
            size={3} 
          />
        ))}
      </AnimatePresence>
      <span className="relative z-10 text-2xl font-bold 
        bg-gradient-to-r from-yellow-400 to-yellow-600 
        text-transparent bg-clip-text"
      >
         Magical Text 
      </span>
    </div>
  );
}`
  },
  {
    title: 'Click Sparkle',
    description: 'Sparkles that burst on click',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <ClickSparkleButton />
      </div>
    ),
    code: `export function ClickSparkle() {
  const [sparkles, setSparkles] = useState([]);

  const burstSparkles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create 8 sparkles in a circle
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const sparkleX = x + Math.cos(angle) * 20;
      const sparkleY = y + Math.sin(angle) * 20;
      const id = Date.now() + i;
      setSparkles(s => [...s, { id, x: sparkleX, y: sparkleY }]);
      setTimeout(() => {
        setSparkles(s => s.filter(spark => spark.id !== id));
      }, 500);
    }
  };

  return (
    <button
      onClick={burstSparkles}
      className="relative px-8 py-4 bg-purple-600 
        text-white rounded-lg overflow-hidden"
    >
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} 
            style={{ left: x, top: y }} 
            color="#fff" 
          />
        ))}
      </AnimatePresence>
      Click for sparkles
    </button>
  );
}`
  },
  {
    title: 'Trail Sparkle',
    description: 'Sparkles that follow the mouse movement',
    preview: (
      <div className="flex items-center justify-center w-full min-h-[200px]">
        <TrailSparkle />
      </div>
    ),
    code: `export function TrailSparkle() {
  const [sparkles, setSparkles] = useState([]);

  const addTrailSparkle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setSparkles(s => [...s, { id, x, y }]);
    setTimeout(() => {
      setSparkles(s => s.filter(spark => spark.id !== id));
    }, 300);
  };

  return (
    <div 
      className="relative w-full h-48 bg-gray-900 rounded-lg"
      onMouseMove={addTrailSparkle}
    >
      <AnimatePresence>
        {sparkles.map(({ id, x, y }) => (
          <Sparkle key={id} 
            style={{ left: x, top: y }} 
            color="#fff" 
            size={2}
          />
        ))}
      </AnimatePresence>
      <p className="absolute inset-0 flex items-center justify-center text-white/50">
        Move your mouse around
      </p>
    </div>
  );
}`
  }
];

export default function SparklesPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Sparkle Effects</h1>
        <p className="text-gray-400 text-lg mb-8">
          Add magical sparkle effects to your UI elements.
        </p>
      </div>

      <div className="space-y-12">
        {sparkleEffects.map((effect) => (
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