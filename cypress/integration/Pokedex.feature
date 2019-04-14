Feature: Pokedex

  I want to open the national pokedex

  Scenario: Opening the pokedex
    Given I open the pokedex
    Then I see a list of 30 pokemons

  Scenario: Paginate the list of pokemons
    Given I open the pokedex
    And I see a list of 30 pokemons 
    When I click on the 'next' button
    Then I see a list of 60 pokemons

  Scenario: Opening the attributes of a pokemon
    Given I open the pokedex
    When I click on a pokemon
    Then I see a list of attributes

  Scenario: Closing the attributes of a pokemon
    Given I open the pokedex
    And I click on a pokemon
    And I see a list of attributes
    When I click on the 'close' button
    Then I do not see a list of attributes
