class LoginModal {
  constructor (page) {
    this.page = page
    this.USERNAME_FLD = '#user-name'
    this.PASSWORD_FLD = '#password'
    this.LOGIN_BTN = 'button.btn-primary'
  }

  async login (username, password) {
    await this.page.type(this.USERNAME_FLD, username)
    await this.page.type(this.PASSWORD_FLD, password)
    await this.page.click(this.LOGIN_BTN)
  }
}
module.exports = { LoginModal }
