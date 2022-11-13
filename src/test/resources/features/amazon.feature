@Cart @wip
Feature: Amazon product quantity and price verification

  Background:User on Amazon Webpage to search product
    Given user is on the homepage
    When user searches for "hats for men"


  @quantity @price
  Scenario Outline: Verify that the products prices increase correctly according to the quantity increment
    And user adds first hat appearing(in Stock) to Cart with quantity "<quantity increment>"
    Then verify that total price calculation according to quantity "<quantity increment>" is correct
    When user reduces the quantity to "<quantity decrement>" in the Cart for the item selected
    Then verify that total price calculation according to quantity "<quantity decrement>" is correct
    Examples:
      | quantity increment | quantity decrement |
      | 2                  | 1                  |