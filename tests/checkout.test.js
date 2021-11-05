const { test, expect } = require('@playwright/test');
const {ProductsPage} = require("../pages/products.page");
const {HeaderModule} = require("../pages/header.page");

let productsPage

test.describe('Checkout tests', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://adimoldovan.github.io/demo-shop/#/', {waitUntil: 'domcontentloaded'})
    productsPage = await new ProductsPage(page)
  })

  test('Guest can add a product to cart', async ({page}) => {
    const header = new HeaderModule(page)
    const initialNumberOfProducts = await header.getNumberOfCartProducts()
    await productsPage.addProductToCart()
    const currentNumberOfProducts = await header.getNumberOfCartProducts()
    let expectedNumberOfProducts = initialNumberOfProducts + 1

    if (process.env.FAIL_DEMO) {
      expectedNumberOfProducts++
    }

    await expect(currentNumberOfProducts).toBe(expectedNumberOfProducts)
  })
})
