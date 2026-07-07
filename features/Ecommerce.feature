 Feature: Ecommerce validations
    @Regression
    Scenario Outline: Placing the Order
        Given a login to Ecommerce application with "<username>" and "<password>"
        When Add "ZARA COAT 3" to cart
        Then Verify "ZARA COAT 3" is displayed in the cart
        When Enter the valid details and Place the Order
        Then Verify the order is present in the OrderHistory

Examples: 
|   username               |   password    |
|   alanareddy123@gmail.com|    Alana@2607 |


