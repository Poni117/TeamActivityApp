import React from "react";

import './styles/InformationStatusIssues.css';

function StatusIssues(){

    return (
        <div className="containers" id="issues-information-status-container">
        <div>Issues</div>
        <div className="wrapper-datas">
                <div>Open</div>
                <div>In Progress</div>
                <div>Done</div>
        </div>
    </div>)
}

export default StatusIssues;