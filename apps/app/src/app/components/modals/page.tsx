'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { BasicModal, SlideModal, ScaleModal } from '@/components/ui/modals';

const modalVariants = [
  {
    id: 'basic-modal',
    title: 'Basic Modal',
    description: 'Simple modal with fade animation',
    preview: <BasicModal />,
    code: `export function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)} 
          />
          <div className="relative bg-gray-900 rounded-lg p-6 max-w-md w-full m-4">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-300 mb-4">
              This is a basic modal with a simple fade animation.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}`
  },
  {
    id: 'slide-modal',
    title: 'Slide Modal',
    description: 'Modal with slide-in animation',
    preview: <SlideModal />,
    code: `export function SlideModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Open Slide Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-gray-900 rounded-t-xl p-6"
            >
              <div className="mx-auto max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">Slide Modal</h2>
                <p className="text-gray-300 mb-4">
                  This modal slides up from the bottom of the screen.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}`
  },
  {
    id: 'scale-modal',
    title: 'Scale Modal',
    description: 'Modal with scale animation',
    preview: <ScaleModal />,
    code: `export function ScaleModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Open Scale Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gray-900 rounded-lg p-6 max-w-md w-full m-4"
              >
                <h2 className="text-xl font-semibold mb-4">Scale Modal</h2>
                <p className="text-gray-300 mb-4">
                  This modal scales in and out with a smooth animation.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}`
  }
];

export default function ModalsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Modals</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful modal components with various animations and transitions.
        </p>
      </div>

      <div className="space-y-12">
        {modalVariants.map((variant) => (
          <div key={variant.id}>
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