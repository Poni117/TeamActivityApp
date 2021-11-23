import { useState } from 'react';
import AccountActions from '../accountActions/AccountActions';
import SettingButton from './UI/buttons/settingButton/settingButton';

import ConfirmDeleteAccount from '../ConfirmDeleteAccount/ConfirmDeleteAccount';

import '../styles/Settings.css';

export default function Settings(props){

    const[isButtonActive, setIsButtonActive] = useState(false);

    const[displaySettingState, setDisplaySettingState] = useState({display: 'none'});

    const[isDeleteAccount, setIsDeleteAccount] = useState(false);
    
    function SetIsDeleteAccount(isDelete){
        setIsDeleteAccount(isDelete);
    }

    function SetIsButtonActive(isActive){
        
        if (isActive) {
            setDisplaySettingState({display: ''});
            return;
        }

        setDisplaySettingState({display: 'none'});
    }

    return (
        <div>
            <div id="confirm-space">
                {isDeleteAccount
                    ? <ConfirmDeleteAccount setIsDeleteAccount={SetIsDeleteAccount}/>
                    : <div></div>
                }
            </div>
            <div id="settings-space" style={displaySettingState} >
               <AccountActions setIsDeleteAccount={SetIsDeleteAccount} />
            </div>
            <SettingButton setIsButtonActive={SetIsButtonActive}/>
        </div>
    )
}

