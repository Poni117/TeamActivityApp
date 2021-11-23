import countActionRepositoryWithFilter from "./countActionsRepositories/countActionRepositoriesWithFilter";
import countActionRepositoryWithoutFilter from "./countActionsRepositories/countActionRepositoriesWithoutFilter";

export default function CountActionsCodeWithFilter(workspaces, dates, filterLocation){

    const actions = {

        totalCodes: 0,
        pullRequests: {
            numOfPullRequests: 0,
            numOfOpen: 0,
            numOfMerged: 0,
            numOfDeclined: 0,
            numOfSuperseded: 0,
            numOfCommits: 0,
            numOfComments: 0
        }
    }

    workspaces.map(async workspace => {

        if (filterLocation.workspace !== workspace.workspace) {
            return;
        }

        if (filterLocation.repository === 'All') {
            
            countActionRepositoryWithoutFilter(workspace, dates, actions);
            return;
        }

       countActionRepositoryWithFilter(workspace, dates, actions, filterLocation)
    });

    return actions;
}