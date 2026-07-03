Feature: login a new user


Feature Description
        Background:
            Given user lanch the application

        Scenario: valid login
             When user click myacclink
              And user click loginlink
              And user enter the email as "johnpeters@gmail.com"
              And user enter the tutorial password as "12345"
              And user click the login tutorial button
             Then user should login success

    