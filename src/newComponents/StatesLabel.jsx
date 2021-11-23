import React from "react";
import ActivityRatioCode from "./ActivityRatioCode";
import StatusCode from "./StatusCode";
import StatusIssues from "./StatusIssues";

import './styles/StatusesLabel.css';

function StatesLabel(){

    return (
            <div id='head-container'>
                
                <div id='head-statuses'>
                <div className="table-separator"></div>

                        <StatusIssues />

                        <div className="table-separator"></div>

                        <StatusCode />

                        <div className="table-separator"></div>

                        <ActivityRatioCode />
                </div>
        </div>
    )
}

export default StatesLabel;