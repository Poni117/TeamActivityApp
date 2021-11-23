export default function withFilter(user, spaces, dates, filterLocation) {

    spaces.forEach(space => {

        if (filterLocation.spaces !== space.space) {
            return;
        }

        space.pages.forEach(async page => {

            if (filterLocation.docType === 'blogs') {
                return
            }

            if (page.author.accountId === user.accountId && page.created.substr(0, 10) >= dates.start && page.created.substr(0, 10) <= dates.end) {

                user.actions.docs.actions.pages.numOfCreatedPages++;

                user.actions.docs.numOfDocs++;

                user.actions.numOfActions++;
            }

            page.edits.forEach(edit => {

                if (edit.author.accountId === user.accountId && edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                    user.actions.docs.actions.pages.numOfEditsPages++;

                    user.actions.docs.numOfDocs++;

                    user.actions.numOfActions++;

                }
            });

            page.comments.forEach(async comment => {

                if (comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                    user.actions.docs.actions.pages.numOfCommentsPages++;

                    user.actions.docs.numOfDocs++;

                    user.actions.numOfActions++;

                }
            });
        });

        space.blogs.forEach(async blog => {

            if (filterLocation.docType === 'pages') {
                return;
            }

            if (blog.author.accountId === user.accountId && blog.created.substr(0, 10) >= dates.start && blog.created.substr(0, 10) <= dates.end) {

                user.actions.docs.actions.blogs.numOfCreatedBlogs++;

                user.actions.docs.numOfDocs++;

                user.actions.numOfActions++;

            }

            blog.edits.map(edit => {

                if (edit.author.accountId === user.accountId && edit.created.substr(0, 10) >= dates.start && edit.created.substr(0, 10) <= dates.end) {

                    user.actions.docs.actions.blogs.numOfEditsBlogs++;

                    user.actions.docs.numOfDocs++;

                    user.numOfActions++;

                }
            });

            blog.comments.forEach(async comment => {

                if (comment.author.accountId === user.accountId && comment.created.substr(0, 10) >= dates.start && comment.created.substr(0, 10) <= dates.end) {

                    user.actions.docs.actions.blogs.numOfCommentsBlogs++;

                    user.actions.docs.numOfDocs++;

                    user.numOfActions++;
                }
            });
        });
    });
}