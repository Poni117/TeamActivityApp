import React, { useEffect, useState } from "react";

import classeses from './Dashboard.module.css';

function DashboardButton({setSelect, select}){

    const[selectBorder, setSelectBorder] = useState({backgroundColor: 'gray'});

    useEffect(() => {

        if(select === 'table'){
            setSelectBorder({backgroundColor: 'gray'});
        }

        if(select === 'states'){
            setSelectBorder({backgroundColor: 'gray'});
        }

    }, [select]);

    function OnClickDashboard(){

        setSelect('board');

        setSelectBorder({backgroundColor: '#1976D2'});
        
    }

    return(
        <label className='dash-btn ' id='dashborad-btn' onClick={OnClickDashboard}>
            <div className={classeses.DashboardButtonInner} style={selectBorder}></div>
            <div className={classeses.DashboardButtonInner} style={selectBorder}></div>
            <div className={classeses.DashboardButtonInner} style={selectBorder}></div>
            <div className={classeses.DashboardButtonInner} style={selectBorder}></div>
            <span></span>
         <button></button>
    </label>
    )
}

export default DashboardButton;