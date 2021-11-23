import React, { useState } from "react";

import classeses from './Switch.module.css';
import DashboardButton from "./UI/dashbordButton/DashboardButton";
import DashtableButton from "./UI/dashtableButton/DashtableButton";

import DashStatesButton from "./UI/dashStatesButton/dashStatesButton";

import './style/DashSwitch.css';

function Switch({setSwitchState}){

    const[select, setSelect] = useState('table');

    function SetSelect(selected){

        setSelect(selected)
        setSwitchState(selected);
    }
    
    

    return (
        <div id={classeses.Switch}>
            
            <DashboardButton setSelect={SetSelect} select={select}/>

            <DashtableButton setSelect={SetSelect} select={select}/>

            <DashStatesButton setSelect={SetSelect} select={select}/>
            
        </div>
    )
}

export default Switch;