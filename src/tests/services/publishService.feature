###############################################
#  Pandaton Mood Board Publish Gherkin Tests  #
###############################################

# Here are the tests related to the PublishService using PublishRequest method (later report service also)

# User wishes to publish his 'mood', after login authorId gets a valid UserId
Scenario: a user login with email, he gets a valid UserId
Given     PublishService with PublishRequest method
When      user login successfully
Then      user receives a UserId
And       <UserId> is valid
|UserId 	|
|!(string)  |

Scenario: a user login with email, he gets the correct UserId
Given     PublishService with PublishRequest method
When      user login successfully
Then      user gets a UserId
And       UserId is the correct Id

# User wishes to publish his 'mood', after login authorId gets a non-existent UserId


# User wishes to publish his 'mood', entering mood from the options 0 | 1 | 2 | 3 | 4


# User wishes to publish his 'mood', user writes a message (optional)


# User wishes to publish his 'mood', user uses NEW Hashtag, Hashtag is recorded for future use


# User wishes to publish his 'mood', user mentions another relatedUsers and use a valid UserId


# User wishes to publish his 'mood', user mentions another relatedUsers and use a non-existent UserId