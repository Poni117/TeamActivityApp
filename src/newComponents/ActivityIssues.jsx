import React from "react";

import './styles/ActivityIssues.css';

function ActivityIssues(){

    return (

        <div className="containers" id="issues-container">
            <div>Issues</div>
            <div className="wrapper-datas">
                    <div>Create</div>
                    <div>Open</div>
                    <div>In Progress</div>
                    <div>Done</div>
                    <div>Edits</div>
                    <div>Comments</div>
            </div>
        </div>
    )
}

export default ActivityIssues;