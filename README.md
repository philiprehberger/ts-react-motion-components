# @philiprehberger/react-motion-components

[![CI](https://github.com/philiprehberger/react-motion-components/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/react-motion-components/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/react-motion-components.svg)](https://www.npmjs.com/package/@philiprehberger/react-motion-components)
[![License](https://img.shields.io/github/license/philiprehberger/react-motion-components)](LICENSE)

Framer Motion animation primitives for React applications

## Installation

```bash
npm install @philiprehberger/react-motion-components motion
```

## Components

### `ScrollReveal`

Scroll-triggered fade-up reveal. Content animates in once when it enters the viewport

```tsx
import { ScrollReveal } from '@philiprehberger/react-motion-components';

<ScrollReveal delay={0.1}>
  <div>This fades in on scroll</div>
</ScrollReveal>
```

### `PageTransition`

Page-level enter/exit animation wrapper.

```tsx
import { PageTransition } from '@philiprehberger/react-motion-components';

<PageTransition>
  <main>Page content</main>
</PageTransition>
```

### `AnimatedCounter`

Count-up number animation triggered on scroll.

```tsx
import { AnimatedCounter } from '@philiprehberger/react-motion-components';

<AnimatedCounter target={100} suffix="+" label="Projects Delivered" />
```

### `HamburgerIcon`

Animated hamburger-to-X menu icon.

```tsx
import { HamburgerIcon } from '@philiprehberger/react-motion-components';

<HamburgerIcon isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
```

## Next.js Compatibility

All components include the `'use client'` directive and work with Next.js App Router.

## Usage

```tsx
import {
  ScrollReveal,
  PageTransition,
  AnimatedCounter,
  HamburgerIcon,
} from '@philiprehberger/react-motion-components';
import { useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageTransition>
      <HamburgerIcon isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <ScrollReveal delay={0.1}>
        <h1>Welcome</h1>
      </ScrollReveal>

      <AnimatedCounter target={50} suffix="+" label="Projects" />
    </PageTransition>
  );
}
```

## API

### `ScrollReveal`

Scroll-triggered fade-up reveal animation. Animates once per element.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | -- | Content to reveal |
| `delay` | `number` | `0` | Delay in seconds before animation starts |
| `className` | `string` | `''` | Additional CSS classes |

### `PageTransition`

Fade-up animation wrapper for page-level enter/exit transitions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | -- | Page content |
| `className` | `string` | `''` | Additional CSS classes |

### `AnimatedCounter`

Count-up number animation triggered on scroll.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `target` | `number` | -- | Target number to count up to |
| `duration` | `number` | `2` | Animation duration in seconds |
| `suffix` | `string` | `''` | Text after the number (e.g., "+", "%") |
| `label` | `string` | -- | Label displayed below the number |
| `className` | `string` | `'text-center'` | CSS class for the outer wrapper |
| `numberClassName` | `string` | `'text-4xl font-bold'` | CSS class for the number display |
| `labelClassName` | `string` | `'mt-2 text-sm font-medium'` | CSS class for the label |

### `HamburgerIcon`

Animated hamburger-to-X menu icon.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | -- | Whether the menu is open |
| `onClick` | `() => void` | -- | Click handler |
| `className` | `string` | `'h-8 w-8'` | CSS class for the SVG element |

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
