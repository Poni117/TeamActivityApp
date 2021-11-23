import React from 'react'

import classeses from './settingButton.module.css';

function SettingButton({setIsButtonActive}){


    function OnClick(event){
        
        setIsButtonActive(event.target.checked)
    }
    
    return(
        <label id={classeses.SettingButton}>
            <div className={classeses.SettingButtonInner}></div>
            <div className={classeses.SettingButtonInner}></div>
            <div className={classeses.SettingButtonInner}></div>
            <input type="checkbox" style={{display:"none"}} onClick={OnClick}/>
        </label>
    )
}

export default SettingButton;