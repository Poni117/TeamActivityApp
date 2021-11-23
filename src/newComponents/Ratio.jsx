import React, { useEffect, useState } from "react";

import './styles/Statuses.css';

function Ratio({ user }) {

    const [isTriggerExist, setIsTriggerExist] = useState(false);

    const [numOfPullRequests, setNumOfPullRequests] = useState(<span></span>);

    const [numOfAssigned, setNumOfAssigned] = useState(<span></span>);
    const [numOfInProgress, setNumOfInProgress] = useState(<span></span>);
    const [numOfDone, setNumOfDone] = useState(<span></span>);

    const [numOfOpened, setNumOfOpen] = useState(<span></span>);
    const [numOfMerged, setNumOfMerged] = useState(<span></span>);
    const [numOfDeclined, setNumOfDeclined] = useState(<span></span>);

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

    function ConvertValue(numOfPR, numOfPRCommentsOrMerged){

        if (numOfPR === 0 || numOfPRCommentsOrMerged === 0) {
            return 0;
        }

        return Math.ceil(numOfPR /  numOfPRCommentsOrMerged * 100) / 100;

    }

    function getPercent(numOfPR, numOfPRCommentsOrMerged){

        if (numOfPR === 0 || numOfPRCommentsOrMerged === 0) {
            return 0;
        }

        return  Math.ceil(numOfPRCommentsOrMerged / numOfPR * 100);
    }

    useEffect(() => {


        setNumOfAssigned(prev => Constructor(prev, user.statusInformation.numOfAssigned))

        setNumOfInProgress(prev => Constructor(prev, user.statusInformation.numOfInProgress));

        setNumOfDone(prev => Constructor(prev, user.statusInformation.numOfDone));


        setNumOfPullRequests(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfPullRequests));

        
        setNumOfMerged(prev => Constructor(prev, getPercent(user.actions.codes.actions.pullRequests.numOfPullRequests, user.actions.codes.actions.pullRequests.numOfMerged)));
        
        setNumOfOpen(prev => Constructor(prev,  ConvertValue(user.actions.codes.actions.pullRequests.numOfPullRequests, user.actions.codes.actions.pullRequests.numOfPullRequestsComments)));

        setNumOfDeclined(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfDeclined));

    }, [user]);


    return (
        <label id='body-statuses' >

            <div id='account-container'>
                <span id="img-container">
                    <img id="image" src={user.accountAvatar} alt="" />
                </span>

                <span className="text-style" id="account-name">{user.accountName}</span>
            </div>

            <div className="table-separator"></div>

            <div className='nums-actions' id='issues-datas-container'>
                {numOfAssigned}
                {numOfInProgress}
                {numOfDone}
            </div>

            <div className="table-separator"></div>

            <div className='nums-actions-statuses' id='codes-statuses-container'>
                <div>{numOfMerged}%</div>
                <div>{numOfOpened}</div>
            </div>
        </label>
    )
}

export default Statuses;