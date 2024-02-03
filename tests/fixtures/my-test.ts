import { test as base } from '@playwright/test';
import { MainPage } from './main-page';

type MyFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.goto();

    // Use the fixture value in the test.
    await use(mainPage);

    // Clean up the fixture.
    await mainPage.page.screenshot();
  }
});
export { expect } from '@playwright/test';