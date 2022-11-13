package com.amazon.step_definitions;


import com.amazon.pages.HomePage;
import com.amazon.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import com.amazon.utilities.ConfigurationReader;
import com.amazon.utilities.Driver;
import io.cucumber.java.en.When;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;

import static org.junit.Assert.assertEquals;

public class StepDefinitions {

    double unitPrice;
    int quantity;
    double expectedTotalPrice;
    double actualPrice;


    String url = ConfigurationReader.get("url");
    HomePage homePage = new HomePage();
    private static final Logger LOG = LogManager.getLogger(StepDefinitions.class);

    @Given("user is on the homepage")
    public void user_is_on_the_homepage() {
        Driver.get().get(url);
//      homePage.captcha.click();
    }

    @When("user searches for {string}")
    public void user_searches_for(String searchKey) {
        homePage.searchInput.sendKeys(searchKey);
        homePage.search.click();
        homePage.product.click();
        unitPrice = Double.parseDouble(homePage.priceWhole.getText() + "." + homePage.priceFraction.getText());

    }

    @When("user adds first hat appearing\\(in Stock) to Cart with quantity {string}")
    public void user_adds_first_hat_appearing_in_Stock_to_Cart_with_quantity(String userSelectQuantity) {
        quantity = Integer.parseInt(userSelectQuantity);
        Select listOfQuantity = new Select(homePage.quantityList);
        listOfQuantity.selectByVisibleText(String.valueOf(quantity));
        homePage.addToChart.click();
    }


    @Then("verify that total price calculation according to quantity {string} is correct")
    public void verify_that_total_price_calculation_according_to_quantity_is_correct(String quantity) {

        expectedTotalPrice = unitPrice * Double.parseDouble(quantity);
        BrowserUtils.waitForVisibility(homePage.shoppingChartDropdown, 4);
        actualPrice = Double.parseDouble(homePage.priceInBasket.getText().substring(1));
        assertEquals("!!!Basket Price and actual price did not match", expectedTotalPrice, actualPrice, 0);

        LOG.info(String.format("Unit Price : %s ",  unitPrice));
        LOG.info(String.format("Quantity : %s",quantity));
        LOG.info(String.format("Actual Price : %s",actualPrice));
        LOG.info(String.format("Expected Price : %s",expectedTotalPrice));

    }

    @When("user reduces the quantity to {string} in the Cart for the item selected")
    public void user_reduces_the_quantity_to_in_the_Cart_for_the_item_selected(String quantity) {
        expectedTotalPrice = unitPrice * Double.parseDouble(quantity);
        BrowserUtils.waitForVisibility(homePage.shoppingChartDropdown, 4);
        Select select = new Select(homePage.shoppingChartDropdown);
        select.selectByValue("1");
        homePage.moveCursor.click();
        homePage.quantityInputBox.clear();
        homePage.quantityInputBox.sendKeys(quantity);
        homePage.quantityInputBox.sendKeys(Keys.ENTER);
        Driver.get().navigate().refresh();
    }

}