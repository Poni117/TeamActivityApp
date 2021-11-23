import substr from 'substr';

export default function CountUsersWithoutFIlterProjects(users, projects, workspaces, spaces, dates){

    const usersClone = JSON.parse(JSON.stringify(users));

    usersClone.forEach(async user => {
        
        projects.forEach(async project => {

            project.issues.forEach(async issue => { //count jira issues 

                if(issue.author.accountId === user.accountId && issue.created.substr(0, 10) >= dates.start &&  issue.created.substr(0, 10) <= dates.end){

                    user.actions.issues.actions.numOfCreatedIssues ++;
                    
                    user.actions.issues.numOfIssues ++;
                    
                    user.actions.numOfActions ++;
                }
                
                issue.comments.forEach(async comment => {
                    
                    if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {
                        
                        user.actions.issues.actions.numOfCommentsIssues ++;
                        
                        user.actions.issues.numOfIssues ++;
                        
                        user.actions.numOfActions ++;
                    }
                });

                issue.edits.forEach(async edit => {
                                        
                    if(edit.author.accountId === user.accountId && edit.created.substr(0, 10) >= dates.start &&  edit.created.substr(0, 10) <= dates.end) {
                        user.actions.issues.actions.numOfEditsIssue ++;
                        
                        user.actions.issues.numOfIssues++;
    
                        user.actions.numOfActions ++;
                    }
                });
            })
        });

        workspaces.map(async workspace => {

            workspace.repositories.map(async repository => {
    
                repository.pullRequests.map(async pullRequest => {
                    
                    if(pullRequest.author.accountId === user.accountId && pullRequest.created.substr(0, 10) >= dates.start &&  pullRequest.created.substr(0, 10) <= dates.end) {
                        
                        user.actions.codes.actions.pullRequests.numOfPullRequests ++;
                        
                        user.actions.codes.numOfCodes ++;
                        
                        user.actions.numOfActions ++;
                        
                    }
                    
                    pullRequest.comments.map(async comment => {

                        if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {

                            user.actions.codes.actions.pullRequests.numOfPullRequestsComments ++;
                            
                            user.actions.codes.numOfCodes ++;
                            
                            user.actions.numOfActions ++;
                        }
                    });
                });

                repository.commits.map(async commit => {

                    if(commit.author.accountId === user.accountId && commit.created.substr(0, 10) >= dates.start &&  commit.created.substr(0, 10) <= dates.end) {
                        
                        user.actions.codes.actions.commits.numOfCommits ++;
                        
                        user.actions.codes.numOfCodes ++;
                        
                        user.actions.numOfActions ++;
                    }
                    
                    // commit.comments.map(async comment => {
                      
                    //     if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {

                    //         user.actions.codes.actions.commits.numOfCommitsComments ++;

                    //         user.actions.codes.numOfCodes ++;

                    //         user.actions.numOfActions ++;

                    //     }
                    // });
                });
            });
        });

        spaces.forEach(space => {

            space.pages.forEach(async page => {
                
                if(page.author.accountId === user.accountId && page.created.substr(0, 10) >= dates.start && page.created.substr(0, 10) <= dates.end){

                    user.actions.docs.actions.pages.numOfCreatedPages ++;
    
                    user.actions.docs.numOfDocs ++;

                    user.actions.numOfActions ++;
                }

                page.edits.forEach(edit => {
                   
                    if(edit.author.accountId === user.accountId && edit.created.substr(0, 10) >= dates.start &&  edit.created.substr(0, 10) <= dates.end) {
    
                        user.actions.docs.actions.pages.numOfEditsPeges ++;
    
                        user.actions.docs.numOfDocs ++;
    
                        user.actions.numOfActions ++;

                    }
                });
    
                page.comments.forEach(async comment => {
                    
                    if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {
    
                        user.actions.docs.actions.pages.numOfCommentsPages ++;
    
                        user.actions.docs.numOfDocs ++;
    
                        user.actions.numOfActions ++;

                    }
                });
            });
    
            space.blogs.forEach(async blog => {

                if(blog.author.accountId === user.accountId && blog.created.substr(0, 10) >= dates.start && blog.created.substr(0, 10) <= dates.end){

                    user.actions.docs.actions.blogs.numOfCreatedBlogs ++;
    
                    user.actions.docs.numOfDocs ++;

                    user.actions.numOfActions ++;

                }

                blog.edits.map(edit => {
                    
                    if(edit.author.accountId === user.accountId && edit.created.substr(0, 10) >= dates.start &&  edit.created.substr(0, 10) <= dates.end) {
    
                        user.actions.docs.actions.blogs.numOfEditsBlogs ++;
    
                        user.actions.docs.numOfDocs ++;
    
                        user.numOfActions ++;

                    }
                });
    
                blog.comments.forEach(async comment => {
                    
                    if(comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start &&  comment.created.substr(0, 10) <= dates.end) {
    
                        user.actions.docs.actions.blogs.numOfCommentsBlogs ++;
    
                        user.actions.docs.numOfDocs ++;
                        
                        user.numOfActions ++;
                    }
                });
            });
        });
    })

    return usersClone;
}
