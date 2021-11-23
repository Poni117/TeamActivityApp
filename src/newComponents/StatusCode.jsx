import React, { useState } from "react";

import './styles/ActivityCodes.css';

function StatusCode(){
    
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
                <div>PRs</div>
                <div className="wrapper-data-statuses" id="codes-label">
                    <div>Open</div>
                    <div>Merged</div>
                    <div>Declined</div>
                </div>
        </div>
    )
}

export default StatusCode;