import { test, expect } from "@playwright/test"

test("Basic test4", async ({ context, page }) => {
    await context.clearCookies()
    await page.goto("https://demoblaze.com/")
    await expect(page.locator('#logout2')).toBeVisible()
})
