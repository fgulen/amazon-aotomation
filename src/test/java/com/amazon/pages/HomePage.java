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

    @FindBy(xpath = "//span[normalize-space()='Camel Towing Trucker Hats Mens & Womens Classic Breathable Summer Mesh Cap with Adjustable Snapback Strap Baseball Cap']")
    public WebElement product;

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

    @FindBy(xpath = "//input[@aria-label='1 Camel Towing Trucker Hat Mens &amp; Womens Classic Breathable Summer Mesh Caps with Adjustable Snapback Strap Baseball Cap Outdoor Golf Hat Gray']")
    public WebElement quantityDropdown;

    @FindBy(xpath = "//*[@class='a-size-base a-color-price a-text-bold']")
    public WebElement ikinciFiyat;

}
