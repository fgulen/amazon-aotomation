$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazon.feature");
formatter.feature({
  "name": "Amazon product quantity and price verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@QuantityPriceVerification"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that the products prices increase correctly according to the quantity increment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@quantity"
    },
    {
      "name": "@price"
    }
  ]
});
formatter.step({
  "name": "user adds to Cart 5 (st nd rd th) appearing hat with quantity \"\u003cquantity increment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify that total price calculation according to \"\u003cquantity increment\u003e\" is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "user reduces the quantity to \"\u003cquantity decrement\u003e\" in the Cart for the item selected",
  "keyword": "When "
});
formatter.step({
  "name": "verify that total price calculation according to \"\u003cquantity decrement\u003e\" is correct",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "quantity increment",
        "quantity decrement"
      ]
    },
    {
      "cells": [
        "2",
        "1"
      ]
    }
  ]
});
formatter.background({
  "name": "User on Amazon Webpage to search product",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for \"hats for men\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_searches_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that the products prices increase correctly according to the quantity increment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@QuantityPriceVerification"
    },
    {
      "name": "@quantity"
    },
    {
      "name": "@price"
    }
  ]
});
formatter.step({
  "name": "user adds to Cart 5 (st nd rd th) appearing hat with quantity \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.userAddsToCartStNdRdThAppearingHatWithQuantity(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that total price calculation according to \"2\" is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verify_that_total_price_calculation_according_to_quantity_is_correct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reduces the quantity to \"1\" in the Cart for the item selected",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_reduces_the_quantity_to_in_the_Cart_for_the_item_selected(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that total price calculation according to \"1\" is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verify_that_total_price_calculation_according_to_quantity_is_correct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});