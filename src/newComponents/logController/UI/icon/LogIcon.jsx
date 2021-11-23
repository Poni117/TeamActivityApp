import React from "react";

import classeses from './LogIcon.module.css'

function LogIcon({icon}){
    return (
        <i className={`${icon} ${classeses.logIcon}`}></i>
    )
}

export default LogIcon;