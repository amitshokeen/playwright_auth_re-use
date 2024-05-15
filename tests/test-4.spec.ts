import { test, expect } from "@playwright/test"

test.use({ storageState: '../noAuth.json',
    headless: true,
    browserName: 'firefox'
 })
test("Basic test5", async ({ page }) => {
    await page.goto("https://demoblaze.com/")
    await expect(page.locator('#logout2')).toBeVisible()
})
