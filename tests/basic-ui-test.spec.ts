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

test("Playwright login test", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("testuserengineer@example.com");
  await page.locator("#userPassword").fill("Password1@");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  await expect(page.locator(".logo-holder p")).toContainText(
    "Automation Practice"
  );
});
