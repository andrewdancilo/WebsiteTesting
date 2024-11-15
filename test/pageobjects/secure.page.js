import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * Sub page containing specific selectors and methods for the secure page after login.
 */
class SecurePage extends Page {
    /**
     * Define selectors using getter methods
     */
    get flashAlert() {
        return $('div.error-message-container'); // Error message container
    }

    get dashboardTitle() {
        return $('title'); // Selector for the HTML title tag
    }

    /**
     * Validate if the page has the correct title
     */
    async isSwagLabsTitleDisplayed() {
        const title = await browser.getTitle(); // Retrieves the current page title
        return title === 'Swag Labs'; // Checks if the title matches "Swag Labs"
    }
}

export default new SecurePage();
