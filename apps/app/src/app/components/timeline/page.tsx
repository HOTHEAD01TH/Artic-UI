'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const timelineVariants = [
  {
    title: 'Basic Timeline',
    description: 'A simple vertical timeline with dots and lines',
    preview: (
      <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-700">
        {[
          { title: 'Order Placed', time: '9:30 AM', description: 'Order #2543 was placed' },
          { title: 'Order Confirmed', time: '10:00 AM', description: 'Payment was confirmed' },
          { title: 'Order Shipped', time: '2:30 PM', description: 'Package has been shipped' },
        ].map((event, i) => (
          <div key={i} className="relative">
            <div className="absolute left-[-1.625rem] w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900" />
            <div>
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <time className="text-sm text-gray-400">{event.time}</time>
              <p className="mt-1 text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `export function BasicTimeline() {
  const events = [
    { title: 'Order Placed', time: '9:30 AM', description: 'Order #2543 was placed' },
    { title: 'Order Confirmed', time: '10:00 AM', description: 'Payment was confirmed' },
    { title: 'Order Shipped', time: '2:30 PM', description: 'Package has been shipped' },
  ]

  return (
    <div className="relative pl-8 space-y-8 
      before:absolute before:left-4 before:top-2 
      before:bottom-0 before:w-0.5 before:bg-gray-700"
    >
      {events.map((event, i) => (
        <div key={i} className="relative">
          <div className="absolute left-[-1.625rem] w-4 h-4 
            rounded-full bg-blue-500 border-4 border-gray-900" 
          />
          <div>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <time className="text-sm text-gray-400">{event.time}</time>
            <p className="mt-1 text-gray-300">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`
  },
  {
    title: 'Status Timeline',
    description: 'Timeline with status indicators and icons',
    preview: (
      <div className="space-y-8">
        {[
          { title: 'Task Completed', time: '2 hours ago', status: 'success', description: 'Successfully deployed to production' },
          { title: 'Build Failed', time: '5 hours ago', status: 'error', description: 'Build failed due to test errors' },
          { title: 'Code Review', time: '1 day ago', status: 'success', description: 'Pull request approved by team' },
        ].map((event, i) => (
          <div key={i} className="flex gap-4">
            {event.status === 'success' ? (
              <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
            ) : (
              <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{event.title}</h3>
                <span className="text-sm text-gray-400">•</span>
                <time className="text-sm text-gray-400">{event.time}</time>
              </div>
              <p className="mt-1 text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `export function StatusTimeline() {
  const events = [
    { 
      title: 'Task Completed', 
      time: '2 hours ago', 
      status: 'success', 
      description: 'Successfully deployed to production' 
    },
    { 
      title: 'Build Failed', 
      time: '5 hours ago', 
      status: 'error', 
      description: 'Build failed due to test errors' 
    },
    { 
      title: 'Code Review', 
      time: '1 day ago', 
      status: 'success', 
      description: 'Pull request approved by team' 
    },
  ]

  return (
    <div className="space-y-8">
      {events.map((event, i) => (
        <div key={i} className="flex gap-4">
          {event.status === 'success' ? (
            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
          ) : (
            <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
          )}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{event.title}</h3>
              <span className="text-sm text-gray-400">•</span>
              <time className="text-sm text-gray-400">{event.time}</time>
            </div>
            <p className="mt-1 text-gray-300">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`
  }
];

export default function TimelinePage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Timeline</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful timeline components for displaying chronological data and events.
        </p>
      </div>

      <div className="space-y-12">
        {timelineVariants.map((variant) => (
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