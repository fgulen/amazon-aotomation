$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazon.feature");
formatter.feature({
  "name": "Amazon product quantity and price verification",
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
  "name": "user adds first hat appearing(in Stock) to Cart with quantity \"\u003cquantity increment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"\u003cquantity increment\u003e\" is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "user reduces the quantity to \"\u003cquantity decrement\u003e\" in the Cart for the item selected",
  "keyword": "When "
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"\u003cquantity decrement\u003e\" is correct",
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
  "error_message": "java.lang.NumberFormatException: For input string: \".\"\r\n\tat java.base/jdk.internal.math.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:2054)\r\n\tat java.base/jdk.internal.math.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\r\n\tat java.base/java.lang.Double.parseDouble(Double.java:651)\r\n\tat com.amazon.step_definitions.StepDefinitions.user_searches_for(StepDefinitions.java:43)\r\n\tat ✽.user searches for \"hats for men\"(file:src/test/resources/features/amazon.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the products prices increase correctly according to the quantity increment",
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
  "name": "user adds first hat appearing(in Stock) to Cart with quantity \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_adds_first_hat_appearing_in_Stock_to_Cart_with_quantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"2\" is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verify_that_total_price_calculation_according_to_quantity_is_correct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user reduces the quantity to \"1\" in the Cart for the item selected",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_reduces_the_quantity_to_in_the_Cart_for_the_item_selected(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that total price calculation according to quantity \"1\" is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.verify_that_total_price_calculation_according_to_quantity_is_correct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});