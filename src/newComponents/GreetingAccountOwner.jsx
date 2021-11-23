import { useMemo, useState } from 'react';
import getAccountOwner from '../requests/gets/getAccountOwner';
import GetMacketAccountOwner from '../tools/getMacketAccountOwner';

import './styles/GrreetingAccountOwner.css';


export default function GreetingAccountOwner({setIsGreetingEnd, accountId}){
    
        
    const[accountOwner, setAccountOwner] = useState(GetMacketAccountOwner());

    useMemo(async () => {
        const acc =  await getAccountOwner(accountId)
        
        setAccountOwner(acc);
        
        setTimeout(() => {
            setIsGreetingEnd(true)
        }, 4000);
    
    }, []);


    return(
        <div id="greeting-container" >
            <span id="greeting-text">Welcome</span>
            <img id="image-greeting" src={accountOwner.info.accountAvatar}></img>
            <span id="greeting-name">{accountOwner.info.accountName}</span>
        </div>
    )
}