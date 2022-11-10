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

    @FindBy(xpath = "//input[@aria-label='1 Camel Towing Trucker Hat Mens &amp; Womens Classic Breathable Summer Mesh Caps with Adjustable Snapback Strap Baseball Cap Outdoor Golf Hat Gray']")
    public WebElement quantityDropdown;

    @FindBy(xpath = "//*[@class='a-size-base a-color-price a-text-bold']")
    public WebElement ikinciFiyat;

    @FindBy(xpath = "(//*[@data-action='update-quantity'])[22]")
    public WebElement ortada;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement quantityInputBox;


}
