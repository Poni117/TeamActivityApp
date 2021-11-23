import React, { useState } from "react";
import Version2 from "./UI/version2/Version2";

import CardOverallTeamBodyV1 from "../cardOverallTeamBodyV1/CardOverallTeamBodyV1";


import '../styles/CardOverallTeam.css';

function CardOverallTeam({projects}){

    const[pointer, setPointer] = useState('version1');

    return (
            <div className='card'>
    
            <text className='card-label'>OVERALL TEAM WORK</text>
    
            <div id="overall-switcher-container">
                {/* <button className="overall-switch" onClick={OnClickOne}></button>
                <button className="overall-switch" onClick={OnClickTwo}></button> */}
            </div>
    
                <div className="card-body-container">
                    {pointer === 'version1'
                        ?<CardOverallTeamBodyV1 projects={projects}/>
                        :<Version2  projects={projects}/>
                    }
                </div>
        </div>
    )
}

export default CardOverallTeam;