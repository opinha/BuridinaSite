## 2025-06-30 - Core Accessibility Polish
**Learning:** Indigenous language support (Inyrybe) requires all accessibility strings (skip links, menu labels) to be fully localized to maintain inclusivity and cultural respect. ARIA labels on language buttons should explicitly name the language to help screen reader users distinguish between options.
**Action:** Always include localization keys for hidden accessibility strings when working in multi-lingual apps. Use `aria-pressed` for language toggles and `aria-current` for navigation states to provide clear semantic feedback.
