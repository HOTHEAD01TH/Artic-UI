'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, UsersIcon } from '@heroicons/react/24/outline';

const statisticsVariants = [
  {
    title: 'Basic Statistics Card',
    description: 'A simple statistics card with title, value, and change indicator',
    preview: (
      <div className="bg-gray-800/50 rounded-xl p-6 w-full max-w-xs">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-400">Total Users</p>
            <h3 className="text-2xl font-bold mt-1">2,543</h3>
          </div>
          <div className="p-2 bg-green-500/10 rounded-lg">
            <UsersIcon className="w-6 h-6 text-green-500" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">12.5%</span>
          <span className="text-sm text-gray-400 ml-2">vs last month</span>
        </div>
      </div>
    ),
    code: `export function StatisticsCard() {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 w-full max-w-xs">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">Total Users</p>
          <h3 className="text-2xl font-bold mt-1">2,543</h3>
        </div>
        <div className="p-2 bg-green-500/10 rounded-lg">
          <UsersIcon className="w-6 h-6 text-green-500" />
        </div>
      </div>
      <div className="flex items-center mt-4">
        <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
        <span className="text-sm text-green-500">12.5%</span>
        <span className="text-sm text-gray-400 ml-2">vs last month</span>
      </div>
    </div>
  )
}`
  },
  {
    title: 'Grid Statistics',
    description: 'A grid of multiple statistics cards',
    preview: (
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {[
          { label: 'Total Revenue', value: '$45,231', change: '+20.1%', isPositive: true },
          { label: 'Active Users', value: '1,234', change: '-4.5%', isPositive: false },
          { label: 'Conversion Rate', value: '2.4%', change: '+4.1%', isPositive: true },
          { label: 'Avg. Order Value', value: '$55.32', change: '+12.3%', isPositive: true },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-800/50 rounded-xl p-4">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <h3 className="text-xl font-bold mt-1">{stat.value}</h3>
            <div className="flex items-center mt-2">
              {stat.isPositive ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `export function StatisticsGrid() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+20.1%', isPositive: true },
    { label: 'Active Users', value: '1,234', change: '-4.5%', isPositive: false },
    { label: 'Conversion Rate', value: '2.4%', change: '+4.1%', isPositive: true },
    { label: 'Avg. Order Value', value: '$55.32', change: '+12.3%', isPositive: true },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
      {stats.map((stat, i) => (
        <div key={i} className="bg-gray-800/50 rounded-xl p-4">
          <p className="text-sm text-gray-400">{stat.label}</p>
          <h3 className="text-xl font-bold mt-1">{stat.value}</h3>
          <div className="flex items-center mt-2">
            {stat.isPositive ? (
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={\`text-sm \${stat.isPositive ? 'text-green-500' : 'text-red-500'}\`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}`
  }
];

export default function StatisticsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Statistics Cards</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful statistics cards for displaying numerical data and metrics.
        </p>
      </div>

      <div className="space-y-12">
        {statisticsVariants.map((variant) => (
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