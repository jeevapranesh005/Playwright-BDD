Feature: register

        Background:
            Given user navigate to the tutorialsninja website
              And user click the register link

        @smoke
        Scenario: validRegister
             When user enter the first name as "gcfvhbjnk"
              And user enter the last name as "v"
              And user enter the register email as "mmmbybyi9@gmail.com"
              And user enter the telephone as "0987654321"
              And user enter the register password as "0987654321"
              And user enter the confirm password as "0987654321"
              And user select the privacy policy checkbox
              And user click the continue button
             Then user should see the register success message "Your Account Has Been Created!"

        Scenario: invalidRegister without privacy policy
             When user enter the first name as "gcfvhbjnk"
              And user enter the last name as "v"
              And user enter the register email as "we8j9898h8jjij99@gmail.com"
              And user enter the telephone as "0987654321"
              And user enter the register password as "0987654321"
              And user enter the confirm password as "0987654321"
              And user click the continue button
             Then user should see the privacy policy warning message
