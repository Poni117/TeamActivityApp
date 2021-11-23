import React, { useEffect, useState } from "react";
import DonatChart from "../../../DonatChart";

function Version1({projects}){

    const[cursorZone, setCursorZone] = useState('issues');

    const[actionsDisplay, setActionsDisplay] = useState()

    const[pointer, setPointer] = useState([`white`, `white`,` #b794f6`]);

    const[labelPointerIssues, setLabelPointerIssues] = useState();
    const[labelPointerCodes, setLabelPointerCodes] = useState();
    const[labelPointerDocs, setLabelPointerDocs] = useState();

    useEffect(() => {

        if(cursorZone === 'issues'){

        //   setActionsDisplay(<Issues numOfTotalActions={props.numOfTotalActions}/>);

          setPointer([`#b794f6`, `white`,` white`]);


          setLabelPointerIssues({boxShadow: '0px 0px 5px 0px'});
          setLabelPointerCodes({boxShadow: '0px 0px 2px 0px'});
          setLabelPointerDocs({boxShadow: '0px 0px 2px 0px'});
        }

        if(cursorZone === 'codes'){

            // setActionsDisplay(<Codes numOfTotalActions={props.numOfTotalActions}/>);

            setPointer([`white`, `#e98df5`,` white`]);

            setLabelPointerCodes({boxShadow: '0px 0px 5px 0px'});
            setLabelPointerDocs({boxShadow: '0px 0px 2px 0px'});
            setLabelPointerIssues({boxShadow: '0px 0px 2px 0px'});
    
            
        }

        if(cursorZone === 'docs'){

            // setActionsDisplay(<Docs numOfTotalActions={props.numOfTotalActions}/>);

            setPointer([`white`, `white`,`#ffc77d`]);

            setLabelPointerDocs({boxShadow: '0px 0px 5px 0px'});
            setLabelPointerCodes({boxShadow: '0px 0px 2px 0px'});
            setLabelPointerIssues({boxShadow: '0px 0px 2px 0px'});
        }

    }, [cursorZone, projects]);

    const datas = [{

        actions: 'issues',
        num: projects.issues.totalIssues
        },
        {  actions: 'codes',
            num: projects.codes.totalCodes
        },
        {
            actions: 'docs',
            num: projects.docs.totalDocs
        }
    ]

    function OnClickIssues(event){

        setCursorZone('issues');
    }

    function OnClickCodes(event){

        setCursorZone('codes');
    }

    function OnClickDocs(event){

        setCursorZone('docs');
    }

    return (
        <div id="card-info">
            <DonatChart pointer={pointer} colors={[`#b794f6`, `#e98df5`,`#ffc77d`]} projects={projects} setPointer={setPointer} datas={datas} setCursorZone={setCursorZone}/>
                <div id="colors-informations-container">
                    

                <div className='colors-information'>
                    <label className="pointer-label">
                            <svg className='colors' id="color-issues"  style={labelPointerIssues}></svg>
                            <button className="card-overall-btn" id="card-issues-btn" onClick={OnClickIssues} />
                        </label>
                        <span className="card-text">Issues</span>
                    </div>
                    
                    <div className='colors-information'>
                      <label className="pointer-label" >
                        <svg className='colors' id="color-codes" style={labelPointerCodes}></svg>
                        <button className="card-overall-btn" id="card-codes-btn" onClick={OnClickCodes} />

                      </label>
                        <span className="card-text">Code</span>
                    </div>

                    <div className='colors-information'>
                    <label className="pointer-label"  >
                        <svg  className='colors' id="color-docs" style={labelPointerDocs}></svg>
                        <button className="card-overall-btn" id="card-docs-btn" onClick={OnClickDocs} />
                    </label>

                        <span className="card-text">Docs</span>
                    </div>

                    
                </div>
                <div id='actions-dispay'>
                    {actionsDisplay}
                </div>
            </div>
    )
}

export default Version1;