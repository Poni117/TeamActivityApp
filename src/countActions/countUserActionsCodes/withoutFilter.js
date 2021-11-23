import CountRepositoryWithoutFilter from "./countRepository/CountRepositoryWithoutFilter";

export default function withoutFilter(user, workspaces, dates) {

    workspaces.map(async workspace => {

        CountRepositoryWithoutFilter(user, workspace, dates)
    });
}