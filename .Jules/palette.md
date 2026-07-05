## 2025-05-15 - [Accessibility & Localization in Indigenous Context]
**Learning:** For apps localized in multiple languages (especially indigenous languages like Inyrybe), accessibility labels and skip-to-content links must be part of the localization dictionary. Relying on hardcoded labels breaks the experience for non-Portuguese speakers and screen reader users.
**Action:** Always include ARIA labels, skip-link text, and state descriptions (like "Open/Close") in `translations.json` and use the `t()` function to apply them.
