import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('react-motion-components', async () => {
  const mod = await import('../../dist/index.js');

  it('exports PageTransition as a function', () => {
    assert.ok(typeof mod.PageTransition === 'function');
  });

  it('exports ScrollReveal as a function', () => {
    assert.ok(typeof mod.ScrollReveal === 'function');
  });

  it('exports AnimatedCounter as a function', () => {
    assert.ok(typeof mod.AnimatedCounter === 'function');
  });
});
