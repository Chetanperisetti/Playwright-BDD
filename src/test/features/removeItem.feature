Feature: Remove an item from the cart on Swag Labs

  Background:
    Given I open the SauceDemo website
    When I enter "standard_user" and "secret_sauce"
    And I click the login button
    And I add "Sauce Labs Backpack" to the cart
    And I navigate to the cart page

  Scenario: Successfully remove an item from the cart
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart should not contain "Sauce Labs Backpack"
    And the cart badge should not be visible
