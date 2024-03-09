const { expect } = require('@wdio/globals')
const landingPage = require('../pageobjects/landing.page')
const searchPage = require('../pageobjects/search.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await landingPage.chromeApp.click();
        await searchPage.searchTextBox.setValue("Elfie");

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

