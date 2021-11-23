import CountIssueWithFilter from "./countIssue/countIssueWithFilter";
import CountIssueWithoutFilter from "./countIssue/CountIssueWithoutFilter";

export default function withFilter(user, projects, dates, filterLocation) {

    projects.forEach(async project => {

        if (project.name !== filterLocation.project) {
            return;
        }

        if (filterLocation.issue === '' || filterLocation.issue === 'All') {

            CountIssueWithoutFilter(user, project, dates)
        }

        CountIssueWithFilter(user, project, dates, filterLocation);
    });
}