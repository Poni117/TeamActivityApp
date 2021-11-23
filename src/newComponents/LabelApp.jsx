import React from "react";

import './styles/LabelApp.css';

function LabelApp({currentPosition}){

    return (
        <div id='label-app-container'>
            <div id="label_app">
                <h1>Team Activity</h1>
                <span>{currentPosition}</span>
            </div>
        </div>
    )
}

export default LabelApp;