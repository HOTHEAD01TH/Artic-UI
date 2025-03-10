'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

const inputVariants = [
  {
    title: 'Gradient Input',
    description: 'A beautiful input field with gradient border effect',
    preview: (
      <div className="relative">
        <input
          type="text"
          placeholder="Type something..."
          className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-sm -z-10" />
      </div>
    ),
    code: `export function GradientInput({ placeholder = "Type something..." }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg 
          border border-transparent focus:border-blue-500 
          focus:ring-2 focus:ring-blue-500/20 
          transition-all duration-200 outline-none"
      />
      <div className="absolute inset-0 rounded-lg 
        bg-gradient-to-r from-blue-500 to-purple-500 
        opacity-20 blur-sm -z-10" 
      />
    </div>
  )
}`
  },
  {
    title: 'Floating Label Input',
    description: 'Input with animated floating label',
    preview: (
      <div className="relative">
        <input
          type="text"
          id="floating-input"
          className="peer w-full bg-gray-800/50 text-white px-4 pt-6 pb-2 rounded-lg border border-gray-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
          placeholder=" "
        />
        <label
          htmlFor="floating-input"
          className="absolute text-gray-400 duration-200 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 peer-focus:-translate-y-3"
        >
          Email
        </label>
      </div>
    ),
    code: `export function FloatingLabelInput({ placeholder = "Type something..." }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="peer w-full bg-gray-800/50 text-white px-4 pt-6 pb-2 rounded-lg border border-gray-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
        placeholder=" "
      />
      <label
        htmlFor="floating-input"
        className="absolute text-gray-400 duration-200 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        Email
      </label>
    </div>
  )
}`
  },
  {
    title: 'OTP Input',
    description: 'Input field for one-time passwords',
    preview: (
      <div className="flex gap-2">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="w-12 h-12 text-center bg-gray-800/50 text-white rounded-lg border border-gray-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
          />
        ))}
      </div>
    ),
    code: `export function OTPInput({ placeholder = "Type something..." }) {
  return (
    <div className="flex gap-2">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center bg-gray-800/50 text-white rounded-lg border border-gray-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
        />
      ))}
    </div>
  )
}`
  }
];

export default function InputsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Inputs</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful form input components with various styles and animations.
        </p>
      </div>

      <div className="space-y-12">
        {inputVariants.map((variant) => (
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