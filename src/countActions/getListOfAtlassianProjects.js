export default function getListOfAtlassianProjects(issues, codes, docs){

    const atlassianProjects = {
        jiraProjects: [],
        bitbacketRepositories: [],
        confluenceSpaces: []
    }

    issues.forEach(async project => {

        atlassianProjects.jiraProjects.push(project.name);

    });

    codes.map(async workspace => {

        workspace.repositories.map(async repository => {

            atlassianProjects.bitbacketRepositories.push(repository);
        });
    });

    docs.forEach(space => {

        atlassianProjects.confluenceSpaces.push(space);
    });
    
    return atlassianProjects;
}
