const PageFactory = require("../pageObjects/pageFactory");

const Page = new PageFactory();

describe("WebdriverIO  tests", () => {
    it(`Check Text 'WebdriverIO ' in MainTitle`, async () => {
        await Page.homePage.navigate("https://webdriver.io/");
        await expect(browser).toHaveTitleContaining("WebdriverIO");
        await expect(browser).toHaveUrlContaining("webdriver");
    });

    it(`Check subTitle on HomePage`, async () => {
        await Page.homePage.navigate("https://webdriver.io/");
        await expect(await Page.homePage.subTitle).toHaveTitleContaining("Next-gen browser and mobile automation test framework for Node.js");
    });

    it(`Check Text 'Blog ' in MainTitle`, async () => {
        await Page.homePage.navigate("https://webdriver.io/");
        await Page.baseElement.click(Page.header.blogButton);
        await expect(browser).toHaveTitleContaining("Blog");
        await expect(browser).toHaveUrlContaining("blog");
    });

    it(`Check searching functionality`, async () => {
        await Page.homePage.navigate("https://webdriver.io/");
        await Page.baseElement.click(Page.searchComponents.searchButton);
        await Page.searchComponents.getSearch("Expect");
        await expect(browser).toHaveTitleContaining("Expect");
        await expect(await Page.searchComponents.searchResultTitle).toHaveTextContaining('Expect');
    });

    it(`Check api-element "click" in API tab`, async () => {
        await Page.homePage.navigate("https://webdriver.io/");
        await Page.baseElement.click(Page.header.apiButton);
        await Page.baseElement.click(Page.apiPage.tabElement);
        await Page.baseElement.click(Page.apiPage.elemClick);
        await expect(browser).toHaveUrlContaining("click");
        await expect(await Page.apiPage.headerSelector).toHaveTextContaining("click");
    });

    it(`Check switch lighting mode (Light or Dark)`, async () => {
        await Page.homePage.navigate("https://webdriver.io/");
        await Page.baseElement.click(Page.header.apiButton);
        await Page.baseElement.click(Page.header.modeSwitcherButton);
        await Page.baseElement.click(Page.header.modeSwitcherButton);
        await expect(await Page.header.getTheme()).toEqual("dark");
    });
});
