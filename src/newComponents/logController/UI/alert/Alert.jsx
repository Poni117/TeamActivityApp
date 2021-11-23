import React from "react";

import classesses from './Alert.module.css';

function Alert({isAlertExist}){
    
    console.log(isAlertExist)
    return(
        <span >
           {
            isAlertExist
            ? 
            <span id={classesses.Alert}>Incorrect email address and / or password.
            </span>
            :
            <span></span>
           }
        </span>
    )
}

export default Alert;