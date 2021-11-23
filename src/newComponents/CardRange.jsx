import React from "react";

import './styles/CardRange.css';

function CardRange({users, label}){

    return(

        <div className='card' id='card-range'>
            
            <text className='card-label'>{label}</text>

            <div className = "card-body-container">
                
                <div className="card-body">

                    <div id="card-action-label-container">

                        <div id="card-action-account-label">

                        </div>

                        <div id="card-action-label">
                            <span className="text-style">Issues</span>
                            <span className="text-style">Code</span>
                            <span className="text-style">Docs</span>
                        </div>
                        </div>

                        {users.map(user => (

                        <div className="card-account-container">

                            <div className="card-user-account-information">

                                <img className="image account-avatar card-text" src={user.accountAvatar}/>
                                <span className="account-name card-text text-style">{user.accountName}</span>
                            </div>

                                <div className="card-user-account-actions">
                                    <div className="account-name  text-style">{
                                        user.actions.issues.numOfIssues 
                                    }
                                    </div>

                                    <div className="account-name  text-style">{
                                        user.actions.codes.numOfCodes 
                                    }
                                    </div>

                                    <div className="account-name text-style">{
                                        user.actions.docs.numOfDocs 
                                    }
                                    </div>
                                </div>

                                
                        </div>
                    ))}  
                </div>
            </div>
        </div>
    )
}

export default CardRange;