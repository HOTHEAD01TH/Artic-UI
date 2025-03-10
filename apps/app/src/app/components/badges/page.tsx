'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

const badgeVariants = [
  {
    title: 'Basic Badges',
    description: 'Simple badge components in different colors',
    preview: (
      <div className="flex flex-wrap gap-4">
        {/* Default */}
        <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
          Default
        </span>

        {/* Primary */}
        <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full">
          Primary
        </span>

        {/* Success */}
        <span className="px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
          Success
        </span>

        {/* Warning */}
        <span className="px-2.5 py-0.5 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
          Warning
        </span>

        {/* Danger */}
        <span className="px-2.5 py-0.5 text-xs font-medium bg-red-500/10 text-red-500 rounded-full">
          Danger
        </span>
      </div>
    ),
    code: `export function BasicBadges() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Default */}
      <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
        Default
      </span>

      {/* Primary */}
      <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full">
        Primary
      </span>

      {/* Success */}
      <span className="px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
        Success
      </span>

      {/* Warning */}
      <span className="px-2.5 py-0.5 text-xs font-medium bg-yellow-500/10 text-yellow-500 rounded-full">
        Warning
      </span>

      {/* Danger */}
      <span className="px-2.5 py-0.5 text-xs font-medium bg-red-500/10 text-red-500 rounded-full">
        Danger
      </span>
    </div>
  );
}`
  },
  {
    title: 'Badges with Icon',
    description: 'Badges with icons and different styles',
    preview: (
      <div className="flex flex-wrap gap-4">
        {/* Online */}
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          Online
        </span>

        {/* Offline */}
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
          Offline
        </span>

        {/* New */}
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New
        </span>
      </div>
    ),
    code: `export function BadgesWithIcon() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Online */}
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-500 rounded-full">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        Online
      </span>

      {/* Offline */}
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
        Offline
      </span>

      {/* New */}
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        New
      </span>
    </div>
  );
}`
  },
  {
    title: 'Notification Badges',
    description: 'Badges for notifications and counters',
    preview: (
      <div className="flex items-center gap-8">
        {/* Button with notification */}
        <button className="relative p-2 text-gray-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Avatar with badge */}
        <div className="relative">
          <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
          <span className="absolute -top-1 -right-1 px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">
            3
          </span>
        </div>

        {/* Message counter */}
        <div className="relative p-2">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full">
            12
          </span>
        </div>
      </div>
    ),
    code: `export function NotificationBadges() {
  return (
    <div className="flex items-center gap-8">
      {/* Button with notification */}
      <button className="relative p-2 text-gray-400 hover:text-white">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Avatar with badge */}
      <div className="relative">
        <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
        <span className="absolute -top-1 -right-1 px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">
          3
        </span>
      </div>

      {/* Message counter */}
      <div className="relative p-2">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-medium bg-blue-500 text-white rounded-full">
          12
        </span>
      </div>
    </div>
  );
}`
  }
];

export default function BadgesPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Badges</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful badge components for labels, counters, and status indicators.
        </p>
      </div>

      <div className="space-y-12">
        {badgeVariants.map((variant) => (
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