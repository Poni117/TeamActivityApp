import React, { useEffect, useState } from "react";

import classeses from './InputListCodes.module.css';

function InputListCodes({ locationsList, setFilterLocation, filterLocation }) {

    const [workspaces, setWorkspaces] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [prs, setPRs] = useState([]);
    const [filter, setFilter] = useState({ workspace: 'All', repository: 'All', branch: 'All', pr: 'All' });

    function OnChangeWorkspace(event) {

        const newObject = JSON.parse(JSON.stringify(filter));
        
        if (event.target.value === 'All') {

            newObject.repositories = event.target.value;
            newObject.branch = event.target.value;
            newObject.pr = event.target.value;

            setRepositories([]);
            setBranches([]);
            setPRs([]);
        }

        newObject.workspace = event.target.value;

        setFilterLocation(newObject, 'codes');

    }

    function OnChangeRepositories(event) {

       const newObject = JSON.parse(JSON.stringify(filter));

        if (event.target.value === 'All') {

            newObject.branch = event.target.value;
            newObject.pr = event.target.value;

            setBranches([]);
            setPRs([]);
        }

        newObject.repository = event.target.value;
        
        setFilterLocation(newObject, 'codes');
    }

    function OnChangeBranch(event){
        const newObject = JSON.parse(JSON.stringify(filter));


        if (event.target.value === 'All') {

            newObject.pr = event.target.value;

            setPRs([]);
        }

        newObject.branch = event.target.value;

        setFilterLocation(newObject, 'codes');

    }

    function OnChangePR(event){

        const newObject = JSON.parse(JSON.stringify(filter));

        newObject.pr = event.target.value;

        setFilterLocation(newObject, 'codes');

    }

    useEffect(() => {

        setWorkspaces(locationsList)
    }, [locationsList]);

    useEffect(() => {

        workspaces.forEach(workspace => {

            if (workspace.workspace !== filterLocation.workspace) {
                return;
            }

            setRepositories(workspace.repositories);
        })
    }, [filterLocation, workspaces]);


    useEffect(() => {

        repositories.forEach(repository => {

            if (repository.repository !== filterLocation.repository) {
                return;
            }

            setBranches(repository.branches);
        })

    }, [filterLocation, repositories]);

    useEffect(() => {

        const pullRequestsArr = [];

        repositories.forEach(repository => {

            if (repository.repository !== filterLocation.repository) {
                return;
            }

            if (filterLocation.branch === 'All') {
                setPRs(repository.pullRequests);
                return;
            }

            repository.pullRequests.forEach(pullRequest => {

                if (pullRequest.branch !== filterLocation.branch) {
                    return;
                }

                pullRequestsArr.push(pullRequest);
            });
        })

        setPRs(pullRequestsArr);

    }, [filterLocation, branches]);

    useEffect(() => {
        setFilter(filterLocation)
    }, [filterLocation]);



    return (
        <div id={classeses.LocationListCode} >
            <select id='workspaces-select' name='options' className={classeses.select} value={filterLocation.workspace} placeholder="workspace" onChange={OnChangeWorkspace}>

                <option disabled>Workspaces</option>

                <option>All</option>

                {workspaces.map(location => (
                    <option name={location.workspace}>{location.workspace}</option>
                ))}

            </select>

            <select id='repository-select' name='options' value={filterLocation.repository} className={classeses.select} onChange={OnChangeRepositories}>

                <option selected disabled hidden>Repositories</option>

                <option name="all">All</option>

                {repositories.map(repository => (
                    <option name={repository.repository} >{repository.repository}</option>
                ))}

            </select>

            <select id='branch-select' name='options' className={classeses.select} value={filterLocation.branch} style={{ width: '50%' }} onChange={OnChangeBranch}>

                <option selected disabled hidden>Branch</option>

                <option name="all">All</option>

                {branches.map(branch => (
                    <option name={branches.name}>{branch.name}</option>
                ))}

            </select>

            <select id='pr-select' name='options' className={classeses.select} style={{ width: '50%' }} value={filterLocation.pr} onChange={OnChangePR}>

                <option selected disabled hidden>PR</option>

                <option name="all">All</option>

                {prs.map(pr => (
                    <option name={pr.title}>{pr.title}</option>
                ))}

            </select>
        </div>

    )
}

export default InputListCodes;