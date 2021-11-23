import React, { useState } from "react";
import Delete from "../delete/Delete";
import Button from "./UI/buttons/Button";


import '../styles/AccountActions.css';
import DeleteAccount from "../../requests/delete/deleteAccount";

function AccountActions({setIsDeleteAccount}){


    function Logout(){
   
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('basicToken');
        
        window.location.reload(true);
    }

    async function Set(event){

      if(event === 'Logout') {
            Logout()
        return;
      }

      if (event === 'Delete Account'){
        setIsDeleteAccount(true)
          
      }
    }

    return(
        <div>

            <div id="account-actions-container">
                <Button set={Set}>Logout</Button>  
                <Button set={Set}>Delete Account</Button>
            </div>
        </div>
       
     
    )
}

export default AccountActions;