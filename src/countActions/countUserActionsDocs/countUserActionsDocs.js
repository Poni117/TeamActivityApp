import withFilter from "./withFilter.js";
import withoutFilter from "./withoutFilter.js";

export default function CountUserActionDocs(users, projects, dates, filterLocation) {


    if (filterLocation.spaces === '' || filterLocation.spaces === 'All') {

        return withoutFilter(users, projects, dates, filterLocation);
    }

    return withFilter(users, projects, dates, filterLocation);
}