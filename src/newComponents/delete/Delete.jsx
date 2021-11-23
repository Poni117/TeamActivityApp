import React, { useEffect, useState } from "react";
import Button from "./UI/button/Button";


import '../styles/Delete.css';

function Delete(){


    function IsClicked(isCliked){
        console.log(isCliked)
    }
    return (
        <div>
        
            <div id='delete-container'>
                <Button isClicked={IsClicked}></Button>
            </div>
        </div>
    )
}

export default Delete;