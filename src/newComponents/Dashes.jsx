import React, { useEffect, useMemo, useState } from "react";
import { ComposedChart } from "recharts";
import CountActionsProjects from "../countActions/countActionsAtlassian";
import CountActionsUsers from "../countActions/countActionsUsers";
import GetActionsOfEmployees from "../requests/gets/getActionsOfEmployees";
import collectActionsOfEmployees from "../requests/posts/collectActionsOfEmployees";
import getMacketAtlassianProjects from "../tools/getMacketAtlassianProjects";
import getMacketUsers from "../tools/getMacketsUsers";
import getTestUsers from "../tools/getTestUsers";
import defaultDates from "../tools/tools";
import Dashboard from "./dashboard/Dashboard";
import DashStates from "./dashStates/DashStates";
import Dashtable from "./dashtable/Dashtable";
import Filter from "./filter/Filter";
import FilterLocation from "./filterLocation/FilterLocation";
import Loading from "./Loading";

import './styles/Dashes.css';

function Dashes({ switchState, accountId }) {

    const [dates, setDates] = useState(defaultDates());

    const [usersAndProject, setUsersAndProjects] = useState(null);

    const [isCollecting, setIsCollecting] = useState(false);

    const [filterLocation, setFilterLocation] = useState({ issues: { project: 'All', issue: 'All' }, codes: { workspace: 'All', repository: 'All', branch: 'All', pr: 'All' }, docs: { space: 'All', docsType: 'All' } });

    const [searchIsDisabled, setSearchIsDisabled] = useState(false);

    function SetDates(dates) {

        setDates(dates)
    }

    async function SetFilterLocations(value, type) {

        if (type === 'issues') {

            setFilterLocation(prev => ({
                ...prev,
                issues: value
            }
            ))
        }

        if (type === 'codes') {
            console.log(value);

            setFilterLocation(prev => ({
                ...prev,
                codes: value
            }
            ))
        }

        if (type === 'docs') {

            setFilterLocation(prev => ({
                ...prev,
                docs: value
            }
            ))
        }
    }

    async function CollectActivities() {

        collectActionsOfEmployees(accountId);

        setIsCollecting(true);
    }

    async function GetActivities(interval) {

        const activities = await GetActionsOfEmployees(accountId);

        if (activities.isAccessesExist === false || activities.status === 204) {
            return;
        }

        clearInterval(interval)

        setUsersAndProjects(activities);

        setIsCollecting(false);
    }

    function RangeDashChartDates(rangeDates){
        if (usersAndProject === null) {

            return getMacketAtlassianProjects();
        }

        return CountActionsProjects(usersAndProject.projects.issues, usersAndProject.projects.codes, usersAndProject.projects.docs, rangeDates, filterLocation)
    }

    useEffect(() => {
        CollectActivities();
        setIsCollecting(true);
    }, []);

    useEffect(() => {

        if (isCollecting) {
            return;
        }

        setTimeout(CollectActivities, 120000);

    }, [isCollecting]);

    useEffect(() => {

        if (isCollecting === false) {
            return;
        }

        const interval = setInterval(() => {

            GetActivities(interval);
        }, 3000);

    }, [isCollecting]);

    useEffect(() => {

        if (switchState === 'states') {
            setSearchIsDisabled(true);
            return;
        }

        setSearchIsDisabled(false);

    }, [switchState]);

    const usersActivity = useMemo(() => {


        if (usersAndProject === null) {

            return { users: getMacketUsers(), projects: getMacketAtlassianProjects() }
        }
        console.log(dates)

        return {

            users: CountActionsUsers(usersAndProject.users, usersAndProject.projects.issues, usersAndProject.projects.codes, usersAndProject.projects.docs, dates, filterLocation),

            projects: CountActionsProjects(usersAndProject.projects.issues, usersAndProject.projects.codes, usersAndProject.projects.docs, dates, filterLocation)
        }


    }, [usersAndProject, dates, filterLocation]);

    useEffect(() => {

        if (usersAndProject === null) {
            return;
        }

        usersAndProject.projects.codes.forEach(workspace => {

            workspace.repositories.forEach(repository => {

                repository.pullRequests.forEach(pullRequest => {

                    if (pullRequest.title.slice(0, filterLocation.issues.issue.length) !== filterLocation.issues.issue) {
                        return;
                    }
                    setFilterLocation(prev => ({
                        ...prev,
                        codes: {
                            workspace: workspace.workspace,
                            repository: repository.repository,
                            branch: pullRequest.branch,
                            pr: pullRequest.title
                        }
                    }))
                })


            });
        });

    }, [filterLocation.issues]);

    return (
        <div>
            <div id="filters">
                <Filter dates={dates} setDates={SetDates} isDisabled={searchIsDisabled} />
                <FilterLocation locationsList={usersAndProject} filterLocation={filterLocation} setFilterLocation={SetFilterLocations} isDisabled={searchIsDisabled} />

                {isCollecting
                    ? <Loading />
                    : <div></div>
                }
            </div>
            <div id="switch-container">{
                switchState === 'board'
                    ? <Dashboard setDates={SetDates} rangeDashChartDates={RangeDashChartDates} projects={usersActivity.projects} users={usersActivity.users} dates={dates} />
                    : switchState === 'table'
                        ? <Dashtable users={usersActivity.users} locationsList={usersAndProject} setFilterLocation={SetFilterLocations} />
                        : <DashStates users={usersActivity.users} code={usersActivity.projects.codes} locationsList={usersAndProject} setFilterLocation={SetFilterLocations} />
            }</div>
        </div>
    )
}

export default Dashes;