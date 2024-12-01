'use client';

import { useState, useRef, useEffect } from 'react';
import { MotionDiv } from '@/components/motion/MotionDiv';
import GradientButton from '@/components/ui/gradient-button';
import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';



// Move component definitions to the top
const Card3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-white/10 p-6 flex flex-col justify-between backdrop-blur-sm"
      >
        <div className="z-10">
          <p className="text-xl font-bold text-white">Hover Me</p>
          <p className="text-sm text-white/70 mt-2">
            Interactive 3D card with spring physics
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const LiquidShape = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative h-96 w-full bg-gray-900 rounded-xl overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
        animate={{
          borderRadius: isHovered 
            ? ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"] 
            : ["20% 80% 80% 20% / 20% 20% 80% 80%", "80% 20% 20% 80% / 80% 80% 20% 20%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Liquid Morphing</h3>
          <p className="text-white/70">Hover to change animation</p>
        </div>
      </div>
    </div>
  );
};

// Then define the components array
const components = [
  {
    title: 'Buttons',
    description: 'Beautiful gradient buttons with hover and animation effects',
    href: '/components/buttons',
    component: (
      <ButtonPreview
        preview={<GradientButton>Click me</GradientButton>}
        code={`import { motion } from 'framer-motion'

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
}`}
      />
    ),
  },
  {
    title: '3D Card',
    description: 'Interactive 3D card with spring physics and hover effects',
    href: '/components/3d-card',
    component: (
      <ButtonPreview
        preview={<Card3D />}
        code={`import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const Card3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-white/10 p-6 flex flex-col justify-between backdrop-blur-sm"
      >
        <div className="z-10">
          <p className="text-xl font-bold text-white">Hover Me</p>
          <p className="text-sm text-white/70 mt-2">
            Interactive 3D card with spring physics
          </p>
        </div>
      </div>
    </motion.div>
  )
}`}
      />
    ),
  },
  {
    title: 'Liquid Shape',
    description: 'Morphing animated shape with gradient effects',
    href: '/components/liquid-shape',
    component: (
      <ButtonPreview
        preview={<LiquidShape />}
        code={`import { motion } from 'framer-motion'
import { useState } from 'react'

export const LiquidShape = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative h-96 w-full bg-gray-900 rounded-xl overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
        animate={{
          borderRadius: isHovered 
            ? ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"] 
            : ["20% 80% 80% 20% / 20% 20% 80% 80%", "80% 20% 20% 80% / 80% 80% 20% 20%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Liquid Morphing</h3>
          <p className="text-white/70">Hover to change animation</p>
        </div>
      </div>
    </div>
  )
}`}
      />
    ),
  },
];

// Add these new component definitions after the existing ones

const SpotlightCard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative h-96 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h3 className="text-2xl font-bold text-white">Spotlight Effect</h3>
        <p className="mt-4 text-gray-400">Move your mouse to see the spotlight follow</p>
      </div>
    </div>
  );
};

const FloatingText = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-black p-8">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-20, 20, -20],
          textShadow: [
            "0 0 20px rgba(255,255,255,0.5)",
            "0 0 50px rgba(255,255,255,0.3)",
            "0 0 20px rgba(255,255,255,0.5)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full flex items-center justify-center"
      >
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent">
          Floating
        </h2>
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent)]" />
    </div>
  );
};

const GlowingBorder = () => {
  return (
    <div className="relative h-96 w-full">
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(62, 152, 199, 0.7)",
            "0 0 60px rgba(62, 152, 199, 0.3)",
            "0 0 20px rgba(62, 152, 199, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-full rounded-xl border-2 border-blue-400/50 bg-gray-900/50 p-8 backdrop-blur-sm"
      >
        <div className="flex h-full flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-white">Glowing Border</h3>
          <p className="mt-4 text-gray-400">Watch the border pulse with light</p>
        </div>
      </motion.div>
    </div>
  );
};

// Add these to your components array
const newComponents = [
  {
    title: 'Spotlight Card',
    description: 'Interactive spotlight effect that follows mouse movement',
    href: '/components/spotlight',
    component: (
      <ButtonPreview
        preview={<SpotlightCard />}
        code={`export const SpotlightCard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative h-96 w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: \`radial-gradient(600px circle at \${position.x}px \${position.y}px, rgba(255,255,255,0.06), transparent 40%)\`,
        }}
      />
      <div className="relative z-10 h-full rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h3 className="text-2xl font-bold text-white">Spotlight Effect</h3>
        <p className="mt-4 text-gray-400">Move your mouse to see the spotlight follow</p>
      </div>
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Floating Text',
    description: 'Animated floating text with gradient and glow effects',
    href: '/components/floating-text',
    component: (
      <ButtonPreview
        preview={<FloatingText />}
        code={`export const FloatingText = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-black p-8">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-20, 20, -20],
          textShadow: [
            "0 0 20px rgba(255,255,255,0.5)",
            "0 0 50px rgba(255,255,255,0.3)",
            "0 0 20px rgba(255,255,255,0.5)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full flex items-center justify-center"
      >
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent">
          Floating
        </h2>
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent)]" />
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Glowing Border',
    description: 'Card with animated glowing border effect',
    href: '/components/glowing-border',
    component: (
      <ButtonPreview
        preview={<GlowingBorder />}
        code={`export const GlowingBorder = () => {
  return (
    <div className="relative h-96 w-full">
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(62, 152, 199, 0.7)",
            "0 0 60px rgba(62, 152, 199, 0.3)",
            "0 0 20px rgba(62, 152, 199, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-full rounded-xl border-2 border-blue-400/50 bg-gray-900/50 p-8 backdrop-blur-sm"
      >
        <div className="flex h-full flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-white">Glowing Border</h3>
          <p className="mt-4 text-gray-400">Watch the border pulse with light</p>
        </div>
      </motion.div>
    </div>
  );
}`}
      />
    ),
  },
];

// Add these to your existing components array
components.push(...newComponents);

// Add these new component definitions

const MagneticButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="h-96 w-full flex items-center justify-center bg-gray-900 rounded-xl">
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-bold text-lg"
      >
        Magnetic Button
        <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
      </motion.button>
    </div>
  );
};

const RainbowText = () => {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-6xl font-bold"
        style={{
          backgroundImage: "linear-gradient(to right, #ff0000, #00ff00, #0000ff, #ff0000)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Rainbow Text
      </motion.div>
    </div>
  );
};

const PulsingRings = () => {
  return (
    <div className="relative h-96 w-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border-2 border-blue-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">Pulse</span>
      </div>
    </div>
  );
};

// Add these to your components array
const evenMoreComponents = [
  {
    title: 'Magnetic Button',
    description: 'Button that follows cursor with smooth spring animation',
    href: '/components/magnetic-button',
    component: (
      <ButtonPreview
        preview={<MagneticButton />}
        code={`export const MagneticButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-bold text-lg"
    >
      Magnetic Button
      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}`}
      />
    ),
  },
  {
    title: 'Rainbow Text',
    description: 'Animated text with flowing rainbow gradient effect',
    href: '/components/rainbow-text',
    component: (
      <ButtonPreview
        preview={<RainbowText />}
        code={`export const RainbowText = () => {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      className="text-6xl font-bold"
      style={{
        backgroundImage: "linear-gradient(to right, #ff0000, #00ff00, #0000ff, #ff0000)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Rainbow Text
    </motion.div>
  );
}`}
      />
    ),
  },
  {
    title: 'Pulsing Rings',
    description: 'Animated concentric rings with smooth pulsing effect',
    href: '/components/pulsing-rings',
    component: (
      <ButtonPreview
        preview={<PulsingRings />}
        code={`export const PulsingRings = () => {
  return (
    <div className="relative flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border-2 border-blue-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">Pulse</span>
      </div>
    </div>
  );
}`}
      />
    ),
  },
];

// Add these to your existing components array
components.push(...evenMoreComponents);

// Add these new component definitions

const ParallaxCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((centerX - x) / centerX) * 20;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  return (
    <motion.div
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 p-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm" />
      <div className="relative h-full w-full rounded-xl bg-black/90 p-8">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Parallax Card</h3>
            <p className="mt-2 text-gray-400">Move your mouse to see the effect</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-20 rounded-lg bg-white/5"
                animate={{
                  rotateX: rotateX * (i * 0.5),
                  rotateY: rotateY * (i * 0.5),
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WaveText = () => {
  const text = "Wave Animation";
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
      <div className="flex space-x-1">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-5xl font-bold text-white inline-block"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const InfinityLoader = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="absolute h-20 w-20 rounded-full border-4 border-transparent border-t-blue-500"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="h-20 w-20 rounded-full border-4 border-transparent border-t-purple-500"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

// Add these to your components array
const moreComponents = [
  {
    title: 'Parallax Card',
    description: 'Interactive card with dynamic parallax effect on mouse move',
    href: '/components/parallax-card',
    component: (
      <ButtonPreview
        preview={<ParallaxCard />}
        code={`export const ParallaxCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((centerX - x) / centerX) * 20;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  return (
    <motion.div
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 p-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm" />
      <div className="relative h-full w-full rounded-xl bg-black/90 p-8">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Parallax Card</h3>
            <p className="mt-2 text-gray-400">Move your mouse to see the effect</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-20 rounded-lg bg-white/5"
                animate={{
                  rotateX: rotateX * (i * 0.5),
                  rotateY: rotateY * (i * 0.5),
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}`}
      />
    ),
  },
  {
    title: 'Wave Text',
    description: 'Text animation with wave effect',
    href: '/components/wave-text',
    component: (
      <ButtonPreview
        preview={<WaveText />}
        code={`export const WaveText = () => {
  const text = "Wave Animation";
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
      <div className="flex space-x-1">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-5xl font-bold text-white inline-block"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Infinity Loader',
    description: 'Smooth infinite loading animation',
    href: '/components/infinity-loader',
    component: (
      <ButtonPreview
        preview={<InfinityLoader />}
        code={`export const InfinityLoader = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="absolute h-20 w-20 rounded-full border-4 border-transparent border-t-blue-500"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="h-20 w-20 rounded-full border-4 border-transparent border-t-purple-500"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}`}
      />
    ),
  },
];

// Add these to your existing components array
components.push(...moreComponents);

// Add these new component definitions

const MatrixRain = () => {
  const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";
  const columns = 50;

  return (
    <div className="h-96 w-full bg-black rounded-xl overflow-hidden">
      <div className="flex justify-between">
        {Array.from({ length: columns }).map((_, i) => {
          const streamLength = 25 + Math.floor(Math.random() * 25);
          const streamDelay = Math.random() * 2;
          const streamSpeed = 3 + Math.random() * 2;
          
          return (
            <div key={i} className="flex flex-col text-xs leading-3">
              {Array.from({ length: streamLength }).map((_, j) => {
                const isHead = j === 0;
                const tailFactor = (streamLength - j) / streamLength;
                
                return (
                  <motion.span
                    key={j}
                    initial={{ y: -100 }}
                    animate={{ y: 800 }}
                    transition={{
                      duration: streamSpeed,
                      repeat: Infinity,
                      ease: "linear",
                      delay: streamDelay
                    }}
                    className={`font-mono ${isHead ? 'text-white' : 'text-green-500'}`}
                    style={{
                      textShadow: isHead 
                        ? "0 0 8px rgba(255, 255, 255, 0.8)" 
                        : "0 0 8px rgba(0, 255, 0, 0.8)",
                      opacity: isHead ? 1 : tailFactor * 0.8,
                      fontSize: "0.6rem",
                    }}
                  >
                    {Math.random() > 0.95 ? "1" : Math.random() > 0.95 ? "0" : characters[Math.floor(Math.random() * characters.length)]}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GlitchText = () => {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative text-5xl font-bold text-white"
        animate={{
          x: [-2, 2, -2],
          y: [1, -1, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        GLITCH
        <motion.div
          className="absolute inset-0 text-red-500"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          animate={{
            x: [2, -2, 2],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          GLITCH
        </motion.div>
        <motion.div
          className="absolute inset-0 text-blue-500"
          style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
          animate={{
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 0.12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          GLITCH
        </motion.div>
      </motion.div>
    </div>
  );
};

const EnergyField = () => {
  return (
    <div className="relative w-64 h-64">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: '2px solid',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            borderColor: `hsl(${i * 50}, 100%, 50%, 0.5)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-overlay"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Add these to your components array
const crazyComponents = [
  {
    title: 'Matrix Rain',
    description: 'Digital rain effect inspired by The Matrix',
    href: '/components/matrix-rain',
    component: (
      <ButtonPreview
        preview={<MatrixRain />}
        code={`import { motion } from 'framer-motion';

export const MatrixRain = () => {
  const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";
  const columns = 50;

  return (
    <div className="h-96 w-full bg-black rounded-xl overflow-hidden">
      <div className="flex justify-between">
        {Array.from({ length: columns }).map((_, i) => {
          const streamLength = 25 + Math.floor(Math.random() * 25);
          const streamDelay = Math.random() * 2;
          const streamSpeed = 3 + Math.random() * 2;
          
          return (
            <div key={i} className="flex flex-col text-xs leading-3">
              {Array.from({ length: streamLength }).map((_, j) => {
                const isHead = j === 0;
                const tailFactor = (streamLength - j) / streamLength;
                
                return (
                  <motion.span
                    key={j}
                    initial={{ y: -100 }}
                    animate={{ y: 800 }}
                    transition={{
                      duration: streamSpeed,
                      repeat: Infinity,
                      ease: "linear",
                      delay: streamDelay
                    }}
                    className={\`font-mono \${isHead ? 'text-white' : 'text-green-500'}\`}
                    style={{
                      textShadow: isHead 
                        ? "0 0 8px rgba(255, 255, 255, 0.8)" 
                        : "0 0 8px rgba(0, 255, 0, 0.8)",
                      opacity: isHead ? 1 : tailFactor * 0.8,
                      fontSize: "0.6rem",
                    }}
                  >
                    {Math.random() > 0.95 ? "1" : Math.random() > 0.95 ? "0" : characters[Math.floor(Math.random() * characters.length)]}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Glitch Text',
    description: 'Text with RGB split and glitch effect',
    href: '/components/glitch-text',
    component: (
      <ButtonPreview
        preview={<GlitchText />}
        code={`export const GlitchText = () => {
  return (
    <motion.div
      className="relative text-5xl font-bold text-white"
      animate={{
        x: [-2, 2, -2],
        y: [1, -1, 1],
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      GLITCH
      <motion.div
        className="absolute inset-0 text-red-500"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
        animate={{ x: [2, -2, 2] }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        GLITCH
      </motion.div>
      <motion.div
        className="absolute inset-0 text-blue-500"
        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
        animate={{ x: [-2, 2, -2] }}
        transition={{
          duration: 0.12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        GLITCH
      </motion.div>
    </motion.div>
  );
}`}
      />
    ),
  },
  {
    title: 'Energy Field',
    description: 'Morphing energy field with gradient effects',
    href: '/components/energy-field',
    component: (
      <ButtonPreview
        preview={<EnergyField />}
        code={`export const EnergyField = () => {
  return (
    <div className="relative w-64 h-64">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: '2px solid',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            borderColor: \`hsl(\${i * 50}, 100%, 50%, 0.5)\`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-overlay"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}`}
      />
    ),
  },
];

// Add these to your existing components array
components.push(...crazyComponents);
// Add these new component definitions after your existing ones
const HologramEffect = () => {
  return (
    <div className="h-96 w-full bg-black rounded-xl flex items-center justify-center overflow-hidden">
      <div className="relative">
        <motion.div
          className="text-5xl font-bold text-cyan-400"
          animate={{
            opacity: [0.5, 1, 0.5],
            textShadow: [
              "0 0 7px #22d3ee, 0 0 10px #22d3ee, 0 0 21px #22d3ee",
              "0 0 10px #22d3ee, 0 0 23px #22d3ee, 0 0 45px #22d3ee",
              "0 0 7px #22d3ee, 0 0 10px #22d3ee, 0 0 21px #22d3ee",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          HOLOGRAM
        </motion.div>
        <motion.div
          className="absolute inset-0 text-5xl font-bold text-red-400"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          animate={{
            x: [-2, 2, -2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          HOLOGRAM
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent mix-blend-overlay" />
      </div>
    </div>
  );
};

const ParticleSwarm = () => {
  return (
    <div className="relative h-96 w-full bg-black rounded-xl overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 0.5, 1],
            opacity: [0.7, 0.3, 0.7],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 mix-blend-overlay" />
    </div>
  );
};

const ShatteredText = () => {
  const letters = "SHATTERED".split("");
  
  return (
    <div className="h-96 w-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
      <div className="flex">
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            className="text-6xl font-bold text-white relative"
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
              rotate: [0, Math.random() * 20 - 10],
              scale: [1, 0.9 + Math.random() * 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          >
            {letter}
            <motion.div
              className="absolute inset-0 text-red-500"
              animate={{
                x: [0, Math.random() * 4 - 2],
                y: [0, Math.random() * 4 - 2],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {letter}
            </motion.div>
            <motion.div
              className="absolute inset-0 text-blue-500"
              animate={{
                x: [0, Math.random() * -4 + 2],
                y: [0, Math.random() * -4 + 2],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {letter}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Add these to your existing components array
const newCrazyComponents = [
  {
    title: 'Hologram Effect',
    description: 'Cyberpunk-style hologram text with glitch effects',
    href: '/components/hologram',
    component: (
      <ButtonPreview
        preview={<HologramEffect />}
        code={`export const HologramEffect = () => {
  return (
    <div className="relative">
      <motion.div
        className="text-5xl font-bold text-cyan-400"
        animate={{
          opacity: [0.5, 1, 0.5],
          textShadow: [
            "0 0 7px #22d3ee, 0 0 10px #22d3ee, 0 0 21px #22d3ee",
            "0 0 10px #22d3ee, 0 0 23px #22d3ee, 0 0 45px #22d3ee",
            "0 0 7px #22d3ee, 0 0 10px #22d3ee, 0 0 21px #22d3ee",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        HOLOGRAM
      </motion.div>
      {/* Add glitch effect layers */}
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Particle Swarm',
    description: 'Dynamic particle swarm with organic movement',
    href: '/components/particle-swarm',
    component: (
      <ButtonPreview
        preview={<ParticleSwarm />}
        code={`export const ParticleSwarm = () => {
  return (
    <div className="relative">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-300"
          style={{
            left: \`\${Math.random() * 100}%\`,
            top: \`\${Math.random() * 100}%\`,
          }}
          animate={{
            scale: [1, 0.5, 1],
            opacity: [0.7, 0.3, 0.7],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Shattered Text',
    description: 'Text effect with shattered glass appearance',
    href: '/components/shattered-text',
    component: (
      <ButtonPreview
        preview={<ShatteredText />}
        code={`export const ShatteredText = () => {
  const letters = "SHATTERED".split("");
  return (
    <div className="flex">
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          className="text-6xl font-bold text-white relative"
          animate={{
            y: [0, Math.random() * 20 - 10],
            x: [0, Math.random() * 20 - 10],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
        >
          {letter}
          {/* Add RGB split effects */}
        </motion.div>
      ))}
    </div>
  );
}`}
      />
    ),
  },
];

// Add these to your existing components array
components.push(...newCrazyComponents);
// Add these new cyber-themed components

const CyberButton = () => {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
      <motion.button
        className="relative px-8 py-4 bg-black border border-cyan-500 rounded-lg group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-cyan-500/50 blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
        <span className="relative text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
          INITIALIZE
        </span>
        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </motion.button>
    </div>
  );
};

const DataStream = () => {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-xl overflow-hidden">
      <div className="h-full flex flex-col gap-1 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-6 bg-cyan-950 rounded overflow-hidden flex items-center"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
            <motion.span
              className="absolute text-xs text-cyan-300 font-mono ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              {`DATA_STREAM_${i.toString().padStart(2, '0')} >> PROCESSING`}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CircuitBoard = () => {
  return (
    <div className="h-96 w-full bg-gray-900 rounded-xl overflow-hidden">
      <div className="relative h-full w-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-cyan-500/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}%`,
              rotate: `${Math.random() * 360}deg`,
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            <motion.div
              className="absolute right-0 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Add these to your components array
const cyberComponents = [
  {
    title: 'Cyber Button',
    description: 'Futuristic button with glow effects and data aesthetics',
    href: '/components/cyber-button',
    component: (
      <ButtonPreview
        preview={<CyberButton />}
        code={`export const CyberButton = () => {
  return (
    <motion.button
      className="relative px-8 py-4 bg-black border border-cyan-500 rounded-lg group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-cyan-500/50 blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
      <span className="relative text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
        INITIALIZE
      </span>
      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </motion.button>
  );
}`}
      />
    ),
  },
  {
    title: 'Data Stream',
    description: 'Animated data processing visualization',
    href: '/components/data-stream',
    component: (
      <ButtonPreview
        preview={<DataStream />}
        code={`export const DataStream = () => {
  return (
    <div className="h-full flex flex-col gap-1 p-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-6 bg-cyan-950 rounded overflow-hidden flex items-center"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <motion.span
            className="absolute text-xs text-cyan-300 font-mono ml-2"
          >
            {\`DATA_STREAM_\${i.toString().padStart(2, '0')} >> PROCESSING\`}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}`}
      />
    ),
  },
  {
    title: 'Circuit Board',
    description: 'Animated circuit paths with energy pulses',
    href: '/components/circuit-board',
    component: (
      <ButtonPreview
        preview={<CircuitBoard />}
        code={`export const CircuitBoard = () => {
  return (
    <div className="relative h-full w-full">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-cyan-500/50"
          style={{
            left: \`\${Math.random() * 100}%\`,
            top: \`\${Math.random() * 100}%\`,
            width: \`\${20 + Math.random() * 30}%\`,
            rotate: \`\${Math.random() * 360}deg\`,
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          <motion.div
            className="absolute right-0 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}`}
      />
    ),
  },
];

// Add these to your existing components array
components.push(...cyberComponents);

export default function ComponentsPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Components</h1>
      <p className="text-gray-400 text-lg mb-8">
        Explore our collection of beautiful and accessible React components.
      </p>
      
      <div className="grid grid-cols-1 gap-8">
        {components.map((component) => (
          <div key={component.title}>
            <div className="mb-4">
              <Link href={component.href}>
                <h2 className="text-2xl font-semibold hover:text-blue-400 transition-colors">{component.title}</h2>
              </Link>
              <p className="text-gray-400 mt-1">{component.description}</p>
            </div>
            {component.component}
          </div>
        ))}
      </div>
    </div>
  );
} 