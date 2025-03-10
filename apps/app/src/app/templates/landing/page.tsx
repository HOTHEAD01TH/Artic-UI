'use client';

import { MotionDiv, MotionButton } from '@/components/motion/MotionDiv';
import { SparklesIcon, ShieldCheckIcon, BoltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LandingTemplate() {
  const features = [
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Beautiful Design",
      description: "Carefully crafted interfaces that look great out of the box"
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "Secure by Default",
      description: "Enterprise-grade security built into every feature"
    },
    {
      icon: <BoltIcon className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for performance and blazing-fast load times"
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "Developer First",
      description: "Built with modern tools and best practices in mind"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section - New Design */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-left"
            >
              <h1 className="text-6xl font-bold mb-6">
                Transform Your 
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                Create stunning websites that captivate your audience with our modern design system.
              </p>
              <div className="flex gap-4">
                <MotionButton
                  whileHover={{ scale: 1.05 }}
                  className="relative px-8 py-4 rounded-lg font-medium text-lg group overflow-hidden"
                >
                  {/* Frost effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-white/20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_60%)]" />
                  <span className="relative z-10">Start Free Trial</span>
                </MotionButton>
                <MotionButton
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-gray-800/50 rounded-lg font-medium text-lg backdrop-blur-sm"
                >
                  Watch Demo
                </MotionButton>
              </div>
            </MotionDiv>

            {/* Right Content - 3D Preview */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <div className="relative aspect-square max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 rounded-2xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 rounded-2xl transform -rotate-6" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&q=80"
                    alt="Dashboard Preview"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400">
              Everything you need to build modern applications, all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm group hover:bg-gray-800/60 transition-colors"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of developers building amazing applications with our platform.
            </p>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-lg"
            >
              Start Building Now
            </MotionButton>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
} 