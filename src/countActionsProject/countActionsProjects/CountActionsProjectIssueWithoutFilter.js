import { diffDates } from "../../tools/tools";

export default function CountActionsProjectIssueWithoutFilter(projects, dates) {

    const issues = {

        totalIssues: 0,
        issues: {
            numOfCreatedIssues: 0,
            numOfOpen: 0,
            numOfInProgress: 0,
            numOfDone: 0,
            numOfEditsIssue: 0,
            numOfIssuesComments: 0,
            numOfResolutionsDays: 0,
        }
    }

    projects.forEach(project => {

        project.issues.forEach(async issue => { //count jira issues 
            
            if (issue.resolutiondate !== null) {
                issues.issues.numOfResolutionsDays = issues.issues.numOfResolutionsDays + diffDates(new Date(issue.resolutiondate.substr(0, 10)), new Date(issue.created.substr(0, 10)));
            }

            if (issue.created.substr(0, 10) >= dates.start && issue.created.substr(0, 10) <= dates.end) {

                issues.issues.numOfCreatedIssues++

                issues.totalIssues++;
            }

            issue.comments.forEach(async comment => {

                if (comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                    issues.issues.numOfIssuesComments++;

                    issues.totalIssues++
                }
            });

            issue.edits.forEach(async edit => {

                if (edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                    issues.issues.numOfEditsIssue++;

                    issues.totalIssues++
                }
            });

            if(issue.assignee === null){
                return;
            }
    
            if (issue.status === 'new' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
                issues.issues.numOfOpen ++;
            }
    
    
            if (issue.status === 'indeterminate' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
                issues.issues.numOfInProgress ++;
            }
    
            if (issue.status === 'done' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
                issues.issues.numOfDone ++;
            }
        })
    })

    return issues;
}

