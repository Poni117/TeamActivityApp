import React, { useEffect, useState } from "react";
import DonatChart from "../DonatChart";
import Button from "./UI/button/Button";

import CardOverallTeamBodyIssues from "./CardOverallTeamBodyIssues";
import CardOverallTeamBodyCodes from "./CardOverallTeamBodyCodes";
import CardOverallTeamBodyDocs from "./CardOverallTeamBodyDocs";

import '../styles/CardOverallTeamBodyV1.css';

function CardOverallTeamBodyV1({projects}){

    const colors = [`#b794f6`, `#e98df5`,`#ffc77d`]
    const[cursorZone, setCursorZone] = useState('Issues');

    const[actionsDisplay, setActionsDisplay] = useState()

    const[pointer, setPointer] = useState([`white`, `white`,` #b794f6`]);

    const[isIssuesPointer, setIsIssuesPointer] = useState(true);
    const[isCodesPointer, setIsCodesPointer] = useState(false);
    const[isDocsPointer, setIsDocsPointer] = useState(false);

    useEffect(() => {

        if(cursorZone === 'Issues'){

          setPointer([`#b794f6`, `white`,` white`]);

          setIsIssuesPointer(true);
          setIsCodesPointer(false);
          setIsDocsPointer(false);
        }

        if(cursorZone === 'Codes'){

            setPointer([`white`, `#e98df5`,` white`]);

            setIsCodesPointer(true);
            setIsDocsPointer(false);
            setIsIssuesPointer(false);
            
        }

        if(cursorZone === 'Docs'){

            setPointer([`white`, `white`,`#ffc77d`]);

            setIsDocsPointer(true);
            setIsCodesPointer(false);
            setIsIssuesPointer(false);
        }

    }, [cursorZone, projects]);

    const datas = [{

        actions: 'Issues',
        num: projects.issues.totalIssues
        },
        {  actions: 'Codes',
            num: projects.codes.totalCodes
        },
        {
            actions: 'Docs',
            num: projects.docs.totalDocs
        }
    ]

    return (
        <div id="card-info">
            <DonatChart pointer={pointer} colors={colors} projects={projects} setPointer={setPointer} datas={datas} setCursorZone={setCursorZone}/>
                <div id="colors-informations-container">

                    <Button setCursorZone={setCursorZone} isPointerExist={isIssuesPointer} name={'Issues'} color='#b794f6'/>

                    <Button setCursorZone={setCursorZone} isPointerExist={isCodesPointer} name={'Codes'} color='#e98df5'/>

                    <Button setCursorZone={setCursorZone} isPointerExist={isDocsPointer} name={'Docs'} color='#ffc77d'/>
                    
                </div>
                <div id='actions-dispay'>
                    {isIssuesPointer
                        ?<CardOverallTeamBodyIssues projects={projects}/>
                        : isCodesPointer 
                            ? <CardOverallTeamBodyCodes projects={projects}/>
                            : <CardOverallTeamBodyDocs  projects={projects}/>
                    }
                </div>
            </div>
    )
}

export default CardOverallTeamBodyV1;