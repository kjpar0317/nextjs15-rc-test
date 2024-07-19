import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.getByRole("button", { name: "Read our docs" }).nth(1).click();
  await page.getByRole("link", { name: "From Test" }).click();
  await page.getByLabel("Accept terms and conditions").click();
  await page.getByRole("link", { name: "About" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByLabel("선택2").click();
  await page.getByRole("button", { name: "Edit Profile" }).click();
});
