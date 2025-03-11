# Artic UI

A modern React component library with beautiful, accessible components powered by Tailwind CSS and Framer Motion.

## Installation

```bash
npm install artic-ui @heroicons/react tailwindcss framer-motion
```

## Dependencies

Artic UI requires the following peer dependencies:

- React 18 or later (including React 19)
- Tailwind CSS 3 or later (including v4)
- Framer Motion 10 or later
- Heroicons React 2 or later

## Setup

1. Add the following to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/artic-ui/**/*.{js,ts,jsx,tsx}' // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. Import and use components:

```jsx
import { Alert, Button } from 'artic-ui';

function App() {
  return (
    <div>
      <Alert 
        variant="success" 
        message="Successfully saved your changes!" 
      />
      
      <Button variant="gradient">
        Click me
      </Button>
    </div>
  );
}
```

## Components

### Alert

```jsx
<Alert 
  variant="success" // 'success' | 'warning' | 'error' | 'info'
  message="Your message here"
/>
```

### Button

```jsx
<Button 
  variant="default" // 'default' | 'secondary' | 'ghost' | 'gradient'
  size="md" // 'sm' | 'md' | 'lg' | 'icon'
>
  Button Text
</Button>
```

## Usage with Vite

Artic UI works seamlessly with Vite projects. Just install the package and its dependencies:

```bash
npm install artic-ui @heroicons/react tailwindcss framer-motion
```

Then configure Tailwind CSS in your Vite project according to the setup instructions above.

## License

MIT
