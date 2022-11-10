$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazon.feature");
formatter.feature({
  "name": "Amazon quantity and price verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Cart"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Amazon 2",
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
  "name": "user adds first hat appearing(in Stock) to Cart with quantity \"\u003cincrement\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"\u003cincrement\u003e\" is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "user reduces the quantity to \"\u003cdecrement\u003e\" in the Cart for the item selected",
  "keyword": "When "
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"\u003cdecrement\u003e\" is correct",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "increment",
        "decrement"
      ]
    },
    {
      "cells": [
        "4",
        "1"
      ]
    }
  ]
});
formatter.background({
  "name": "Amazon 1",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the homepage",
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
  "name": "Amazon 2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Cart"
    },
    {
      "name": "@wip"
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
  "name": "user adds first hat appearing(in Stock) to Cart with quantity \"4\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_adds_first_hat_appearing_in_Stock_to_Cart_with_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"4\" is correct",
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
  "name": "verify that total price calculation according to quantity \"1\" is correct",
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