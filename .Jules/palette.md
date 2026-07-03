# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-01-24 - Semantic Navigation State
**Learning:** When using Framer Motion (`motion.div`) inside a navigation `Link`, apply the `aria-current="page"` attribute to the `Link` itself rather than the animated child. This ensures that the semantic "current" state is correctly announced by screen readers regardless of visual animations.
**Action:** Always place `aria-current` on the interactive parent element in navigation components.

## 2025-01-24 - Skip Link implementation in React
**Learning:** For a "Skip to Content" link to work correctly in a SPA (Single Page Application), the target container must not only have a matching `id` but also `tabIndex={-1}` to ensure focus is moved correctly even if the element isn't naturally focusable.
**Action:** Pair `href="#main-content"` with `<main id="main-content" tabIndex={-1}>`.

## 2025-01-24 - Mobile Menu Accessibility
**Learning:** Toggle buttons for mobile menus must use `aria-expanded` and `aria-controls` to programmatically link the trigger to the hidden content. Without these, screen reader users may not realize a menu has opened or where it is located in the DOM.
**Action:** Synchronize `aria-expanded` state with the menu's open state and ensure `aria-controls` matches the menu container's `id`.
