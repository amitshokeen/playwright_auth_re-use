import { test, expect } from "@playwright/test"

// this test is expected to fail.
test.use({ storageState: '../noAuth.json',
    headless: true,
    browserName: 'firefox'
 })
test("Basic test5", async ({ page }) => {
    await page.goto("https://demoblaze.com/")
    await expect(page.locator('#logout2')).toBeVisible()
})
