'use client';

import { ButtonPreview } from '@/components/code-preview/ButtonPreview';
import Image from 'next/image';

const avatarVariants = [
  {
    title: 'Basic Avatars',
    description: 'Simple avatar components in different sizes',
    preview: (
      <div className="flex items-center gap-4">
        {/* Small */}
        <div className="relative w-8 h-8">
          <Image
            src="https://i.pravatar.cc/150?img=1"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>

        {/* Medium */}
        <div className="relative w-12 h-12">
          <Image
            src="https://i.pravatar.cc/150?img=2"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>

        {/* Large */}
        <div className="relative w-16 h-16">
          <Image
            src="https://i.pravatar.cc/150?img=3"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
      </div>
    ),
    code: `import Image from 'next/image';

export function BasicAvatars() {
  return (
    <div className="flex items-center gap-4">
      {/* Small */}
      <div className="relative w-8 h-8">
        <Image
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
          className="rounded-full object-cover"
          fill
        />
      </div>

      {/* Medium */}
      <div className="relative w-12 h-12">
        <Image
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
          className="rounded-full object-cover"
          fill
        />
      </div>

      {/* Large */}
      <div className="relative w-16 h-16">
        <Image
          src="https://i.pravatar.cc/150?img=3"
          alt="Avatar"
          className="rounded-full object-cover"
          fill
        />
      </div>
    </div>
  );
}`
  },
  {
    title: 'Avatar with Status',
    description: 'Avatars with online/offline status indicators',
    preview: (
      <div className="flex items-center gap-4">
        {/* Online */}
        <div className="relative">
          <div className="relative w-12 h-12">
            <Image
              src="https://i.pravatar.cc/150?img=4"
              alt="Avatar"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
        </div>

        {/* Offline */}
        <div className="relative">
          <div className="relative w-12 h-12">
            <Image
              src="https://i.pravatar.cc/150?img=5"
              alt="Avatar"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 border-2 border-gray-900 rounded-full"></span>
        </div>

        {/* Away */}
        <div className="relative">
          <div className="relative w-12 h-12">
            <Image
              src="https://i.pravatar.cc/150?img=6"
              alt="Avatar"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-gray-900 rounded-full"></span>
        </div>
      </div>
    ),
    code: `export function AvatarWithStatus() {
  return (
    <div className="flex items-center gap-4">
      {/* Online */}
      <div className="relative">
        <div className="relative w-12 h-12">
          <Image
            src="https://i.pravatar.cc/150?img=4"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></span>
      </div>

      {/* Offline */}
      <div className="relative">
        <div className="relative w-12 h-12">
          <Image
            src="https://i.pravatar.cc/150?img=5"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 border-2 border-gray-900 rounded-full"></span>
      </div>

      {/* Away */}
      <div className="relative">
        <div className="relative w-12 h-12">
          <Image
            src="https://i.pravatar.cc/150?img=6"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-gray-900 rounded-full"></span>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Avatar Group',
    description: 'Grouped avatars with overlap effect',
    preview: (
      <div className="flex items-center -space-x-4">
        <div className="relative w-12 h-12 border-2 border-gray-900 rounded-full">
          <Image
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <div className="relative w-12 h-12 border-2 border-gray-900 rounded-full">
          <Image
            src="https://i.pravatar.cc/150?img=8"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <div className="relative w-12 h-12 border-2 border-gray-900 rounded-full">
          <Image
            src="https://i.pravatar.cc/150?img=9"
            alt="Avatar"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <div className="relative w-12 h-12 flex items-center justify-center text-sm font-medium bg-gray-800 border-2 border-gray-900 rounded-full">
          +3
        </div>
      </div>
    ),
    code: `export function AvatarGroup() {
  return (
    <div className="flex items-center -space-x-4">
      <div className="relative w-12 h-12 border-2 border-gray-900 rounded-full">
        <Image
          src="https://i.pravatar.cc/150?img=7"
          alt="Avatar"
          className="rounded-full object-cover"
          fill
        />
      </div>
      <div className="relative w-12 h-12 border-2 border-gray-900 rounded-full">
        <Image
          src="https://i.pravatar.cc/150?img=8"
          alt="Avatar"
          className="rounded-full object-cover"
          fill
        />
      </div>
      <div className="relative w-12 h-12 border-2 border-gray-900 rounded-full">
        <Image
          src="https://i.pravatar.cc/150?img=9"
          alt="Avatar"
          className="rounded-full object-cover"
          fill
        />
      </div>
      <div className="relative w-12 h-12 flex items-center justify-center text-sm font-medium bg-gray-800 border-2 border-gray-900 rounded-full">
        +3
      </div>
    </div>
  );
}`
  }
];

export default function AvatarsPage() {
  return (
    <div className="w-full max-w-[1000px] px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Avatars</h1>
        <p className="text-gray-400 text-lg mb-8">
          Beautiful avatar components for user profiles and groups.
        </p>
      </div>

      <div className="space-y-12">
        {avatarVariants.map((variant) => (
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