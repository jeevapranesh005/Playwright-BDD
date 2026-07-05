Feature: log in Test
              Description: Login Module using CSV Data

        Background:
            Given the user is on the Home page
              And user clicks on the myAccount link
              And user clicks on the loginlink

        Scenario: Valid login using CSV data
             When user enters valid credentials from CSV
              And user clicks on the login button
             Then user should be login successfully

        Scenario: Invalid login using CSV data
             When user enters invalid credentials from CSV
              And user clicks on the login button
             Then error message invalid username or password should be displayed