import CountActionsBlogs from "./countActionsBlogs";
import CountActionsPages from "./countActionsPages";

export default function CountActionsDocsWithFilter(spaces, dates, filterLocation) {

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
    console.log(filterLocation)

    spaces.forEach(space => {

        if (filterLocation.spaces !== space.space) {
            return;
        }

        if (filterLocation.docType === 'pages') {

            CountActionsPages(space, dates, actions);
            return;
        }

        if (filterLocation.docType === 'blogs') {

            CountActionsBlogs(space, dates, actions)
            return;
        }

        CountActionsPages(space, dates, actions);

        CountActionsBlogs(space, dates, actions);

    });

    return actions;
}