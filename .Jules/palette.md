## 2025-05-15 - [Accessibility & Compatibility Stability]
**Learning:** Implementing `aria-current="page"` and other accessibility attributes in a React 18 environment requires careful dependency management; specifically, `react-router` v8+ introduces `useOptimistic` which is incompatible with React 18 and causes runtime crashes.
**Action:** When working with accessibility features in React 18 projects, ensure `react-router` is pinned to `v7.x` to maintain stability while achieving semantic UI goals.
