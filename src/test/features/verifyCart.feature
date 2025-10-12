Feature: verify cart page
@productAdded
Scenario: Verify product is displayed in cart
  When I navigate to the cart page
  Then I should see "Sauce Labs Backpack" in the cart