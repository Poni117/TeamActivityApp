import React, { useEffect, useState } from "react";

import classeses from './dashStatesButton.module.css';

function DashStatesButton({setSelect, select}){

    const[selectBorder, setSelectBorder] = useState({backgroundColor: '#1976D2'});

    useEffect(() => {

        console.log(select)
        if(select === 'board'){
            setSelectBorder({backgroundColor: 'gray'});
        }

        if(select === 'table'){
            setSelectBorder({backgroundColor: 'gray'});
        }

    }, [select]);

    function OnClickDashtable(){

        setSelect('states')
        setSelectBorder({backgroundColor: '#1976D2'});

        // props.setTap("dashtable");
    }

    return (
        <label className='dash-btn'  id='dashState-btn'  onClick={OnClickDashtable}>
            <div className={classeses.DashStateButtonInner} style={selectBorder}></div>
            <div className={classeses.DashStateButtonInner} style={selectBorder}></div>
            <div className={classeses.DashStateButtonInner} style={selectBorder}></div>
            <div className={classeses.DashStateButtonInner} style={selectBorder}></div>
            <button></button>
        </label>
    )
}

export default DashStatesButton;