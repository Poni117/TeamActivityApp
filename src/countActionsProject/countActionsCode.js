import CountActionsCodeWithFilter from "./countActionsCode/CountActionsCodeWithFilter";
import CountActionsCodeWithoutFilter from "./countActionsCode/CountActionsCodeWithoutFilter";
import CountActionsProjectIssueWithoutFilter from "./countActionsProjects/CountActionsProjectIssueWithoutFilter";
import CountActionsProjectWithFilter from "./countActionsProjects/countActionsProjectWithFilter";

export default function CountActionsCode(workspaces, dates, filterLocation){

    if (filterLocation.workspace === 'All') {
        
        return CountActionsCodeWithoutFilter(workspaces, dates);
    }

    return CountActionsCodeWithFilter(workspaces, dates, filterLocation)

}