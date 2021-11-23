
export default function getMacketTotalActions(){

    const totalActions = {
      status: 'loading',
      "issues":{
         "totalIssues": 0,
         "issues":{
            "numOfIssues": 0,
            "numOfEditsIssue":0,
            "numOfIssuesComments": 0
         }
      },
      "codes":{
         "totalCodes": 0,
         "commits":{
            "numOfCommits": 0,
            "numOfCommitsComments": 0,
         },
         'pullRequests': {
            'numOfPullRequests': 0,
            'numOfOpen': 0,
            'numOfMerged': 0,
            'numOfDeclined': 0,
            'numOfSuperseded': 0,
            'numOfCommits': 0,
            'numOfComments': 0
        }
      },
      "docs":{
         "totalDocs": 0,
         "pages":{
            "numOfPagesEdits": 0,
            "numOfPagesComments": 0
         },
         "blogs":{
            "numOfBlogsEdits": 0,
            "numOfBlogsComments": 0
         }
      }
   }

   return totalActions;
}