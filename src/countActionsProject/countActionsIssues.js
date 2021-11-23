import CountActionsProjectIssueWithoutFilter from "./countActionsProjects/CountActionsProjectIssueWithoutFilter";
import CountActionsProjectWithFilter from "./countActionsProjects/countActionsProjectWithFilter";

export default function CountActionsIssues(projects, dates, filterLocation){


    if (filterLocation.project === 'All') {
        return CountActionsProjectIssueWithoutFilter(projects, dates);
    }

    return CountActionsProjectWithFilter(projects, dates, filterLocation)

}