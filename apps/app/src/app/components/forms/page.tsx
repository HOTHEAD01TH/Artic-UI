'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import { useState } from 'react';

const formVariants = [
  {
    title: 'Basic Form Elements',
    description: 'Common form inputs with different states',
    preview: (() => {
      function BasicFormElements() {
        return (
          <form className="w-full max-w-md space-y-6">
            {/* Text Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            {/* Select */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1.5">
                Country
              </label>
              <select
                id="country"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
            </div>

            {/* Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 border-gray-700 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                I agree to the terms and conditions
              </label>
            </div>
          </form>
        );
      }
      return <BasicFormElements />;
    })(),
    code: `export function BasicFormElements() {
  return (
    <form className="w-full max-w-md space-y-6">
      {/* Text Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      {/* Select */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1.5">
          Country
        </label>
        <select
          id="country"
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      {/* Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your message"
        ></textarea>
      </div>

      {/* Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 border-gray-700 rounded 
            focus:ring-blue-500 focus:ring-offset-gray-900"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
          I agree to the terms and conditions
        </label>
      </div>
    </form>
  );
}`
  },
  {
    title: 'Form Validation States',
    description: 'Form inputs with success and error states',
    preview: (() => {
      function ValidationStates() {
        return (
          <form className="w-full max-w-md space-y-6">
            {/* Success State */}
            <div>
              <label htmlFor="email-success" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email (Success)
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email-success"
                  className="w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value="valid@example.com"
                  readOnly
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-sm text-green-500">Email is valid!</p>
            </div>

            {/* Error State */}
            <div>
              <label htmlFor="email-error" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email (Error)
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email-error"
                  className="w-full px-3 py-2 bg-gray-800 border border-red-500 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value="invalid@email"
                  readOnly
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-sm text-red-500">Please enter a valid email address.</p>
            </div>
          </form>
        );
      }
      return <ValidationStates />;
    })(),
    code: `export function ValidationStates() {
  return (
    <form className="w-full max-w-md space-y-6">
      {/* Success State */}
      <div>
        <label htmlFor="email-success" className="block text-sm font-medium text-gray-300 mb-1.5">
          Email (Success)
        </label>
        <div className="relative">
          <input
            type="email"
            id="email-success"
            className="w-full px-3 py-2 bg-gray-800 border border-green-500 rounded-lg pr-10 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value="valid@example.com"
            readOnly
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <p className="mt-1 text-sm text-green-500">Email is valid!</p>
      </div>

      {/* Error State */}
      <div>
        <label htmlFor="email-error" className="block text-sm font-medium text-gray-300 mb-1.5">
          Email (Error)
        </label>
        <div className="relative">
          <input
            type="email"
            id="email-error"
            className="w-full px-3 py-2 bg-gray-800 border border-red-500 rounded-lg pr-10 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value="invalid@email"
            readOnly
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <p className="mt-1 text-sm text-red-500">Please enter a valid email address.</p>
      </div>
    </form>
  );
}`
  },
  {
    title: 'Search Input',
    description: 'Search input with icon and loading state',
    preview: (() => {
      function SearchInput() {
        const [isLoading, setIsLoading] = useState(false);

        return (
          <div className="w-full max-w-md space-y-6">
            {/* Basic Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search..."
              />
            </div>

            {/* Loading Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="animate-spin h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <input
                type="search"
                className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Searching..."
              />
            </div>
          </div>
        );
      }
      return <SearchInput />;
    })(),
    code: `import { useState } from 'react';

export function SearchInput() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full max-w-md space-y-6">
      {/* Basic Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
      </div>

      {/* Loading Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="animate-spin h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
        </div>
        <input
          type="search"
          className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Searching..."
        />
      </div>
    </div>
  );
}`
  }
];

export default function FormsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Forms</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful form components with different states and variations.
        </p>
      </div>

      <div className="space-y-12">
        {formVariants.map((variant) => (
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