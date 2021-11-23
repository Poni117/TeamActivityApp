import React, {useMemo } from "react";

import classeses from './Button.module.css';

function Button({setIsDeleteAccount, name}){
   
    const style = useMemo(() => {

        if(name === 'No'){

            return{borderColor: 'rgb(89, 216, 89)'};
        }
     
        return {borderColor: 'rgb(250, 68, 68)'};
    });

    function OnClick(){

        if (name === 'No') {
            setIsDeleteAccount(false);
            return;
        }

        setIsDeleteAccount(true);
    }

    return (
        <button id={classeses.DeleteButon} style={style} onClick={OnClick}>{name}</button>
    )
}

export default Button;