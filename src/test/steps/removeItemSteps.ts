import { createBdd } from "playwright-bdd";
import { RemoveItemPage } from '../../pages/RemoveItemPage';
import { Given,When,Then } from "../../fixtures/my-fixtures";
// const {Given,When,Then} = createBdd();

When('I add {string} to the cart', async ({removeItemPage}, arg: string) => {
    // const removeItemPage = new RemoveItemPage(page);
    await removeItemPage.addToCart();
    // await page.locator('#add-to-cart-sauce-labs-backpack').click();
});

When('I navigate to the cart page', async ({removeItemPage}) => {
    // const removeItemPage = new RemoveItemPage(page);
    await removeItemPage.navToCart();
//   await page.locator('.shopping_cart_link').click();
});

When('I remove {string} from the cart', async ({removeItemPage}, arg: string) => {
    // const removeItemPage = new RemoveItemPage(page);
    await removeItemPage.removeFromCat();
    // await page.locator('#remove-sauce-labs-backpack').click();
});

Then('the cart should not contain {string}', async ({removeItemPage}, arg: string) => {
    // const removeItemPage = new RemoveItemPage(page);
    removeItemPage.verifyCart();
//   await expect(await page.locator('.inventory_item_name')).toBeHidden();
});

Then('the cart badge should not be visible', async ({removeItemPage}) => {
    // const removeItemPage = new RemoveItemPage(page);
    await removeItemPage.verifyCartBadge();
//   await expect(await page.locator('.shopping_cart_badge')).toBeHidden();
});