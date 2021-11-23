import LogController from './newComponents/logController/LogController';
import TeamActivity from './newComponents/TeamActivity';
import AccessesController from './newComponents/accessesController/AccessesController';

import './app.css';
import { useEffect, useState } from 'react';

export default function App({accountId}){

    const[style , setStyle] = useState({height: '', backgroundColor: 'white'});

    const[isAccountExist, setIsAccountExist] = useState(false);
     
    const[isAccountAccessesExist, setIsAccountAccessesExist] = useState(false);

    function SetIsAccountExist(newBasicToken){
        
        setIsAccountExist(newBasicToken);
    }
    
    function SetIsAccountAccessesExist(isAccountSuccessfull){
        
        setIsAccountAccessesExist(isAccountSuccessfull);
    }
    
    useEffect(() => {

        const size =  window.screen.height;

        let height = size - 56 - 40 - 150;

        setStyle(prev => ({
            ...prev,
            height: `${height}px`,
        }))

    }, [])

    return(
        <div>
            <div id="atlassian-banner"></div>
            <div id="app-label">Team Activity</div>
            <div id="display-body" style={style}>
                {isAccountExist 
                    ? isAccountAccessesExist
                        ? <TeamActivity accountId={accountId} />
                        : <AccessesController setIsAccountAccessesExist={SetIsAccountAccessesExist}  accountId={accountId}/>
                        
                    :  <LogController SetIsAccountExist={SetIsAccountExist} accountId={accountId}/>
                }
            </div>
        </div>
    )
}