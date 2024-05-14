import { test, expect } from "@playwright/test"

test.only("Basic test", async ({ page }) => {
    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("test")
    await page.locator("#loginpassword").fill("test")
    await page.locator('button[onclick="logIn()"]').click()
    await expect(page.locator('#logout2')).toBeVisible()

})

