## 2025-05-22 - Improved Accessibility and Feedback on Contact Form
**Learning:** Indigenous tourism sites often prioritize high-impact visuals (like full-screen hero images), which can inadvertently push accessibility to the background. Standardizing form fields with proper ARIA attributes and adding a "skip-to-content" link ensures that cultural immersion is available to all users, including those using assistive technologies.
**Action:** Always verify that form labels are linked to inputs and that async actions (like form submissions) have explicit loading states and `aria-live` regions for feedback.

## 2025-05-22 - Keyboard Navigation in Media-Heavy Layouts
**Learning:** In projects with fixed headers and large hero sections, keyboard users can feel "lost" during the initial Tab sequence. A "skip-to-content" link is critical to bypass repetitive navigation and jump directly to the unique page content.
**Action:** Implement "skip-to-content" as a standard part of the `RootLayout` in all projects.
