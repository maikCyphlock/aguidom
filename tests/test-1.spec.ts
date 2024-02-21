import { test, expect } from "@playwright/test";

test("Aguidom landing page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText("Aguidom");
  await page.getByRole("heading", { name: "Nuestros patrocinadores" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Nuestros patrocinadoresproximamente$/ })
  ).toBeVisible();
  await expect(
    page.getByText(
      "25+ de experiencia en el deporteNo esperes a que la suerte te toque. Comienza a"
    )
  ).toBeVisible();
  await expect(
    page.getByText("Atletas que entrenan con nosotrosPrevious slideNext slide")
  ).toBeVisible();
  await expect(page.locator(".rounded-xl > .w-full").first()).toBeVisible();
  await expect(
    page.locator("div:nth-child(2) > .p-1 > .rounded-xl > .w-full")
  ).toBeVisible();
  await expect(
    page.locator("div:nth-child(3) > .p-1 > .rounded-xl > .w-full")
  ).toBeVisible();
  await expect(
    page.locator("div").filter({ hasText: "Horario del Club de" }).nth(2)
  ).toBeVisible();
  await expect(
    page.locator("section").filter({ hasText: "Inscribete a nuestro clubÚ" })
  ).toBeVisible();
});
