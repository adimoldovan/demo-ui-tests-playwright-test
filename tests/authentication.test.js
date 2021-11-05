const { test, expect } = require('@playwright/test');
const {ProductsPage} = require("../pages/products.page");
const {login} = require("../flows/login");

let productsPage

test.describe('Authentication tests', async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://adimoldovan.github.io/demo-shop/#/', {waitUntil: 'domcontentloaded'})
    productsPage = await new ProductsPage(page)
  })

  test('Normal user can login', async ({ page }) => {

    await login(page,'dino', 'choochoo')

    await expect(page.title()).resolves.toMatch('Demo shop')
    const element = await page.$("a[href='#/account']")
    expect(await page.evaluate(element => element.textContent, element)).toBe('dino')
  })
})
