
export default function CountBranchesWithoutFilter(user, repository, dates){
    
    repository.pullRequests.map(async pullRequest => {
            
        if(pullRequest.author.accountId === user.accountId && pullRequest.created.substr(0, 10) >= dates.start &&  pullRequest.created.substr(0, 10) <= dates.end) {
            
            user.actions.codes.actions.pullRequests.numOfPullRequests ++;
            
            user.actions.codes.numOfCodes ++;
            
            user.actions.numOfActions ++;
            
        }

        pullRequest.commits.map(async commit => {

            if (commit.author.accountId === user.accountId && commit.created.substr(0, 10) >= dates.start && commit.created.substr(0, 10) <= dates.end) {

                user.actions.codes.actions.pullRequests.numOfCommits++;

                user.actions.codes.numOfCodes++;

                user.actions.numOfActions++;
            }
        });
        
        pullRequest.comments.map(async comment => {

            if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {

                user.actions.codes.actions.pullRequests.numOfPullRequestsComments ++;
                
                user.actions.codes.numOfCodes ++;
                
                user.actions.numOfActions ++;
            }
        });

        if (pullRequest.author.accountId === user.accountId && pullRequest.state === 'OPEN' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end ) {
            user.actions.codes.actions.pullRequests.numOfOpened ++;
        }

        if (pullRequest.author.accountId === user.accountId && pullRequest.state === 'MERGED' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end ) {
            user.actions.codes.actions.pullRequests.numOfMerged ++;
        }

        if (pullRequest.author.accountId === user.accountId && pullRequest.state === 'DECLINED' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end) {
            user.actions.codes.actions.pullRequests.numOfDeclined ++;
        }

        if (pullRequest.author.accountId === user.accountId && pullRequest.state === 'SUPERSEDED' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end) {
            user.actions.codes.actions.pullRequests.numOfSuperseded ++;
        }
    });
}