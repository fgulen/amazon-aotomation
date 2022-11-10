@Cart @wip
Feature: Amazon quantity and price verification

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
      | 5                  | 2                  |



#  Go to https://www.amazon.com
#  Search for “hats for men”
#  Add the first hat appearing to Cart with quantity 2
#  Open cart and assert that the total price and quantity are correct
#  Reduce the quantity from 2 to 1 in Cart for the item selected in the step 3
#  Assert that the total price and quantity has been correctly changed
#