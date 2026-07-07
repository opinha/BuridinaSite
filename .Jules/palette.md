# 🎨 Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-14 - Multi-language Accessibility Grounding
**Learning:** In a multi-language application (Portuguese and Inyrybe), accessibility strings must be grounded in both languages to ensure an equitable experience. Simply providing localized content is not enough; the functional labels for assistive technology (like "Open Menu" or "Skip to content") must also be translated and properly associated.
**Action:** Always verify that every new accessibility attribute (aria-label, etc.) has a corresponding entry in the translations.json and is correctly implemented in the component.
