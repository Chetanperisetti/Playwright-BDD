import { Then } from '../../fixtures/my-fixtures';

Then('I should see "Sauce Labs Backpack" in the cart',async({removeItemPage},arg:string)=>{
    await removeItemPage.verifyCart();
})