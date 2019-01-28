######################################################
#  Pandaton Mood Board Report Service Gherkin Tests  #
######################################################

# Here are the tests related to the Report Service using ReportRequest method

# ReportRequest method calls for and receiving a response
Scenario: ReportRequest method calls for and receiving a valid response from ReportResponse subscription
  Given   ReportService with Report RequestService
  And     ReportResponse subscription
  When    ReportRequest calls ReportResponse
  Then    ReportResponse will emit a response
  And     response will include these <argument>s
  |argument         |
  |postId           |
  |authorId         |
  |authorName       |
  |publicationTime  |
  |mood             |
  |popularity       |
  |relatedUsers     |

# ReportRequest method calls for and NOT receiving a response
Scenario: ReportRequest method calls for and NOT receiving a valid response from ReportResponse subscription
  Given   ReportService with Report RequestService
  And     ReportResponse subscription is not available
  When    ReportRequest calls ReportResponse
  And     no response is received
  Then    an appropriate error message will be received

# ReportRequest method calls for and receiving a response with an unknown/invalid 'mood' value
Scenario: ReportRequest method calls for and receiving a valid response with an unknown 'mood' value
  Given   ReportService with Report RequestService
  And     ReportResponse subscription
  When    ReportRequest calls ReportResponse
  And     response received includes an unknown 'mood' value 99999
  Then    a relevant error will be received

Scenario: ReportRequest method calls for and receiving a valid response with an invalid 'mood' value
  Given   ReportService with Report RequestService
  And     ReportResponse subscription
  When    ReportRequest calls ReportResponse
  And     response received includes an invalid 'mood' value 'Dmitri'
  Then    a relevant error will be received

# ReportRequest method calls for a response, the subscription is closed unexpectedly
Scenario: ReportRequest method calls for a response, the subscription is closed before a response is received
  Given   ReportService with Report RequestService
  And     ReportResponse subscription
  When    ReportRequest calls ReportResponse
  And     subscription is terminated
  Then    a relevant error will be received
  And     user is taken back to login

# ReportRequest method calls for a response, the response includes multiple relatedUsers with an unknown/invalid UserId
Scenario: ReportRequest method calls for and receiving a valid response including multiple relatedUsers with ONE unknown UserId value
  Given   ReportService with Report RequestService
  And     ReportResponse subscription
  When    ReportRequest calls ReportResponse
  And     response received includes an unknown 'UserId' value 99999
  Then    relatedUsers list will be received
  And     unknown UserId is ignored
  And     a relevant error will be received

Scenario: ReportRequest method calls for and receiving a valid response including multiple relatedUsers with ONE invalid UserId value
  Given   ReportService with Report RequestService
  And     ReportResponse subscription
  When    ReportRequest calls ReportResponse
  And     response received includes an invalid 'UserId' value 'Dmitri'
  Then    relatedUsers list will be received
  And     invalid UserId is ignored
  And     a relevant error will be received