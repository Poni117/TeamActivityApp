export default function getMacketAtlassianProjects(){

    const issues = {

        totalIssues: 0,
        issues: {
            numOfCreatedIssues: 0,
            numOfEditsIssue: 0,
            numOfIssuesComments: 0
        }
    }

    const codes = {

        totalCodes: 0,
        commits: {
            numOfCommits: 0,
            numOfCommitsComments: 0
        },
        pullRequests: {
            numOfPullRequests: 0,
            numOfPullRequestsComments: 0
        }
    }

    const docs = {

        totalDocs: 0,
        pages: {
            numOfCreatedPages: 0,
            numOfPagesEdits: 0,
            numOfPagesComments: 0
        },
        blogs: {
            numOfCreatedBlogs: 0,
            numOfBlogsEdits: 0,
            numOfBlogsComments: 0
        },
    }

    return {
        issues,
        codes,
        docs};
}