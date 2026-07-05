Feature: Add Product to Cart

        Background:
            Given the user launches the application

        Scenario: Add Samsung Galaxy S6 to cart

             When the user clicks on "Samsung galaxy s6"
              And the user clicks Add to cart
              And the user accepts the product added alert
              And the user opens the Cart page
             Then the product "Samsung galaxy s6" should be displayed in the cart