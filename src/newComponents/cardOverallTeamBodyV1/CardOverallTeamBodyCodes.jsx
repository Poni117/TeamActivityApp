import React from "react";

import '../styles/CardOverallTeamBodyCodes.css';

function CardOverallTeamBodyCodes({projects}){

    return(

        <div id="card-body-table-codes">

        <div id="card-body-action-codes-name" className="card-text text-style">PR</div>
    
        <div id="card-body-codes">
            
            <span className="card-text text-style">Create</span>

            <span className="card-text text-style">Merged </span>

            <span className="card-text text-style">Mutual Aid</span>

            
            <span>{projects.codes.pullRequests.numOfPullRequests}</span>

            <span>{projects.codes.pullRequests.numOfMerged}</span> 

            <span>{projects.codes.pullRequests.numOfComments}</span>

        </div>

    </div>
    )

}

export default CardOverallTeamBodyCodes;