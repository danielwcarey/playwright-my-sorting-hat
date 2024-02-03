import { Page, Locator, expect } from '@playwright/test';

export class MainPage {
    private readonly startButton: Locator;
    public readonly cards: Locator;

    constructor(public readonly page: Page) {
        this.startButton = page.getByRole('button', { name: 'Start the Sorting!' });
        this.cards = page.locator('.card');
    }

    async goto() {
        await this.page.goto('/');
    }

    async toHaveTitle(title: string) {
        return this.page.getByTitle(title);
    }

    async clickStartButton() {
        await this.startButton.click();
    }

    async sortPerson(name: string, pronouns: string) {
        await this.page.getByLabel('Student\'s Name').click();
        await this.page.getByLabel('Student\'s Name').fill(name);
        await this.page.getByLabel('Preferred Pronouns').click();
        await this.page.getByLabel('Preferred Pronouns').fill(pronouns);
        await this.clickStartButton();
    }

    async expectCard(name: string, pronouns: string, house: string = '') {
        const card = house === '' ?
            this.page.locator('.card')
                .filter({ hasText: name })
                .filter({ hasText: pronouns })
            : this.page.locator('.card')
                .filter({ hasText: name })
                .filter({ hasText: pronouns })
                .filter({ hasText: house });

        expect(card).toHaveCount(1);// .toBeDefined();
    }
}