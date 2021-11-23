import CountPullRequestWithFilter from "../countPullRequestWithoutFilter/countPullRequestWithFilter";
import CountPullRequestWithoutFilter from "../countPullRequestWithoutFilter/countPullRequestWithoutFilter";

export default function CountBranchWithFilter(user, repository, dates, filterLocation) {

    repository.pullRequests.map(async pullRequest => {

        if (filterLocation.pr === 'All') {
            CountPullRequestWithoutFilter(user, pullRequest, dates, filterLocation);
            return;
        }

        CountPullRequestWithFilter(user, pullRequest, dates, filterLocation)
    });

}