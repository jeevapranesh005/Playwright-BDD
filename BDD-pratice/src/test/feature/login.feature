Feature: login Feature


Feature Description

        Background:
            Given the user is lanch the website


        Scenario: valid login
             When the user click the loginlink
              And the user enter the username as "john66@gmail.com"
              And the user enter the password as "123456"
              And the user click login button
             Then the user should login succesfull

        Scenario: invalid login
             When the user click the loginlink
              And the user enter the username as "jenny04@gmail.com"
              And the user enter the password as "123huhy456"
              And the user click login button
             Then the user should login fail