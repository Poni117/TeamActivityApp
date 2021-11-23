export default function CountActionsPages(space, dates, actions){

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
}