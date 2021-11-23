import withFilter from "./withFilter";
import withoutFilter from "./withoutFIlter";

export default function CountUserActionIssues(user, projects, dates, filterLocation) {

    if (filterLocation.project === 'All' || filterLocation.project === '') {

        return withoutFilter(user, projects, dates);

    }

    return withFilter(user, projects, dates, filterLocation)

}