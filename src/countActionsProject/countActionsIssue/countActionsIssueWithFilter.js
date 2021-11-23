import substr from 'substr';
import { diffDates } from '../../tools/tools';
export default function CountActionsIssueWithFilter(project, dates, action, filterLocation){

    project.issues.forEach(async issue => { //count jira issues 
                
        if (filterLocation.issue !== issue.key) {
            return;
        }

        if (issue.resolutiondate !== null) {
            action.issues.numOfResolutionsDays = action.issues.numOfResolutionsDays + diffDates(new Date(issue.resolutiondate.substr(0, 10)), new Date(issue.created.substr(0, 10)));
        }

        if (issue.created.substr(0, 10) >= dates.start && issue.created.substr(0, 10) <= dates.end) {

            action.issues.numOfCreatedIssues++

            action.totalIssues++;
        }

        issue.comments.forEach(async comment => {

            if (comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                action.issues.numOfIssuesComments++;

                action.totalIssues++
            }
        });

        issue.edits.forEach(async edit => {

            if (edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                action.issues.numOfEditsIssue++;

                action.totalIssues++
            }
        });

        if(issue.assignee === null){
            return;
        }

        if (issue.status === 'new' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
            action.issues.numOfOpen ++;
        }


        if (issue.status === 'indeterminate' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
            action.issues.numOfInProgress ++;
        }

        if (issue.status === 'done' && issue.updated.substr(0, 10) >= dates.start && issue.updated.substr(0, 10) <= dates.end) {
            action.issues.numOfDone ++;
        }
    })
}