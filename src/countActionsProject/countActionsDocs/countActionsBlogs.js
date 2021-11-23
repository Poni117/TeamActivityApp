export default function CountActionsBlogs(space, dates, actions){

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
}