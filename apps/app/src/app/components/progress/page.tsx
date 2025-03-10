'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState, useEffect } from 'react';

const progressVariants = [
  {
    title: 'Basic Progress',
    description: 'Simple progress bar with different states',
    preview: (() => {
      function BasicProgress() {
        const [progress, setProgress] = useState(0);
        
        useEffect(() => {
          const timer = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress >= 100) {
                clearInterval(timer);
                return 100;
              }
              return oldProgress + 1;
            });
          }, 100);
          
          return () => clearInterval(timer);
        }, []);

        return (
          <div className="space-y-6 w-full max-w-md">
            {/* Default */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Default (Animated)</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Success */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Success</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full w-[75%]"></div>
              </div>
            </div>

            {/* Warning */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Warning</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
              </div>
            </div>

            {/* Error */}
            <div>
              <p className="text-sm text-gray-400 mb-2">Error</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full w-[30%]"></div>
              </div>
            </div>
          </div>
        );
      }
      return <BasicProgress />;
    })(),
    code: `import { useState, useEffect } from 'react';

export function BasicProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 w-full max-w-md">
      {/* Default */}
      <div>
        <p className="text-sm text-gray-400 mb-2">Default (Animated)</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: \`\${progress}%\` }}
          ></div>
        </div>
      </div>

      {/* Success */}
      <div>
        <p className="text-sm text-gray-400 mb-2">Success</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full w-[75%]"></div>
        </div>
      </div>

      {/* Warning */}
      <div>
        <p className="text-sm text-gray-400 mb-2">Warning</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
        </div>
      </div>

      {/* Error */}
      <div>
        <p className="text-sm text-gray-400 mb-2">Error</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-red-500 h-2.5 rounded-full w-[30%]"></div>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Progress with Label',
    description: 'Progress bar with percentage label and animation',
    preview: (() => {
      function LabeledProgress() {
        const [uploadProgress, setUploadProgress] = useState(0);
        const [downloadProgress, setDownloadProgress] = useState(0);

        useEffect(() => {
          const uploadTimer = setInterval(() => {
            setUploadProgress((old) => Math.min(old + 2, 100));
          }, 200);

          const downloadTimer = setInterval(() => {
            setDownloadProgress((old) => Math.min(old + 1, 100));
          }, 150);

          return () => {
            clearInterval(uploadTimer);
            clearInterval(downloadTimer);
          };
        }, []);

        return (
          <div className="space-y-6 w-full max-w-md">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Uploading files...</span>
                <span className="text-sm font-medium text-gray-300">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">Downloading...</span>
                <span className="text-sm font-medium text-gray-300">{downloadProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      }
      return <LabeledProgress />;
    })(),
    code: `export function LabeledProgress() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const uploadTimer = setInterval(() => {
      setUploadProgress((old) => Math.min(old + 2, 100));
    }, 200);

    const downloadTimer = setInterval(() => {
      setDownloadProgress((old) => Math.min(old + 1, 100));
    }, 150);

    return () => {
      clearInterval(uploadTimer);
      clearInterval(downloadTimer);
    };
  }, []);

  return (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">Uploading files...</span>
          <span className="text-sm font-medium text-gray-300">{uploadProgress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: \`\${uploadProgress}%\` }}
          ></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">Downloading...</span>
          <span className="text-sm font-medium text-gray-300">{downloadProgress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: \`\${downloadProgress}%\` }}
          ></div>
        </div>
      </div>
    </div>
  );
}`
  }
];

export default function ProgressPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Progress</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful progress indicators to show loading states and completion percentages.
        </p>
      </div>

      <div className="space-y-12">
        {progressVariants.map((variant) => (
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