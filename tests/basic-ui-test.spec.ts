import { expect, test } from "@playwright/test";

test("Browser context test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://playwright.dev");
  await expect(page).toHaveURL(/.dev/);
});

test("Page playwright test", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});
