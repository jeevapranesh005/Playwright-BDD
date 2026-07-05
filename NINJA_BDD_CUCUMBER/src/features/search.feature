Feature: Search Test
              Description: Search Module using Scenario Outline

        Background:
            Given the user is on the Home page

        Scenario Outline: Search for products valid and invalid
             When user searches for the product "<productName>"
              And user clicks on the search button
             Then the search results for "<productName>" should be displayed or no results message as "<expectedResult>"

        Examples:
                  | productName | expectedResult |
                  | Mac         | valid          |
                  | iPhone      | valid          |
                  | InvalidXYZ  | invalid        |
