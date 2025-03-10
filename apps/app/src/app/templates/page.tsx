'use client';

import { MotionDiv } from '@/components/motion/MotionDiv';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface Template {
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
  upcoming?: boolean;
}

export default function Templates() {
  const templates = [
    {
      title: "Dashboard",
      description: "Modern admin dashboard with analytics, charts, and data tables",
      image: "/dashboard.png",
      href: "/templates/dashboard",
      tag: "Popular"
    },
    {
      title: "Landing Page",
      description: "Professional landing page with hero section and feature highlights",
      image: "/landing.png",
      href: "/templates/landing",
      tag: "New"
    },
    {
      title: "E-commerce",
      description: "Complete e-commerce solution with product listings and cart",
      image: "/ecommerce.png",
      href: "/templates/ecommerce",
      tag: "Featured"
    },
    // All upcoming templates use the same locked placeholder image
    {
      title: "Blog Platform",
      description: "Modern blog platform with rich text editor and comment system",
      image: "/soon.jpg", // Lock and key image
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "Social Network",
      description: "Connect and share with a beautiful social media interface",
        image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "Portfolio",
      description: "Showcase your work with this elegant portfolio template",
      image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "SaaS Platform",
      description: "Complete SaaS solution with authentication and billing",
      image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "Documentation",
      description: "Beautiful documentation site with search and versioning",
      image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "Event Management",
      description: "Manage events with ease using our comprehensive event management template",
      image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "Online Learning",
      description: "Create and manage courses with our online learning platform template",
      image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    },
    {
      title: "Real Estate",
      description: "Showcase properties with our modern real estate template",
      image: "/soon.jpg",
      href: "#",
      tag: "Coming Soon",
      upcoming: true
    }
  ];

  const handleDownload = (template: Template) => {
    // Create template info content
    const templateContent = `
# ${template.title} Template Documentation

## Overview
${template.description}

## Installation
1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

## Required Dependencies
- Next.js 13+
- TailwindCSS
- Framer Motion
- Hero Icons

## File Structure
/app
  /templates
    /${template.title.toLowerCase().replace(/\s+/g, '-')}
      /page.tsx
      /layout.tsx
      /components/
        
## Configuration
1. TailwindCSS Config:
\`\`\`javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom configurations
    }
  },
  plugins: []
}
\`\`\`

## Component Code
\`\`\`typescript
// Main component code will be here
export default function ${template.title.replace(/\s+/g, '')}Template() {
  // Component implementation
}
\`\`\`

## Styling
All styling is done using TailwindCSS utility classes.

## Additional Resources
- Documentation: https://docs.arctic-ui.com
- Support: hothead01th@gmail.com
- GitHub: https://github.com/hothead01th

## License
MIT License - Feel free to use in personal and commercial projects.
    `;

    // Create blob and download
    const blob = new Blob([templateContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.title.toLowerCase().replace(/\s+/g, '-')}-template-docs.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Ready-to-Use Templates
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Beautiful, responsive templates built with Artic-UI components. Just copy, paste, and customize.
          </p>
        </MotionDiv>
      </header>

      {/* Templates Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <MotionDiv
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                {/* Template Preview Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 group-hover:opacity-75 transition-opacity" />
                  {template.upcoming && (
                    <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center">
                      <p className="text-lg font-medium text-gray-400">Coming Soon</p>
                    </div>
                  )}
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {template.title}
                    </h3>
                    {template.tag && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        template.tag === 'Coming Soon' 
                          ? 'bg-gray-500/20 text-gray-400'
                          : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {template.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4">
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between relative z-20">
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      {!template.upcoming && (
                        <Link href={template.href} className="flex items-center">
                          <span>View Template</span>
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      )}
                      {template.upcoming && <span>Coming Soon</span>}
                    </div>
                    {!template.upcoming && (
                      <button
                        onClick={() => handleDownload(template)}
                        className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors relative z-30"
                        title="Download Template Documentation"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Template?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We can help you build a custom template tailored to your specific needs.
          </p>
          <Link 
            href="mailto:hothead01th@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:opacity-90 transition-all"
          >
            <span>Get in Touch</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </MotionDiv>
      </section>
    </div>
  );
} 