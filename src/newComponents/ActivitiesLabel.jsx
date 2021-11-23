import React from "react";
import ActivityCodes from "./ActivityCodes";
import ActivityConfluence from "./ActivityConfluence";
import ActivityIssues from "./ActivityIssues";
import StatusIssues from "./StatusIssues";

import './styles/ActivityLabel.css';

function ActivitiesLabel(){

    return (
            <div id='head-container'>
                
                <div id='head'>

                        <div className="table-separator"></div>

                       <ActivityIssues />

                        <div className="table-separator"></div>

                        <ActivityCodes />

                        <div className="table-separator"></div>
                        
                        {/* <ActivityConfluence /> */}
                </div>
        </div>
    )
}

export default ActivitiesLabel;