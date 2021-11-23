export default function withoutFilter(user, projects, dates) {

    projects.forEach(async project => {

        project.issues.forEach(async issue => { //count jira issues 
            
            if (issue.author.accountId === user.accountId && issue.created.substr(0, 10) >= dates.start && issue.created.substr(0, 10) <= dates.end) {

                user.actions.issues.actions.numOfCreatedIssues++;

                user.actions.issues.numOfIssues++;

                user.actions.numOfActions++;
            }

            issue.comments.forEach(async comment => {

                if (comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                    user.actions.issues.actions.numOfCommentsIssues++;

                    user.actions.issues.numOfIssues++;

                    user.actions.numOfActions++;
                }
            });

            issue.edits.forEach(async edit => {

                if (edit.author.accountId === user.accountId && edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                    user.actions.issues.actions.numOfEditsIssue++;

                    user.actions.issues.numOfIssues++;

                    user.actions.numOfActions++;
                }
            });

            if( issue.assignee === null){
                return;
            }

            if (issue.assignee.accountId === user.accountId && issue.status === 'new' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
                user.statusInformation.numOfAssigned ++;
            }


            if (issue.assignee.accountId === user.accountId && issue.status === 'indeterminate' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
                user.statusInformation.numOfInProgress ++;
            }

            if (issue.assignee.accountId === user.accountId && issue.status === 'done' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
                user.statusInformation.numOfDone ++;
            }

           
        })

    });
 
}