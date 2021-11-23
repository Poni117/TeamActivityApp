import React, { useEffect, useState } from "react";

import './styles/Activities.css';

function Activities({ user }) {

    const [isTriggerExist, setIsTriggerExist] = useState(false);

    const [numOfCreatedIssues, setNumOfCreatedIssues] = useState(<span></span>);
    const [numOfEditsIssue, setNumOfEditsIssue] = useState(<span></span>);
    const [numOfCommentsIssues, setNumOfCommentsIssues] = useState(<span></span>);

    const [numOfAssigned, setNumOfAssigned] = useState(<span></span>);
    const [numOfInProgress, setNumOfInProgress] = useState(<span></span>);
    const [numOfDone, setNumOfDone] = useState(<span></span>);

    
    const [numOfPullRequests, setNumOfPullRequests] = useState(<span></span>);
    const [numOfCommits, setNumOfCommits] = useState(<span></span>);
    const [numOfCodesComments, setNumOfCodesComments] = useState(<span></span>);

    const [numOfOpened, setNumOfOpen] = useState(<span></span>);
    const [numOfMerged, setNumOfMerged] = useState(<span></span>);
    const [numOfDeclined, setNumOfDeclined] = useState(<span></span>);


    const [numOfCreatedDocs, setNumOfCreatedDocs] = useState(<span></span>);
    const [numOfEditsDocs, setNumOfEditsDocs] = useState(<span></span>);
    const [numOfDocsComments, setNumOfDocsComments] = useState(<span></span>);

    function Constructor(prev, num) {

        if (num === '') {
            return prev;
        }

        if (prev.props.children !== num && isTriggerExist == false) {
            setIsTriggerExist(true);
            return <span>{num}</span>
        }

        if (prev.props.children !== num && isTriggerExist) {
            return <span className='updated-num'>{num}</span>
        }


        return <span className='same-num'>{prev.props.children}</span>
    }

    useEffect(() => {

        setNumOfCreatedIssues(prev => Constructor(prev, user.actions.issues.actions.numOfCreatedIssues))

        setNumOfEditsIssue(prev => Constructor(prev, user.actions.issues.actions.numOfEditsIssue));

        setNumOfCommentsIssues(prev => Constructor(prev, user.actions.issues.actions.numOfCommentsIssues));

        setNumOfAssigned(prev => Constructor(prev, user.statusInformation.numOfAssigned))

        setNumOfInProgress(prev => Constructor(prev, user.statusInformation.numOfInProgress));

        setNumOfDone(prev => Constructor(prev, user.statusInformation.numOfDone));

        
        setNumOfPullRequests(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfPullRequests));

        setNumOfCommits(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfCommits));

        setNumOfCodesComments(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfPullRequestsComments));

        setNumOfMerged(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfMerged));
        
        setNumOfOpen(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfOpened));

        setNumOfDeclined(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfDeclined));

        setNumOfCreatedDocs(prev => Constructor(prev, user.actions.docs.actions.pages.numOfCreatedPages + user.actions.docs.actions.blogs.numOfCreatedBlogs));

        
        setNumOfEditsDocs(prev => Constructor(prev, user.actions.docs.actions.pages.numOfEditsPages + user.actions.docs.actions.blogs.numOfEditsBlogs));

        setNumOfDocsComments(prev => Constructor(prev, user.actions.docs.actions.pages.numOfCommentsPages + user.actions.docs.actions.blogs.numOfCommentsBlogs));

    }, [user]);


    return (
        <label id='body' >

            <div id='account-container'>
                <span id="img-container">
                    <img id="image" src={user.accountAvatar} alt="" />
                </span>

                <span className="text-style" id="account-name">{user.accountName}</span>
            </div>

            <div className="table-separator"></div>

            <div className='nums-actions' id='issues-datas-container'>
                {numOfCreatedIssues}
                {numOfAssigned}
                {numOfInProgress}
                {numOfDone}
                {numOfEditsIssue}
                {numOfCommentsIssues}
            </div>

            <div className="table-separator"></div>

            <div className='nums-actions' id='codes-datas-container'>
                {numOfPullRequests}
                {numOfOpened}
                {numOfMerged}
                {numOfDeclined}
                {numOfCommits}
                {numOfCodesComments}
            </div>

            <div className="table-separator"></div>

            {/* <div className='nums-actions' id='docs-datas-container'>
                {numOfCreatedDocs}
                {numOfEditsDocs}
                {numOfDocsComments}
            </div> */}
        </label>
    )
}

export default Activities;