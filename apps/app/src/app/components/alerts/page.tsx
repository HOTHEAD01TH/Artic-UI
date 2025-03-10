'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const alertVariants = [
  {
    title: 'Basic Alerts',
    description: 'Simple alert messages with different states',
    preview: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 text-green-400 bg-green-500/10 rounded-lg">
          <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
          <p>Successfully saved your changes!</p>
        </div>

        <div className="flex items-center gap-3 p-4 text-yellow-400 bg-yellow-500/10 rounded-lg">
          <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
          <p>Please review your information before continuing.</p>
        </div>

        <div className="flex items-center gap-3 p-4 text-red-400 bg-red-500/10 rounded-lg">
          <XCircleIcon className="w-5 h-5 flex-shrink-0" />
          <p>There was an error processing your request.</p>
        </div>

        <div className="flex items-center gap-3 p-4 text-blue-400 bg-blue-500/10 rounded-lg">
          <InformationCircleIcon className="w-5 h-5 flex-shrink-0" />
          <p>Update available: Please refresh your browser.</p>
        </div>
      </div>
    ),
    code: `export function BasicAlerts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-4 text-green-400 bg-green-500/10 rounded-lg">
        <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
        <p>Successfully saved your changes!</p>
      </div>

      <div className="flex items-center gap-3 p-4 text-yellow-400 bg-yellow-500/10 rounded-lg">
        <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
        <p>Please review your information before continuing.</p>
      </div>

      <div className="flex items-center gap-3 p-4 text-red-400 bg-red-500/10 rounded-lg">
        <XCircleIcon className="w-5 h-5 flex-shrink-0" />
        <p>There was an error processing your request.</p>
      </div>

      <div className="flex items-center gap-3 p-4 text-blue-400 bg-blue-500/10 rounded-lg">
        <InformationCircleIcon className="w-5 h-5 flex-shrink-0" />
        <p>Update available: Please refresh your browser.</p>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Dismissible Alerts',
    description: 'Alerts with close buttons and animations',
    preview: (() => {
      function DismissibleAlert() {
        const [alerts, setAlerts] = useState([
          { id: 1, type: 'success', message: 'Your profile has been updated!' },
          { id: 2, type: 'error', message: 'Failed to load some resources.' },
        ]);

        const removeAlert = (id: number) => {
          setAlerts(alerts.filter(alert => alert.id !== id));
        };

        return (
          <div className="space-y-4">
            {alerts.map(alert => (
              <div
                key={alert.id}
                className={`flex items-center justify-between p-4 rounded-lg
                  ${alert.type === 'success' 
                    ? 'text-green-400 bg-green-500/10' 
                    : 'text-red-400 bg-red-500/10'
                  }`}
              >
                <div className="flex items-center gap-3">
                  {alert.type === 'success' 
                    ? <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    : <XCircleIcon className="w-5 h-5 flex-shrink-0" />
                  }
                  <p>{alert.message}</p>
                </div>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        );
      }
      return <DismissibleAlert />;
    })(),
    code: `export function DismissibleAlert() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'success', message: 'Your profile has been updated!' },
    { id: 2, type: 'error', message: 'Failed to load some resources.' },
  ]);

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="space-y-4">
      {alerts.map(alert => (
        <div
          key={alert.id}
          className={\`flex items-center justify-between p-4 rounded-lg
            \${alert.type === 'success' 
              ? 'text-green-400 bg-green-500/10' 
              : 'text-red-400 bg-red-500/10'
            }\`}
        >
          <div className="flex items-center gap-3">
            {alert.type === 'success' 
              ? <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
              : <XCircleIcon className="w-5 h-5 flex-shrink-0" />
            }
            <p>{alert.message}</p>
          </div>
          <button
            onClick={() => removeAlert(alert.id)}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}`
  }
];

export default function AlertsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Alerts</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful alert components for displaying status messages and notifications.
        </p>
      </div>

      <div className="space-y-12">
        {alertVariants.map((variant) => (
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