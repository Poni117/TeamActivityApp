import CountActionsIssueWithFilter from "../countActionsIssue/countActionsIssueWithFilter";
import CountActionsIssueWithoutFilter from "../countActionsIssue/countActionsIssueWithoutFilter";

export default function CountActionsProjectWithFilter(projects, dates, filterLocation){
   
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

        if (filterLocation.project !== project.name) {
            return;
        }

        if (filterLocation.issue === 'All') {
            CountActionsIssueWithoutFilter(project, dates, issues);
            return;
        }

       CountActionsIssueWithFilter(project, dates, issues, filterLocation)
    });

    return issues;
}