import withFilter from "./withFilter";
import withoutFilter from "./withoutFilter";

export default function CountUserActionsCodes(user, workspaces, dates, filterLocation) {

    if (filterLocation.workspace === '' || filterLocation.workspace === 'All') {

        return withoutFilter(user, workspaces, dates);
    }

    return withFilter(user, workspaces, dates, filterLocation);
}