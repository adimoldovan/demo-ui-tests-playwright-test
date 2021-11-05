const {HeaderModule} = require("../pages/header.page");

async function login(page, username, password) {
    const header = new HeaderModule(page)
    const loginModal = await header.openLogin()
    await loginModal.login(username, password)
}

module.exports = { login }
