# Palette's Journal - Aldeia Buridina

## 2025-05-15 - Initial Audit
**Learning:** Found that the project uses Shadcn/UI and Tailwind CSS v4. The theme is 'Modern-Indigenous'.
**Action:** Look for accessibility gaps in navigation and interactive elements.

## 2025-05-15 - Accessibility and Hygiene
**Learning:** Prototype codebases frequently overlook screen reader support for dynamic elements (e.g., mobile menus missing `aria-expanded`) and form semantics (e.g., labels not linked via `htmlFor`). Additionally, build processes can generate artifacts that pollute the workspace if `.gitignore` is not strictly maintained.
**Action:** Always verify `aria-` attributes for state changes and ensure `.gitignore` excludes `build/`, `dist/`, and log files before submission.
