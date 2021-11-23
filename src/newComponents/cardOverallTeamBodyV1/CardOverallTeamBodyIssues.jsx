import React from "react";

import '../styles/CardOverallTeamBodyIssues.css';

export default function CardOverallTeamBodyIssues({projects}){

    return( 
        <div id="card-body-table-issues">

        <div id="card-body-action-issues-name" className="card-text text-style">Issues</div>
    
        <div id="card-body-issues">
            
            <span className="card-text text-style">Create </span>

            <span className="card-text text-style">Done</span>

            <span className="card-text text-style">Execute Days</span>
            
            <span>{projects.issues.issues.numOfCreatedIssues}</span> 

            <span>{projects.issues.issues.numOfDone}</span>

            <span>{projects.issues.issues.numOfResolutionsDays}</span>
        </div>

    </div>
    )
}
