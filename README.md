# Artic UI - Modern React Component Library

A beautiful, accessible React component library built with Tailwind CSS and Framer Motion, organized as a Turborepo monorepo.

## 🌟 Features

- **Modern Stack**: Built with React, TypeScript, Tailwind CSS, and Framer Motion
- **Beautiful Components**: Pre-built components with smooth animations and modern design
- **Accessible**: Built with accessibility in mind
- **Documentation**: Comprehensive documentation with live examples
- **Monorepo Structure**: Organized using Turborepo for optimal development experience
<!-- GitAds-Verify: YZEHHYKTUBVL38CJ3SU6WP8Y6YAU9AO4 -->
## 📦 Repository Structure

```
artic-ui/
├── apps/
│   └── app/          # Documentation site & examples
├── packages/
│   └── ui/           # Core UI component library
└── turbo.json        # Turborepo configuration
```

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/artic-ui.git

# Install dependencies
npm install

# Start development
npm run dev
```

### Using the UI Package

```bash
npm install artic-ui @heroicons/react tailwindcss framer-motion
```

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/artic-ui/**/*.{js,ts,jsx,tsx}'
  ],
  // ... rest of your config
}
```

## 📚 Documentation

The documentation site is built using Next.js and includes:

- Component examples
- API documentation
- Interactive playgrounds
- Installation guides
- Effect demonstrations

Visit the documentation at: [http://localhost:3000](http://localhost:3000) when running locally

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm
- Git

### Commands

```bash
# Start development
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## 📦 Package Details

### UI Package (packages/ui)

The core UI library includes:

- Buttons
- Alerts
- Forms
- Cards
- Modals
- Navigation components
- And more...

### Documentation Site (apps/app)

Features:

- Interactive component demos
- Live code editing
- Copy-paste ready examples
- Comprehensive API documentation

## 🔄 Turborepo Configuration

The project uses Turborepo for efficient build caching and task running:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

## 📄 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📦 NPM Package Usage

```jsx
import { Button, Alert } from 'artic-ui'

function App() {
  return (
    <div>
      <Button variant="gradient">Click Me</Button>
      <Alert
        variant="success"
        message="Operation successful!"
      />
    </div>
  )
}
```

## 🔗 Dependencies

- React 18+
- Tailwind CSS 3+
- Framer Motion 10+
- Heroicons 2+
- TypeScript 5+

## 🏰️ Project Structure

```
artic-ui/
├── apps/
│   └── app/
│       ├── src/
│       │   ├── components/    # Documentation components
│       │   ├── app/          # Next.js pages
│       │   └── styles/       # Global styles
├── packages/
│   └── ui/
│       ├── src/
│       │   ├── components/    # UI components
│       │   └── lib/          # Utilities
│       └── dist/             # Built package
```

For more detailed documentation, visit the documentation site or refer to the README files in individual packages.

## 🚀 Quick Start

```bash
npm install artic-ui @heroicons/react tailwindcss framer-motion
```

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/artic-ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🤝 Contributing

We welcome contributions to Artic-UI! Whether you want to:

- Add new components
- Improve existing ones
- Fix bugs
- Enhance documentation

### How to Contribute

1. Fork the repository: [github.com/hothead01th/artic-ui](https://github.com/hothead01th/artic-ui)
2. Create your feature branch: `git checkout -b feature/amazing-component`
3. Install dependencies: `npm install`
4. Make your changes
5. Test your changes: `npm test`
6. Commit your changes: `git commit -m 'Add amazing component'`
7. Push to the branch: `git push origin feature/amazing-component`
8. Submit a Pull Request

## 📦 NPM Package

Current version: v0.0.6
Package: [artic-ui on npm](https://www.npmjs.com/package/artic-ui)

```jsx
import { Button, Alert } from 'artic-ui'

function App() {
  return (
    <div>
      <Button variant="gradient">Click Me</Button>
      <Alert variant="success">Operation successful!</Alert>
    </div>
  )
}
```

For more examples and documentation, visit our [documentation site](https://artic-ui.vercel.app).

⚠️ This library is currently in beta. Only a subset of components is available on npm. However, you can still use other components by copying their code directly from our documentation. We're actively working on publishing all components.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


