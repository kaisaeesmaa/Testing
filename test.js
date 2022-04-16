const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();

    // Open webpage and get title
    await driver.get("https://www.weekendshoes.ee/");
    let title = await driver.getTitle();
    console.log('Webpage title is:', title);

    // Open page https://www.weekendshoes.ee/naistele/saapad.html
    await driver.get("https://www.weekendshoes.ee/naistele/saapad.html"); 

    // Add item to wishlist
    await driver.get("https://www.weekendshoes.ee/jana-poolsaapad-485872.html"); 
    await driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[1]/a')).click();

    // Open wishlist
    setTimeout(async function () {
        await driver.findElement(By.xpath('//*[@id="wishlist-link"]')).click();
    }, 2000);
    setTimeout(async function () {
        await driver.findElement(By.css('#miniwishlist-content-wrapper > div > div > div > button')).click();
    }, 5000);

    // Open item via wishlist
    setTimeout(async function () {
        await driver.findElement(By.xpath('//*[@id="item_1702817"]/div/strong/a')).click(); 
    }, 5000);

    // Add item into shopping basket
    setTimeout(async function () {
        await driver.get("https://www.weekendshoes.ee/jana-poolsaapad-485872.html?qty=1");
        await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]/span')).click();
        await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[3]/div[1]')).click();
        await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]/span')).click();
    }, 8000);

    // Go to shopping basket
    setTimeout(async function () {
        await driver.findElement(By.xpath('//*[@id="minicart-content-wrapper"]/div[2]/div[4]/div/a/span')).click();
    }, 25000);


    // Increase quantity of items
    setTimeout(async function () {
        await driver.findElement(By.xpath('//*[@id="increase-cart-qty-btn-7213879"]')).click();
    }, 25000);
    
    // Remove item
    setTimeout(async function () {
        await driver.findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a')).click();
    }, 35000);

    // Find Jackets
    setTimeout(async function () {
        var searchJackets = "Jope";
        await driver.get("https://www.weekendshoes.ee/");
        await driver.manage().window().maximize();
        await driver.findElement(By.id("search")).sendKeys(searchJackets, Key.RETURN);

    // Filter search results by popularity
        await driver.findElement(By.id('sorter')).click();
        await driver.findElement(By.xpath('//*[@id="sorter"]')).click();
        await driver.findElement(By.css('#sorter>option[value="bestsellers"]')).click();
    }, 40000);
    
    // quit
    setTimeout(async function () {
        await driver.quit();
    }, 70000);
    
    }
 
example()

