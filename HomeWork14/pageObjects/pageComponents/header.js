const BasePage = require("../basePage");

class Header extends BasePage {
    constructor() {
        super();
    }

    get homePageButton() {
        return $(".navbar__logo");
    }

    get docsButton() {
        return $('//a[contains(text(), "Docs")]');
    }

    get apiButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "API")]');
    }

    get blogButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Blog")]');
    }

    get contributeButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Contribute")]');
    }

    get communityButton() {
        return $('//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Community")]');
    }

    get versionsButton() {
        return $('.navbar__link[href="/versions"]');
    }

    get githubButton() {
        return $(".navbar__link.header-github-link");
    }

    get modeSwitcherButton() {
        return $('//button[@class="clean-btn toggleButton_gllP"]');
    }

    get fieldSwithMode() {
        return $("html[data-theme]");
    }

    async getTheme(atribute = "data-theme") {
        await this.fieldSwithMode.waitForExist;
        return this.fieldSwithMode.getAttribute(atribute);
    }
}

module.exports = Header;
