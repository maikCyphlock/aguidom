import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByText("Aguidom", { exact: true }).click();
  await page.getByRole("button", { name: "Next slide" }).click();
  await page.getByRole("button", { name: "Next slide" }).click();
  await page.getByRole("button", { name: "Next slide" }).click();
  await page.locator("div:nth-child(5) > .p-1 > .rounded-xl > .w-full").click();
  await page
    .locator("div")
    .filter({ hasText: "Horario del Club de" })
    .nth(2)
    .click();
  await page.getByText("VIP$10/ mes Entrenamientos en").click();
  await page.goto("http://localhost:3000/login");
  await page
    .getByText(
      "Club Aguidom¡Bienvenido de nuevo! Por favor, inicia sesión en tu cuenta.Correo",
    )
    .click();
});
