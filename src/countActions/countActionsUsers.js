import substr from 'substr';
import CountUserActionsCodes from './countUserActionsCodes/countUserActionsCodes';
import CountUserActionDocs from './countUserActionsDocs/countUserActionsDocs';
import CountUserActionIssues from './countUsersActionsIssues/countUserActionIssues';
import withFilter from './countUsersActionsIssues/withFilter';
import withoutFilter from './countUsersActionsIssues/withoutFIlter';

export default function CountActionsUsers(users, projects, workspaces, spaces, dates, filterLocation){

    const usersClone = JSON.parse(JSON.stringify(users));

    usersClone.forEach(async user => {
        
        CountUserActionIssues(user, projects, dates, filterLocation.issues);

        CountUserActionsCodes(user, workspaces, dates, filterLocation.codes);
        
        CountUserActionDocs(user, spaces, dates, filterLocation.docs)
    })

    return usersClone;
}
