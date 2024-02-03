import { test, expect } from './fixtures/my-test';

test('verify_app_has_title_sorting_hat', async ({ mainPage }) => {
    expect(await mainPage.page.title()).toBe('Sorting Hat');
});

test('sort_person_and_verify_card', async ({ mainPage }) => {
    const name = 'Dan';
    const pronouns = 'He';

    await mainPage.clickStartButton();
    await mainPage.sortPerson(name, pronouns);

    mainPage.expectCard(name, pronouns);

});

test('add_test_person_and_verfy_harry_potter_is_in_gryffindor', async ({ mainPage }) => {
    await mainPage.clickStartButton();
    await mainPage.sortPerson("Test", "Test");
    await mainPage.clickStartButton();

    mainPage.expectCard('Harry Potter', 'He', 'Gryffindor');
});
