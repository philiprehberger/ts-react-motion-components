# @philiprehberger/react-motion-components

Framer Motion animation primitives for React applications.

## Installation

```bash
npm install @philiprehberger/react-motion-components motion
```

## Components

### `ScrollReveal`

Scroll-triggered fade-up reveal. Content animates in once when it enters the viewport.

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

## License

MIT
