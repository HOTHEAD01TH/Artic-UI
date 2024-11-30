'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState } from 'react';

const tabsVariants = [
  {
    title: 'Basic Tabs',
    description: 'Simple tabs with underline indicator',
    preview: (() => {
      function BasicTabs() {
        const [activeTab, setActiveTab] = useState(0);
        const tabs = ['Account', 'Password', 'Settings'];
        
        return (
          <div className="w-full max-w-2xl">
            <div className="flex space-x-4 border-b border-gray-700">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative
                    ${activeTab === index ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {tab}
                  {activeTab === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4">
              {activeTab === 0 && <div>Account settings content</div>}
              {activeTab === 1 && <div>Password settings content</div>}
              {activeTab === 2 && <div>General settings content</div>}
            </div>
          </div>
        );
      }
      return <BasicTabs />;
    })(),
    code: `export function BasicTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Account', 'Password', 'Settings'];
  
  return (
    <div className="w-full max-w-2xl">
      <div className="flex space-x-4 border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={\`px-4 py-2 text-sm font-medium transition-colors relative
              \${activeTab === index ? 'text-white' : 'text-gray-400 hover:text-white'}
            \`}
          >
            {tab}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 0 && <div>Account settings content</div>}
        {activeTab === 1 && <div>Password settings content</div>}
        {activeTab === 2 && <div>General settings content</div>}
      </div>
    </div>
  );
}`
  },
  {
    title: 'Pills Tabs',
    description: 'Tabs with pill-style background',
    preview: (() => {
      function PillsTabs() {
        const [activeTab, setActiveTab] = useState(0);
        const tabs = ['Overview', 'Analytics', 'Reports'];
        
        return (
          <div className="w-full max-w-2xl">
            <div className="flex space-x-2 p-1 bg-gray-800/50 rounded-lg">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                    ${activeTab === index 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-4">
              {activeTab === 0 && <div>Overview content</div>}
              {activeTab === 1 && <div>Analytics content</div>}
              {activeTab === 2 && <div>Reports content</div>}
            </div>
          </div>
        );
      }
      return <PillsTabs />;
    })(),
    code: `export function PillsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Overview', 'Analytics', 'Reports'];
  
  return (
    <div className="w-full max-w-2xl">
      <div className="flex space-x-2 p-1 bg-gray-800/50 rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={\`px-4 py-2 text-sm font-medium rounded-md transition-colors
              \${activeTab === index 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }\`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 0 && <div>Overview content</div>}
        {activeTab === 1 && <div>Analytics content</div>}
        {activeTab === 2 && <div>Reports content</div>}
      </div>
    </div>
  );
}`
  }
];

export default function TabsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Tabs</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful tab components for organizing content into different sections.
        </p>
      </div>

      <div className="space-y-12">
        {tabsVariants.map((variant) => (
          <div key={variant.title}>
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