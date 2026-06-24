## 2025-05-14 - Navigation Accessibility and Skip Link
**Learning:** For immersive, scroll-heavy institutional sites, a 'Skip to Content' link is essential for keyboard accessibility. Additionally, associating mobile menu toggles with their containers using `aria-controls` and unique IDs improves screen reader navigation.
**Action:** Always implement a 'Skip to Content' link targeting the main container (`id="main-content"`, `tabIndex={-1}`) and ensure all navigation components use appropriate ARIA landmarks and states.
