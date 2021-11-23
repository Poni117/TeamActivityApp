import { useEffect, useState } from 'react';

export default function Version2({projects}){

        const[cursorZone, setCursorZone] = useState('comments');

        const[actionsDisplay, setActionsDisplay] = useState()
    
        const[pointer, setPointer] = useState([`white`, `white`,` #ffa822`]);
    
        const[labelPointerComments, setLabelPointerComments] = useState();
        const[labelPointerCreated, setLabelPointerCreated] = useState();
        const[labelPointerEdits, setLabelPointerEdits] = useState();

        const[pieDatas, setPieDatas] = useState([]);
        
        useEffect(() => {
    
            if(cursorZone === 'comments'){
    
            //   setActionsDisplay(<Comments numOfTotalActions={props.numOfTotalActions}/>);
    
              setPointer([`#ffa822`, `white`,` white`]);
    
              setLabelPointerComments({boxShadow: '0px 0px 5px 0px'});
              setLabelPointerCreated({boxShadow: '0px 0px 2px 0px'});
              setLabelPointerEdits({boxShadow: '0px 0px 2px 0px'});
            }
    
            if(cursorZone === 'created'){
    
            //   setActionsDisplay(<Created numOfTotalActions={props.numOfTotalActions}/>);
    
              setPointer([`white`, `rgb(126, 198, 226)`,` white`]);
    
              setLabelPointerCreated({boxShadow: '0px 0px 5px 0px'});
              setLabelPointerEdits({boxShadow: '0px 0px 2px 0px'});
              setLabelPointerComments({boxShadow: '0px 0px 2px 0px'});
            }
    
            if(cursorZone === 'edits'){
    
            //   setActionsDisplay(<Edits numOfTotalActions={props.numOfTotalActions}/>);
    
              setPointer([`white`, `white`,`yellowgreen`]);
    
              setLabelPointerEdits({boxShadow: '0px 0px 5px 0px'});
              setLabelPointerCreated({boxShadow: '0px 0px 2px 0px'});
              setLabelPointerComments({boxShadow: '0px 0px 2px 0px'});
            }

            setPieDatas([{
                actions: 'comments',
                num: projects.numOfTotalActions.issues.issues.numOfIssuesComments +
                projects.numOfTotalActions.codes.commits.numOfCommitsComments + 
                projects.numOfTotalActions.codes.pullRequests.numOfPullRequestsComments +
                projects.numOfTotalActions.docs.pages.numOfPagesComments +
                projects.numOfTotalActions.docs.blogs.numOfBlogsComments
                },
                {   
                  actions: 'created',
                  num: projects.numOfTotalActions.issues.issues.numOfCreatedIssues + 
                  projects.numOfTotalActions.docs.pages.numOfCreatedPages + 
                  projects.numOfTotalActions.docs.blogs.numOfCreatedBlogs
                },
                {
                  actions: 'edits',
                  num: projects.numOfTotalActions.issues.issues.numOfEditsIssue + 
                  projects.numOfTotalActions.docs.pages.numOfPagesEdits + 
                  projects.numOfTotalActions.docs.blogs.numOfBlogsEdits
                }
            ])
        }, [cursorZone, projects]);
        
        function OnClickComments(event){

            setCursorZone('comments');
        }

        function OnClickCreated(event){

            setCursorZone('created');
        }

        function OnClickEdits(event){

            setCursorZone('edits');
        }
    
        return(
            <div id="card-info">
                {/* <Pie pointer={pointer} colors={[`#ffa822`, `skyblue`,` yellowgreen`]} numOfTotalActions={props.numOfTotalActions} setPointer={setPointer} datas={pieDatas} setCursorZone={setCursorZone}/> */}
                <div id="colors-informations-container">

                <div className='colors-information'>
                    <label className="pointer-label">
                            <svg className='colors' id="color-comments"  style={labelPointerComments}></svg>
                            <button className="card-overall-btn" id="card-comments-btn" onClick={OnClickComments} />
                        </label>
                        <span>Comments</span>
                    </div>
                    
                    <div className='colors-information'>
                        <label className="pointer-label" >
                        <svg className='colors' id="color-created" style={labelPointerCreated}></svg>
                        <button className="card-overall-btn" id="card-created-btn" onClick={OnClickCreated} />

                        </label>
                        <span>Created</span>
                    </div>

                    <div className='colors-information'>
                    <label className="pointer-label"  >
                        <svg  className='colors' id="color-edits" style={labelPointerEdits}></svg>
                        <button className="card-overall-btn" id="card-edits-btn" onClick={OnClickEdits} />
                    </label>

                        <span>Edits</span>
                    </div>

                    
                </div>
                <div id='actions-dispay'>
                    {actionsDisplay}
                </div>
            </div>
    )
}