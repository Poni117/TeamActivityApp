import React from "react";

import Loading from "./Loading";

import './styles/CheckingAccessRightsLabel.css';

function CheckingAccessRightsLabel(){

    return (
        <div id="">
            <span id="btn-shine">Please wait! Checking access rights...</span>
            <Loading />
        </div>
    )
}

export default CheckingAccessRightsLabel;