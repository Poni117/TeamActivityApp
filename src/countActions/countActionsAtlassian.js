import substr from 'substr';
import CountActionsCode from '../countActionsProject/countActionsCode';
import CountActionsDocs from '../countActionsProject/countActionsDocs';
import CountActionsIssues from '../countActionsProject/countActionsIssues';

export default function CountActionsProjects(projects, workspaces, spaces, dates, filterLocation) {

  

    const issues = CountActionsIssues(projects, dates, filterLocation.issues);

    const codes = CountActionsCode(workspaces, dates, filterLocation.codes);
   
    const docs = CountActionsDocs(spaces, dates, filterLocation.docs);

    return {
        issues,
        codes,
        docs
    }
}
