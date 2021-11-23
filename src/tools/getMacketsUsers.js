import avatar from './../assets/SeekPng.com_user-png_730482.png'

export default function getMacketUsers(){
   const users = [{
      "accountAvatar": `${avatar}`,
      "accountName": "Loading...",
      "accountId": "",
      "emailAddress": "",
      "statusInformation": {

         "numOfAssigned": '',
         "numOfInProgress": '',
         "numOfDone": ''
     },
      "actions":{
         "numOfActions": '',
         "codes":{
            "numOfCodes": '',
            "actions":{
               "pullRequests":{
                  "numOfPullRequests": '',
                  "numOfPullRequestsComments": ''
               },
               "commits":{
                  "numOfCommits": '',
                  "numOfCommitsComments": ''
               }
            }
         },
         "issues":{
            "numOfIssues": '',
            "actions":{
               "numOfCreatedIssues": '',
               "numOfEditsIssue": '',
               "numOfCommentsIssues": ''
            }
         },
         "docs":{
            "numOfDocs": '',
            "actions":{
               "pages":{
                  "numOfCreatedPages": '',
                  "numOfEditsPages": '',
                  "numOfCommentsPages": ''
               },
               "blogs":{
                  "numOfCreatedBlogs": '',
                  "numOfEditsBlogs": '',
                  "numOfCommentsBlogs": ''
               }
            }
         }
      }
   }];

   return users;
}