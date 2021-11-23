import React, { useEffect, useState } from "react";

import classeses from './InputListIssues.module.css';

function InputListIssues({ locationsList, setFilterLocation }) {

    const [projects, setProjects] = useState([]);

    const [issues, setIssues] = useState([]);

    const [filter, setFilter] = useState({ project: 'All', issue: 'All' });

    function OnChangeProject(event) {

        if (event.target.value === 'All') {

            setFilter(prev => ({ ...prev, issue: event.target.value }))
            setIssues([]);
        }

        setFilter(prev => ({ ...prev, project: event.target.value }));

    }

    useEffect(() => {

        if (locationsList === null) {
            return;
        }

        setProjects(locationsList);

    }, [locationsList]);
    
    useEffect(() => {

        setFilterLocation(filter, 'issues');
        
        projects.forEach(project => {

            if(project.name !== filter.project){
                return;
            }

            setIssues(project.issues)
        });

    }, [filter, locationsList]);

    return (
            <div id={classeses.LocationListIssues} >
                <select name='options' className={classeses.select} placeholder="project" onChange={OnChangeProject} >

                    <option disabled>Projects</option>

                    <option>All</option>

                    {projects.map(project => (
                        <option key={project.uuid}>{project.name}</option>
                    ))}

                </select>

                <select name='options' className={classeses.select}  placeholder="issue" onChange={e => setFilter(prev => ({...prev, issue: e.target.value}))}>

                    <option disabled>Issues</option>

                    <option name="all">All</option>

                    {issues.map(issue => (
                        <option  key={issue.uuid}>{issue.key, issue.key}</option>
                    ))}
                </select>
            </div>

    )
}

export default InputListIssues;