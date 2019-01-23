###############################################
#  Pandaton Mood Board Publish Gherkin Tests  #
###############################################

# Here are the tests related to the PublishService using PublishRequest method

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
Scenario: user login and receive a non-existent UserId
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
  Then    chosen mood will be sent to DB

# User wishes to publish his 'mood', user writes a message (optional)
Scenario: user writes a message for publishing
  Given   PublishService with PublishRequest method
  And     user login successfully
  When    user sends a message for publishing
  Then    message content will be sent to DB

# User wishes to publish his 'mood', user uses NEW Hashtag, Hashtag is recorded for future use
Scenario: user is using an unwritten before hashtag in his 'mood' publishing
  Given   PublishService with PublishRequest method
  And     user login successfully
  When    user sends a message for publishing
  And     message contains a new hashtag
  Then    hashtag will be sent to DB

# User wishes to publish his 'mood', user mentions another user from relatedUsers and use a valid UserId
Scenario: user mentions another registered user
  Given   PublishService with PublishRequest method
  And     user login successfully
  When    user mentions another user in his message
  And     mentioned user is in relatedUsers list of names
  Then    mentioned user will be sent to DB

# User wishes to publish his 'mood', user mentions other userS from relatedUsers and use a valid UserId
Scenario: user mentions other registered users
Given   PublishService with PublishRequest method
And     user login successfully
When    user mentions other users in his message
And     mentioned users are in relatedUsers list of names
Then    mentioned users will be sent to DB

# User wishes to publish his 'mood', user mentions another relatedUsers and use a non-existent UserId
Scenario: user mentions another registered user
  Given   PublishService with PublishRequest method
  And     user login successfully
  When    user mentions another user in his message
  And     mentioned user is not in relatedUsers list of names
  Then    an error message will be received