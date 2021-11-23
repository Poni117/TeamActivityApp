
export default function CountActionsCodeWithoutFilter(workspaces, dates){

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

        workspace.repositories.map(async repository => {

            repository.pullRequests.map(async pullRequest => {


                if (pullRequest.created.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end) {

                    actions.pullRequests.numOfPullRequests++;

                    actions.totalCodes++;
                }

                pullRequest.commits.map(async commit => {

                    if (commit.created.substr(0, 10) >= dates.start && commit.created.substr(0, 10) <= dates.end) {
        
                        actions.pullRequests.numOfCommits++;
        
                        actions.totalCodes++;
                    }
                });
                
                pullRequest.comments.map(async comment => {


                    if (comment.created.substr(0, 10) < dates.start || comment.created.substr(0, 10) > dates.end || comment.comment === '') {
                        return
                    }

                    actions.pullRequests.numOfPullRequestsComments++;

                    actions.totalCodes++;
                });

                if (pullRequest.state === 'OPEN' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end ) {
                    actions.pullRequests.numOfOpen ++;
                }
    
                if (pullRequest.state === 'MERGED' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end ) {
                    actions.pullRequests.numOfMerged ++;
                }
    
                if (pullRequest.state === 'DECLINED' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end) {
                    actions.pullRequests.numOfDeclined ++;
                }
    
                if (pullRequest.state === 'SUPERSEDED' && pullRequest.updated.substr(0, 10) >= dates.start && pullRequest.created.substr(0, 10) <= dates.end) {
                    actions.pullRequests.numOfSuperseded ++;
                }
            });
        });
    });

    return actions;

}