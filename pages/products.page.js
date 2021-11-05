const {expect} = require("@playwright/test");

class ProductsPage {
  constructor (page) {
    this.page = page
    this.ADD_TO_CART_BTN = 'div.card button.btn-link'
  }

  async isDisplayed () {
    // eslint-disable-next-line jest/no-standalone-expect
    await expect(this.page.title()).resolves.toMatch('Demo shop')
  }

  async addProductToCart () {
    await this.page.click(this.ADD_TO_CART_BTN)
  }
}

module.exports = { ProductsPage }
