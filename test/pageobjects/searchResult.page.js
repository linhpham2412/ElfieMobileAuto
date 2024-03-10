const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultPage extends Page {
    /**
     * define selectors using getter methods
     */


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async getSearchResultByIndex(index) {
        return (await $(`span.yIn8Od:nth-child(${index})`));
    }
}

module.exports = new SearchResultPage();
