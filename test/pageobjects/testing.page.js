const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TestingPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pageLogo () {
        return $('aria/Elfie Logotype');
    }

    get hamburgerButton () {
        return $('aria/menu');
    } 

    get copyrightTextBlock () {
        return $('div.text-block');
    }

    get expectedLogoImageSrc () {
        return 'https://assets-global.website-files.com/63f08708b2643759c43b57bc/63f08708b2643792a23b5982_logotype_elfie.png';
    }

    get expectedCopyrightText () {
        return 'Copyright 2023 Elfie Pte. Ltd.';
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


}

module.exports = new TestingPage();
