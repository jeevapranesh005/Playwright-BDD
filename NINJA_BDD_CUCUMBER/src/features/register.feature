Feature: Register Test
  Description: Registration Module using JSON and Faker

  Background:
    Given the user is on the Home page
    And user clicks on the myAccount link
    And user clicks on the register link

  Scenario: Valid registration using Faker and JSON data
    When user enters registration details from JSON "valid" and generates random email
    And user accepts the privacy policy
    And user clicks on the continue button
    Then user should be registered successfully

  Scenario: Invalid registration using JSON data
    When user enters registration details from JSON "invalid" and generates random email
    And user clicks on the continue button
    Then error messages should be displayed for mandatory fields
