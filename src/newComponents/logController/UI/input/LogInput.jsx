import React from "react";
import LogIcon from "../icon/LogIcon";

import classeses from './LogInput.module.css'

function LogInput({style, icon, type, placeholder, setLogData, defaultValue}){

    return (

        <div className={classeses.logInput} >
            <LogIcon icon={icon}/>
            <input style={style} type={type} placeholder={placeholder} onChange={e => setLogData(e.target)} defaultValue={defaultValue}></input>
        </div>
    )
}

export default LogInput;