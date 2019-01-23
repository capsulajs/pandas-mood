Scenario: Send the input without selecting a mood
    Given Input page
    And   I am login
    And   I have some mood icons provided
    And   I didn't choose any mood
    When  I press send button
    Then  The error message 'Come on, select a mood' occurs

Scenario: Send the input by selecting a mood
    Given Input page
    And   I am login
    And   I have some mood icons provided
    And   I choose one of the moods
    When  I press send button
    Then  The message of successful sending is displaying

Scenario: Check switching between mood icons
    Given Input page
    And   I am login
    And   I have some mood icons provided
    And   I have selected mood icon 1
    And   The border of mood icon 1 is dark
    When  I click on mood icon 2
    Then  The mood icon 2 is selected
    And   The border of mood icon 2 is dark
    And   The mood icon 1 is unselected
    And   The border of mood icon 1 is not displayed

Scenario: Check mood icons to be in increasing ordered of happiness
    Given Input page
    And   I am login
    When  I have some mood icons provided
    Then  The mood icons are ordered in increasing ordered of happiness

Scenario: The suggestion dropdown appears while typing a hash-tag
    Given Input page
    And   I am login
    And   I am on message field
    When  I start typing a hash-tag
    Then  A full list of existing suggestions is displaying below the hash-tag

Scenario: The suggestion dropdown appears while typing a relatedUser
    Given Input page
    And   I am login
    And   I am on message field
    When  I start typing a relatedUser
    Then  A full list of existing suggestions is displaying below

Scenario: Check the style of a hash-tag
    Given Input page
    And   I am login
    And   I am on message field
    When  I type a hash-tag
    Then  The text become bold

Scenario: Check the style of a relatedUser
    Given Input page
    And   I am login
    And   I am on message field
    When  I type a relatedUser
    Then  The text become blue colored
