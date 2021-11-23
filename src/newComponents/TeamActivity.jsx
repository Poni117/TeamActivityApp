import React, { useState } from "react";
import Switch from "./Switch/Switch";
import Settings from "./settings/Settings";

import Dashes from "./Dashes";
import './styles/TeamActivity.css';

function TeamActivity({accountId}){

    const[switchState, setSwitchState] = useState('table');

    function SetSwitchState(state){
        setSwitchState(state)
    }

    return(
        <div id="dashes-container">
            <div id="container-logout">
                <Switch setSwitchState={SetSwitchState}/>
                <Settings />
            </div>
            <hr />
            <Dashes switchState={switchState} accountId={accountId}/>
        </div>
    
    )
}

export default TeamActivity;