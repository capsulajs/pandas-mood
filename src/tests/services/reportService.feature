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


# ReportRequest method calls for and receiving a response with an unknown/invalid 'mood' value


# ReportRequest method calls for a response, the subscription is closed unexpectedly


# ReportRequest method calls for a response, the response includes multiple relatedUsers with an unknown/invalid UserId