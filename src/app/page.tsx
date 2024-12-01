'use client';

import { useState } from 'react';
import { SparklesIcon, CodeBracketIcon, CubeIcon, BoltIcon, PaintBrushIcon, UserGroupIcon, CodeBracketSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { MotionDiv, MotionButton } from '@/components/motion/MotionDiv';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

import Link from 'next/link';

export default function Home() {
  const [showGradientCode, setShowGradientCode] = useState(false);
  const [show3DCode, setShow3DCode] = useState(false);
  const [showAvatarCode, setShowAvatarCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Ice/Snow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent mix-blend-overlay" />
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-snowfall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 10}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-shiver">
            Artic-UI
          </h1>
          <p className="text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Beautiful, modern, and accessible React components for your Next.js applications
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/components/buttons">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="relative px-8 py-4 rounded-lg font-medium text-lg group overflow-hidden"
              >
                {/* Ice cube layers */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-200/30" />
                <div className="absolute inset-0 border border-white/20" />
                {/* Shine effect */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Inner frost pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_60%)]" />
                {/* Text */}
                <span className="relative z-10 text-white/90">Get Started</span>
              </MotionButton>
            </Link>
            <Link href="/components/buttons">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                className="relative px-8 py-4 rounded-lg font-medium text-lg group overflow-hidden"
              >
                {/* Frost glass effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5" />
                <div className="absolute inset-0 border border-white/10" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                {/* Text */}
                <span className="relative z-10 text-white/80">Documentation</span>
              </MotionButton>
            </Link>
          </div>
        </MotionDiv>

        {/* Frost Effect Corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full" />
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <SparklesIcon className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beautiful Components</h3>
            <p className="text-gray-400">
              Carefully crafted components that look great out of the box
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <CodeBracketIcon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer Experience</h3>
            <p className="text-gray-400">
              Built with TypeScript and fully customizable with Tailwind CSS
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <CubeIcon className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-400">
              Built for React and Next.js with modern best practices
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Interactive Components
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Buttons and Skeleton */}
          <div className="space-y-6">
            {/* Buttons Card */}
            <h3 className="text-2xl font-semibold mb-4">Interactive Buttons</h3>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex flex-wrap gap-4">
                {/* Gradient Border Button */}
                <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Gradient Border
                  </span>
                </button>

                {/* Glass Button */}
                <button className="px-6 py-3 bg-white/10 rounded-lg text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all">
                  Glass Effect
                </button>

                {/* Gradient Fill Button */}
                <button className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity">
                  Gradient Fill
                </button>

                {/* Outline Glow Button */}
                <button className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow">
                  Outline Glow
                </button>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Skeleton</h3>
            {/* Skeleton Card */}
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="space-y-4">
                {/* Card Header Skeleton */}
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700/50 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-gray-700/50 rounded animate-pulse" />
                    <div className="h-3 w-32 bg-gray-700/50 rounded animate-pulse" />
                  </div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-700/50 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-700/50 rounded animate-pulse" />
                  <div className="h-4 w-4/6 bg-gray-700/50 rounded animate-pulse" />
                </div>

                {/* Action Skeleton */}
                <div className="flex gap-3">
                  <div className="h-8 w-20 bg-gray-700/50 rounded animate-pulse" />
                  <div className="h-8 w-20 bg-gray-700/50 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Card */}
          <ButtonPreview
            title="3D Parallax Card"
            preview={
              <div className="group relative h-[300px] w-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-8 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(10deg)_rotateY(10deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black [transform:translateZ(-50px)]" />
                <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-blue-500/50 to-purple-500/50 blur-xl [transform:translateZ(-40px)]" />
                <div className="relative text-white [transform:translateZ(80px)]">
                  <h4 className="text-2xl font-bold mb-2">3D Card</h4>
                  <p className="text-white/80">Hover to see the 3D effect</p>
                </div>
              </div>
            }
            code={`<div className="group relative h-[300px] rounded-xl bg-gradient-to-br 
  from-blue-500 to-purple-500 p-8 transition-all duration-500 
  [transform-style:preserve-3d] hover:[transform:rotateX(10deg)_rotateY(10deg)]">
  <div className="absolute inset-0 h-full w-full rounded-xl bg-black 
    [transform:translateZ(-50px)]" />
  <div className="absolute inset-0 h-full w-full rounded-xl 
    bg-gradient-to-br from-blue-500/50 to-purple-500/50 blur-xl 
    [transform:translateZ(-40px)]" />
  <div className="relative text-white [transform:translateZ(80px)]">
    <h4 className="text-2xl font-bold">3D Card</h4>
    <p className="text-white/80">Hover to see the 3D effect</p>
  </div>
</div>`}
          />
        </div>

        {/* Avatars and Notifications Section */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Avatars */}
          <ButtonPreview
            title="Avatars"
            preview={
              <div className="flex flex-wrap gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-500/20">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500 ring-2 ring-blue-500/20">
                  <span className="flex h-full w-full items-center justify-center text-lg font-medium text-white">
                    JD
                  </span>
                </div>
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-500/20">
                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                </div>
              </div>
            }
            code={`{/* Image Avatar */}
<div className="relative h-12 w-12 overflow-hidden rounded-full 
  ring-2 ring-blue-500/20">
  <img
    src="https://i.pravatar.cc/100?img=1"
    alt="Avatar"
    className="h-full w-full object-cover"
  />
</div>

{/* Initial Avatar */}
<div className="relative h-12 w-12 overflow-hidden rounded-full 
  bg-gradient-to-br from-blue-500 to-purple-500 
  ring-2 ring-blue-500/20">
  <span className="flex h-full w-full items-center justify-center 
    text-lg font-medium text-white">
    JD
  </span>
</div>

{/* Status Avatar */}
<div className="relative h-12 w-12 overflow-hidden rounded-full 
  ring-2 ring-blue-500/20">
  <img
    src="https://i.pravatar.cc/100?img=2"
    alt="Avatar"
    className="h-full w-full object-cover"
  />
  <span className="absolute bottom-0 right-0 h-3 w-3 
    rounded-full bg-green-500 ring-2 ring-white" />
</div>`}
          />

          {/* Notifications */}
          <ButtonPreview
            title="Notifications"
            preview={
              <div className="flex flex-col gap-4 w-full max-w-sm">
                {/* Success Notification */}
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                  <CheckCircleIcon className="h-5 w-5" />
                  <p>Successfully updated profile!</p>
                </div>

                {/* Info Notification */}
                <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400">
                  <div className="relative">
                    <div className="absolute -top-1 -right-1 h-2 w-2 bg-blue-400 rounded-full animate-ping" />
                    <div className="relative h-2 w-2 bg-blue-400 rounded-full" />
                  </div>
                  <p>New message received</p>
                </div>

                {/* Warning Notification */}
                <div className="flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400">
                  <div className="h-5 w-5 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                    <span className="text-sm font-bold">!</span>
                  </div>
                  <p>Your subscription is expiring soon</p>
                </div>
              </div>
            }
            code={`{/* Success Notification */}
<div className="flex items-center gap-3 p-4 bg-green-500/10 
  border border-green-500/20 rounded-lg text-green-400">
  <CheckCircleIcon className="h-5 w-5" />
  <p>Successfully updated profile!</p>
</div>

{/* Info Notification */}
<div className="flex items-center gap-3 p-4 bg-blue-500/10 
  border border-blue-500/20 rounded-lg text-blue-400">
  <div className="relative">
    <div className="absolute -top-1 -right-1 h-2 w-2 
      bg-blue-400 rounded-full animate-ping" />
    <div className="relative h-2 w-2 bg-blue-400 rounded-full" />
  </div>
  <p>New message received</p>
</div>

{/* Warning Notification */}
<div className="flex items-center gap-3 p-4 bg-yellow-500/10 
  border border-yellow-500/20 rounded-lg text-yellow-400">
  <div className="h-5 w-5 rounded-full border-2 border-yellow-400 
    flex items-center justify-center">
    <span className="text-sm font-bold">!</span>
  </div>
  <p>Your subscription is expiring soon</p>
</div>`}
          />
        </div>

       
      {/* Component Highlights Section - NEW */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Featured Components
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glass Card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <SparklesIcon className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Glass Morphism</h3>
            <p className="text-gray-400">
              Modern frosted glass effects with smooth hover transitions
            </p>
            <Link 
              href="/components/glass" 
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              Learn more →
            </Link>
          </MotionDiv>

          {/* Spotlight Effect */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <CodeBracketIcon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Spotlight Effects</h3>
            <p className="text-gray-400">
              Interactive spotlight animations that follow cursor movement
            </p>
            <Link 
              href="/effects/spotlight" 
              className="inline-block mt-4 text-purple-400 hover:text-purple-300"
            >
              Learn more →
            </Link>
          </MotionDiv>

          {/* Alerts */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <CubeIcon className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alert Components</h3>
            <p className="text-gray-400">
              Beautiful alert messages with various states and animations
            </p>
            <Link 
              href="/components/alerts" 
              className="inline-block mt-4 text-green-400 hover:text-green-300"
            >
              Learn more →
            </Link>
          </MotionDiv>
        </div>
      </section>
 {/* Get Customized Components Section */}
 <div className="mt-20 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Need Custom Components?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get tailored UI components designed specifically for your project. Let's create something amazing together.
            </p>
            <a 
              href="mailto:hothead01th@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
            >
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full" />
          </MotionDiv>
        </div>
      </section>

      {/* Why Choose Artic-UI Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Why Choose Artic-UI?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Performance */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 mb-4">
              <BoltIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-gray-400">
              Zero dependencies, minimal bundle size, and optimized for speed
            </p>
          </MotionDiv>

          {/* Customizable */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 mb-4">
              <PaintBrushIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
            <p className="text-gray-400">
              Tailwind CSS powered with complete styling control
            </p>
          </MotionDiv>

          {/* Accessible */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-400 mb-4">
              <UserGroupIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessible</h3>
            <p className="text-gray-400">
              ARIA compliant and keyboard navigation friendly
            </p>
          </MotionDiv>

          {/* TypeScript */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-pink-500/10 text-pink-400 mb-4">
              <CodeBracketSquareIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">TypeScript Ready</h3>
            <p className="text-gray-400">
              Full type support for enhanced developer experience
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="container mx-auto px-4 py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Building Today
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Join developers worldwide who are creating beautiful interfaces with Artic-UI
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/docs/installation">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Get Started
                </button>
              </Link>
              <Link href="/components">
                <button className="px-6 py-3 bg-black/25 text-white rounded-lg font-medium hover:bg-black/40 transition-colors">
                  Browse Components
                </button>
              </Link>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 blur-3xl transform rotate-45" />
        </MotionDiv>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 py-16 relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Artic-UI
                </h3>
                <p className="text-gray-400 mt-2">
                  Beautiful, modern, and accessible React components for your Next.js applications
                </p>
              </div>
              <div className="flex gap-6">
                <a 
                  href="https://github.com" 
                  className="text-gray-400 hover:text-white transition-all hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  className="text-gray-400 hover:text-white transition-all hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/docs" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                    <span className="mr-2">→</span>
                    <span className="group-hover:underline">Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/components" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                    <span className="mr-2">→</span>
                    <span className="group-hover:underline">Components</span>
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                    <span className="mr-2">→</span>
                    <span className="group-hover:underline">Examples</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:hothead01th@gmail.com" 
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all group"
                >
                  <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="group-hover:underline">hothead01th@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
              <p className="text-gray-400 mb-6">
                Subscribe to get notified about new components and updates.
              </p>
              <a 
                href="mailto:hothead01th@gmail.com?subject=Subscribe%20to%20Updates"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:opacity-90 transition-all hover:scale-105 transform"
              >
                <span>Subscribe to Updates</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2024 Artic-UI. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}