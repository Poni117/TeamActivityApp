import React, { useState } from 'react';

import Button from './UI/Button/Button';
import DeleteAccount from '../../requests/delete/deleteAccount';

import '../styles/ConfirmDeleteAccount.css';

export default function ConfirmDeleteAccount({setIsDeleteAccount}){

    async function SetIsDeleteAccount(isDelete){

        if(isDelete === false){
            setIsDeleteAccount(false);
            return;
        }

        const isDeleted = await DeleteAccount(localStorage.getItem('basicToken'));

        if(isDeleted){
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('basicToken');
            
            window.location.reload(true);
        }
    }
    
    return (
        <div id="confirm">
            <span id="waring-text">Are you sure you want to delete account?</span>
            <div id="confirm-delete-account">
                <Button setIsDeleteAccount={SetIsDeleteAccount} name='Yes'/>
                <Button setIsDeleteAccount={SetIsDeleteAccount} name='No'/>
            </div>
        </div>
     
    )
}