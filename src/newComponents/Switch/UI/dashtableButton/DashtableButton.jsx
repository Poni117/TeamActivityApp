import React, { useEffect, useState } from "react";

import classeses from './DashtableButton.module.css';

function DashtableButton({setSelect, select}){

    const[selectBorder, setSelectBorder] = useState({backgroundColor: '#1976D2'});

    useEffect(() => {

        if(select === 'board'){
            setSelectBorder({backgroundColor: 'gray'});
        }

        if(select === 'states'){
            setSelectBorder({backgroundColor: 'gray'});
        }

    }, [select]);

    function OnClickDashtable(){

        setSelect('table')
        setSelectBorder({backgroundColor: '#1976D2'});

        // props.setTap("dashtable");
    }

    return (
        <label className='dash-btn'  id='dashtable-btn'  onClick={OnClickDashtable}>
            <div className={classeses.DashtableButtonInner} style={selectBorder}></div>
            <div className={classeses.DashtableButtonInner} style={selectBorder}></div>
            <div className={classeses.DashtableButtonInner} style={selectBorder}></div>
            <button></button>
        </label>
    )
}

export default DashtableButton;