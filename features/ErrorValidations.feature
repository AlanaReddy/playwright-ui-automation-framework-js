Feature: Error Validations
@Validations
Scenario: Login with invalid credentials
  Given a login to Ecommerce3 application with "<username>" and "<password>"
  Then Login error message "Incorrect email or password." should be displayed

Examples:
|   username               |   password |
|   alanareddy@gmail.com   | Alana26    |

