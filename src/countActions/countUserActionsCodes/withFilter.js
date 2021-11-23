import CountRepositoryWithoutFilter from "./countRepository/CountRepositoryWithoutFilter";
import CountRepositoryWithFilter from "./countRepository/CountRepositoryWithFilter";

export default function withFilter(user, workspaces, dates, filterLocation) {

    workspaces.map(async workspace => {

        if (filterLocation.workspace !== workspace.workspace) {
            return;
        }

        if (filterLocation.repository === '' || filterLocation.repository === 'All') {

            CountRepositoryWithoutFilter(user, workspace, dates)
            return;
        }

        CountRepositoryWithFilter(user, workspace, dates, filterLocation);
    });
}