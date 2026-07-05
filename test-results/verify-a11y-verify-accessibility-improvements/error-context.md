# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verify-a11y.spec.ts >> verify accessibility improvements
- Location: verify-a11y.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a[href="#main-content"]')
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('a[href="#main-content"]')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  |
  3  | test('verify accessibility improvements', async ({ page }) => {
  4  |   await page.goto('http://localhost:3000/');
  5  |
  6  |   // Wait for ANY content to appear
  7  |   await page.waitForLoadState('networkidle');
  8  |
  9  |   // Log page content to see what's there
  10 |   const content = await page.content();
  11 |   console.log('Page content length:', content.length);
  12 |
  13 |   // 1. Verify Skip to Content link
  14 |   const skipLink = page.locator('a[href="#main-content"]');
> 15 |   await expect(skipLink).toBeAttached();
     |                          ^ Error: expect(locator).toBeAttached() failed
  16 |   // It should be sr-only initially
  17 |   await expect(skipLink).toHaveClass(/sr-only/);
  18 |
  19 |   // 2. Verify Header accessibility
  20 |   const navLinks = page.locator('nav a[aria-current="page"]');
  21 |   await expect(navLinks).toContainText('Início');
  22 |
  23 |   // Check language buttons
  24 |   const ptButton = page.locator('button[aria-label*="Português"]');
  25 |   await expect(ptButton).toBeVisible();
  26 |   await expect(ptButton).toHaveAttribute('aria-pressed', 'true');
  27 |
  28 |   const inyButton = page.locator('button[aria-label*="Inyrybe"]');
  29 |   await expect(inyButton).toBeVisible();
  30 |   await expect(inyButton).toHaveAttribute('aria-pressed', 'false');
  31 |
  32 |   // Switch language and check if aria-pressed updates
  33 |   await inyButton.click();
  34 |   await expect(inyButton).toHaveAttribute('aria-pressed', 'true');
  35 |   await expect(ptButton).toHaveAttribute('aria-pressed', 'false');
  36 |
  37 |   // Check if skip link text updated
  38 |   await expect(skipLink).toHaveText('Katirese');
  39 |
  40 |   // 3. Verify Mobile Menu (Responsive)
  41 |   await page.setViewportSize({ width: 375, height: 667 });
  42 |   const menuButton = page.locator('button[aria-controls="mobile-menu"]');
  43 |   await expect(menuButton).toBeVisible();
  44 |   await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  45 |   await expect(menuButton).toHaveAttribute('aria-label', 'Tirese'); // Inyrybe for Open Menu
  46 |
  47 |   await menuButton.click();
  48 |   await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  49 |   await expect(menuButton).toHaveAttribute('aria-label', 'Riakamy'); // Inyrybe for Close Menu
  50 |
  51 |   const mobileMenu = page.locator('#mobile-menu');
  52 |   await expect(mobileMenu).toBeVisible();
  53 |
  54 |   // Verify active link in mobile menu
  55 |   const activeMobileLink = mobileMenu.locator('a[aria-current="page"]');
  56 |   await expect(activeMobileLink).toContainText('Ibutumy');
  57 | });
  58 |
```