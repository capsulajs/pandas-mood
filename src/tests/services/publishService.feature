###############################################
#  Pandaton Mood Board Publish Gherkin Tests  #
###############################################

# Here are the tests related to the PublishService using PublishRequest method (later report service also)

# User wishes to publish his 'mood', after login authorId gets a valid UserId
Scenario: a user login with email, he gets a valid UserId
  Given   PublishService with PublishRequest method
  When    user login successfully
  Then    user receives a UserId
  And     <UserId> is valid
  |UserId 	|
  |!(string)|

Scenario: a user login with email, he gets the correct UserId
  Given   PublishService with PublishRequest method
  When    user login successfully
  Then    user receives a UserId
  And     UserId is the correct Id

# User wishes to publish his 'mood', after login authorId gets a non-existent UserId
Scenario: user tries to publish his 'mood' when getting a non-existent UserId
  Given   PublishService with PublishRequest method
  When    user login successfully
  And     user receives a non-existent UserId
  Then    an error message will be received
  And     user is redirected to the login page

# User wishes to publish his 'mood', entering mood from the options 0 | 1 | 2 | 3 | 4
Scenario: user enters a 'mood' argument from the prepared list of moods
  Given   PublishService with PublishRequest method
  And     user login successfully
  And     list of fixed 'mood' options
  When    user enters a 'mood' <moodOption> from the list
  |moodOption |
  |0          |
  |1          |
  |2          |
  |3          |
  |4          |
  Then    chosen 'mood' will be written to the message
  And     chosen mood will be written to DB

# User wishes to publish his 'mood', user writes a message (optional)


# User wishes to publish his 'mood', user uses NEW Hashtag, Hashtag is recorded for future use


# User wishes to publish his 'mood', user mentions another relatedUsers and use a valid UserId


# User wishes to publish his 'mood', user mentions another relatedUsers and use a non-existent UserId