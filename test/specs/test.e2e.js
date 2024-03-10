const { expect } = require('@wdio/globals')
const landingPage = require('../pageobjects/landing.page')
const searchPage = require('../pageobjects/search.page')
const testingPage = require('../pageobjects/testing.page')
const { server, textSpanIntersection } = require('typescript')
const searchResultPage = require('../pageobjects/searchResult.page')

suite('Open Google then search for testing page and verify contain', () => {
    test('Search for testing page Elfie and verify contain', async () => {
        const searchText = "Elfie";
        //Input search text to search text box
        await searchPage.searchTextBox.setValue(searchText);
        //Select search result
        for (let i = 1; i <= 2; i++) {
            (await searchPage.getSearchResultByText(searchText)).click();
        }
        //Click on first result in result page
        await searchResultPage.getSearchResultByIndex(0);
        //Change to web view 
        browser.switchContext('WEB_VIEW_chrome');
        //get page log element
        const testPageLogo = testingPage.pageLogo;
        //Verify page logo has correct source
        await expect(testPageLogo).toHaveAttr('src',
        testingPage.expectedLogoImageSrc);
        //Get hamburger button
        const testPageHamburgerButton = await testingPage.hamburgerButton;
        //Verify default state of hamburger button
        await expect(testPageHamburgerButton).toHaveAttr('class','menu-button w-nav-button');
        //Click on hamburger button
        testPageHamburgerButton.click();
        //Verify new status of hamburger button
        await expect(testPageHamburgerButton).toHaveAttr('class','menu-button w-nav-button w--open');
        //Get copyright text block
        const testPageCopyRight = await testingPage.copyrightTextBlock;
        //Scroll to copyright text block
        testPageCopyRight.scrollIntoView();
        //Verify copyright text 
        await expect(testPageCopyRight.getText()).toEqual(testingPage.expectedCopyrightText);
    })
})

