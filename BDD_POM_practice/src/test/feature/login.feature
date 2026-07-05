Feature:login with valid details

Feature Description
        Background:
            Given the user  is launchthe application

        Scenario: login with valid details
             When the user click the loginLink
              And the user enter the valid details
              And the user click the loginBtn
             Then the user seen the welcom page
            
        Scenario Outline:login with invalid details
             When the user click the loginLink
              And  the user enter the user name as "<username>"
              And the user enter the password as "<password>"
              And the user click the loginBtn
             Then the user seen the fail message

        Examples:
                  | username | password |
                  | jeeva    | dfui7b   |
                  | john     | peter456 |
