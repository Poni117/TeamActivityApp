import React, { useState } from "react";

import './styles/ActivityRatioCode.css';

function ActivityRatioCode(){
    
    const [style, setStyle] = useState({display: 'none'});
    function OnClick(event){

        if(event.target.checked){
            setStyle({display: ''});
            return;
        }

        setStyle({display: 'none'});

    }

    return (
        <div className="containers" id="codes-container">
                <div>PRs/ratio</div>
                <div className="wrapper-data-statuses" id="codes-label">
                    <div>Merged</div>
                    <div>Avg comments</div>
                    <div>?</div>
                </div>
        </div>
    )
}

export default ActivityRatioCode;