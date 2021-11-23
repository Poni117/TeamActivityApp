import React, { useEffect, useState } from "react";

import '../styles/Access.css';

function Access({accessesState, logo, textLabel, textBody, state, type}){

    const[accessColor, setAccessColor] = useState();

    const[accessText, setAccessText] = useState();

    function OpenAccess(){

        if(type === 'jira') {
            window.open(`https://teamactivity.herokuapp.com/access_jira?state=J-${state}`);
        }

        if(type === 'confluence') {
            window.open(`https://teamactivity.herokuapp.com/access_confluence?state=C-${state}`);
        }

        if(type === 'bitbucket') {
            window.open(`https://teamactivity.herokuapp.com/access_bitbucket?state=${state}`);
        }
    }

    useEffect(() => {

        if(accessesState){
            setAccessColor({backgroundColor: 'green'})
            setAccessText('access');
            return;
        }


        setAccessColor({backgroundColor: '#B00020'})
        setAccessText('no-access');

    }, [accessesState]);

    return(
        <label className="label label-access">
            <img 
                className="imgs"
                src={logo}/>

            <span className="text-label">{textLabel}</span>

            <div className="text-body">
            <span>{textBody}</span>
            </div>

            <div className="access" style={accessColor}>{accessText}</div>
            <button id="btn" onClick={OpenAccess}></button>
            
        </label>
    )
}

export default Access