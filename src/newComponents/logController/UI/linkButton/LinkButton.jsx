import React from "react";

import classeses from './LinkButton.module.css';

function LinkButton({children, setLogState}){


    function OnClick(){
        if (children === 'registration') {
            setLogState(false);
            return;
        }

        setLogState(true);
    }

    return(
        <button className={classeses.LinkButton} onClick={OnClick}>{children}</button>
    )
}

export default LinkButton;