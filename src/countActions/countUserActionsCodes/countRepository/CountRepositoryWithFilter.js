import CountBranchWithFilter from "../countBranchFithoutFilter/countBranchesWithFilter";
import CountBranchesWithoutFilter from "../countBranchFithoutFilter/countBranchesWithoutFilter";

export default function CountRepositoryWithFilter(user, workspace, dates, filterLocation){
    
    workspace.repositories.map(async repository => {

        if (filterLocation.repository !== repository.repository) {
            return;
        }

        if (filterLocation.branch === '' || filterLocation.branch === 'All') {
            CountBranchesWithoutFilter(user, repository, dates)
            return;
        }
      
        CountBranchWithFilter(user, repository, dates, filterLocation)



        // repository.commits.map(async commit => {

        //     if(commit.author.accountId === user.accountId && commit.created.substr(0, 10) >= dates.start &&  commit.created.substr(0, 10) <= dates.end) {

        // user.actions.codes.actions.commits.numOfCommits ++;

        // user.actions.codes.numOfCodes ++;

        // user.actions.numOfActions ++;
        // }

        // commit.comments.map(async comment => {

        //     if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {

        //         user.actions.codes.actions.commits.numOfCommitsComments ++;

        //         user.actions.codes.numOfCodes ++;

        //         user.actions.numOfActions ++;

        //     }
        // });
        // });
    });
}