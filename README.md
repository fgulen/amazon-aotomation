
# Cucumber BDD Test Automation Framework


Selenium & Java based `Frontend` and `Backend` automation suite utilising the BDD methodologies of Cucumber and Gherkin
Cancel changes
## Prerequisites

-  JAVA SDK 17
-  Maven
-  Plugins (Cucumber,Gherkin)

### Windows Mac

Intellij IDEA   -> Preferences/Settings   -> Plugins ->  Marketplace -> `Cucumber and Gherkin` for Java

### Set Path Variables

User Variable Path = directory for java sdk 17
Set Maven home in environment Variables

### For Windows
Create the following System variables
- JAVA_HOME = PAth to java sdk
- M2_HOME = Path to maven installation
- MAVEN_HOME = Path to maven installation

### For Windows Edit Path System variable
- Add %M2_HOME%\bin
- Add directory to your chromedriver.exe


### Software preparation

	  $ mkdir aut-tests
          git clone https://github.com/fgulen/amazon-automation
          mvn clean test

## Framework Overview

The cucumber BDD testing framework Using keywords such as Given, When, Then and And, acceptance criteria tests known as feature files can then be broken down into testable steps.
Can be utilized both for UI and Backend Testing

### Cucumber Selenium
Overall testframework leveraging the Cucumber framework with Selenium written in JAVA.

### Feature File
The feature file specifies the steps in BDD language style (`Plain English Language`)

### Utilities Package
In order to keep common methods separate

### Page Object Model
Java class whereby the necessary HTML objects are captured as WebElements to be manipulated by the associated model class to be able to reach and maintain easly


### Reporting plugins
Built in report generation whereby Feature files tested are automatically written to cucumbers own reporting system.

#### Cluecumber-report
#### Cucumber HTML Report
#### Default HTML report
```
To run Report
         mvn clean
         mvn verify => the folders and files will be created as HTML format
```

# Test cases in Gherkin format


```

@Cart @wip
Feature: Amazon quantity and price verification

  Background:Amazon 1
    Given user is on the homepage
    When user searches for "hats for men"


  @quantity @price
  Scenario Outline: Amazon 2
    And user adds first hat appearing(in Stock) to Cart with quantity "<increment>"
    Then verify that total price calculation according to quantity "<increment>" is correct
    When user reduces the quantity to "<decrement>" in the Cart for the item selected
    Then verify that total price calculation according to quantity "<decrement>" is correct
    Examples:
      | increment | decrement |
      | 4         |1         |
