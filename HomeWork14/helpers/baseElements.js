class BaseElement {
    async click(element) {
        await element.waitForExist();
        await element.click();
    }

    async setValue(element, text, timeout = 3000) {
        await element.waitForDisplayed(timeout);
        await element.setValue(text);
    }
}

module.exports = BaseElement;
