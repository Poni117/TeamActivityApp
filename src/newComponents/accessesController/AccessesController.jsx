import React, { useEffect, useMemo, useState } from "react";

import GetIsAccessesExist from "../../requests/isAccessesExist/isAccessesExist";
import collectActionsOfEmployees from "../../requests/posts/collectActionsOfEmployees";
import CheckingAccessRightsLabel from "../CheckingAccessRightsLabel";
import GreetingAccountOwner from "../GreetingAccountOwner";
import AccesSignes from "./AccessSignes";

function AccessesController({setIsAccountAccessesExist, accountId}){

    const[state, setState] = useState(null);

    const[accessesState, setAccssesesState] = useState({isJiraAccessExist: false, isConfluenceAccessExist: false, isBitBucketAccessExist: false});
    
    const[isAccessesExist, setIsAccessesExist] = useState(false);

    const[isGreetingEnd, setIsGreetingEnd] = useState(false);

    function SetIsGreetingEnd(isGreetingEnd){
        setIsGreetingEnd(isGreetingEnd);
    }

    useEffect(() => {
        
        let interval =  setInterval(getAccesses, 3000);
         
        async function getAccesses(){
 
            const accesses = await GetIsAccessesExist(accountId);
            
            setAccssesesState(accesses);

            setState(accesses.state);

            if (accesses.isJiraAccessExist && accesses.isConfluenceAccessExist && accesses.isBitBucketAccessExist) {
                
                setIsAccessesExist(true);
                
                clearInterval(interval);
            }

            return accesses;
         }
    }, [])

    useEffect(() => {

        if (isAccessesExist && isGreetingEnd) {

            setIsAccountAccessesExist(true);
        }

    }, [isAccessesExist, isGreetingEnd]);

    return(
        <div>
            {state === null
                ? <CheckingAccessRightsLabel />
                : isAccessesExist
                    ? <GreetingAccountOwner setIsGreetingEnd={SetIsGreetingEnd} accountId={accountId}/>
                    : <AccesSignes state={state} accessesState={accessesState}/>
            }
        </div>
        
    )
}

export default AccessesController;