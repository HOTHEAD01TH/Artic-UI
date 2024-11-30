'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';

const tableVariants = [
  {
    title: 'Basic Table',
    description: 'A simple table with headers and rows',
    preview: (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800/50 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {[
              { name: 'Jane Cooper', title: 'Regional Paradigm Technician', status: 'Active' },
              { name: 'Cody Fisher', title: 'Product Directives Officer', status: 'Inactive' },
              { name: 'Esther Howard', title: 'Forward Response Developer', status: 'Active' },
            ].map((person, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {person.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {person.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {person.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    code: `export function BasicTable() {
  const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', status: 'Active' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', status: 'Inactive' },
    { name: 'Esther Howard', title: 'Forward Response Developer', status: 'Active' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800/50 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {people.map((person, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                {person.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {person.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {person.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`
  },
  {
    title: 'Striped Table',
    description: 'A table with alternating row colors for better readability',
    preview: (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800/50 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {[
              { name: 'Jane Cooper', title: 'Regional Paradigm Technician', status: 'Active' },
              { name: 'Cody Fisher', title: 'Product Directives Officer', status: 'Inactive' },
              { name: 'Esther Howard', title: 'Forward Response Developer', status: 'Active' },
            ].map((person, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {person.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {person.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {person.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    code: `export function StripedTable() {
  const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', status: 'Active' },
    { name: 'Cody Fisher', title: 'Product Directives Officer', status: 'Inactive' },
    { name: 'Esther Howard', title: 'Forward Response Developer', status: 'Active' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800/50 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {people.map((person, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                {person.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {person.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {person.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}`
  }
];

export default function TablesPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Tables</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful table components for displaying tabular data.
        </p>
      </div>

      <div className="space-y-12">
        {tableVariants.map((variant) => (
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