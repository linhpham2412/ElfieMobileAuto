const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchTextBox () {
        return $('android=new UiSelector().text("Search or type URL").className("android.widget.EditText")');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async getSearchResultByText (resultText) {
        return $(`android=new UiSelector().text("${resultText}").className("android.widget.TextView")`);
    }
}

module.exports = new SearchPage();
