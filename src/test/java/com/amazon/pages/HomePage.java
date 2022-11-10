package com.amazon.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.amazon.utilities.Driver;

public class HomePage extends BasePage {

    public HomePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(linkText = "Try different image")
    public WebElement captcha;

    @FindBy(css = ".s-image[src='https://m.media-amazon.com/images/I/71rzcRUKucL._AC_UL320_.jpg']")
    public WebElement product;
   //*[@class='s-image'])[4]"

    @FindBy(id = "quantity")
    public WebElement quantityList;

    @FindBy(id = "add-to-cart-button")
    public WebElement addToChart;

    @FindBy(xpath = "//span[@class='a-price-whole']")
    public WebElement priceWhole;

    @FindBy(xpath = "//span[@class='a-price-fraction']")
    public WebElement priceFraction;

    @FindBy(xpath = "//span[@data-feature-id='sc-update-quantity-select']//select")
    public WebElement shoppingChartDropdown;

    @FindBy(xpath = "//*[@class='a-size-base a-color-price a-text-bold']")
    public WebElement priceInBasket;

    @FindBy(xpath = "(//*[@data-action='update-quantity'])[22]")
    public WebElement moveCursor;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement quantityInputBox;


}
