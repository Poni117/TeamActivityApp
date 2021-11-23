export default function CountActionsDocsWithoutFilter(spaces, dates){


    const actions = {

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

    spaces.forEach(space => {

        space.pages.forEach(async page => {

            if (page.created.substr(0, 10) >= dates.start && page.created.substr(0, 10) <= dates.end) {

                actions.pages.numOfCreatedPages++;

                actions.totalDocs++;
            }

            page.edits.forEach(edit => {

                if (edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                    actions.pages.numOfPagesEdits++;

                    actions.totalDocs++;
                }
            });

            page.comments.forEach(async comment => {

                if (comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                    actions.pages.numOfPagesComments++;

                    actions.totalDocs++;
                }
            });
        });

        space.blogs.forEach(async blog => {

            if (blog.created.substr(0, 10) >= dates.start && blog.created.substr(0, 10) <= dates.end) {

                actions.blogs.numOfCreatedBlogs++;

                actions.totalDocs++;
            }

            blog.edits.map(edit => {

                if (edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                    actions.blogs.numOfBlogsEdits++;

                    actions.blogs.totalDocs++;
                }
            });

            blog.comments.forEach(async comment => {

                if (comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                    actions.blogs.numOfBlogsComments++;

                    actions.blogs.totalDocs++;
                }
            });
        });
    });

    return actions;
}