import React, { useState } from "react";

import './styles/ActivityCodes.css';

function ActivityCodes(){
    
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
                <div className="wrapper-datas" id="codes-label">
                        <div>Create</div>
                        <div>Open</div>
                        <div>Merged</div>
                        <div>Declined</div>
                        <div>Commits</div>
                        <div>Comments</div>
                </div>
        </div>
    )
}

export default ActivityCodes;