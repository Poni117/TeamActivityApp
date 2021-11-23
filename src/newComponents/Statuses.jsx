import React, { useEffect, useState } from "react";

import './styles/Statuses.css';

function Statuses({ user, code }) {

    const [isTriggerExist, setIsTriggerExist] = useState(false);

    const [numOfAssigned, setNumOfAssigned] = useState(<span></span>);
    const [numOfInProgress, setNumOfInProgress] = useState(<span></span>);
    const [numOfDone, setNumOfDone] = useState(<span></span>);

    const [numOfOpened, setNumOfOpen] = useState(<span></span>);
    const [numOfMerged, setNumOfMerged] = useState(<span></span>);
    const [numOfDeclined, setNumOfDeclined] = useState(<span></span>);

    const [numOfRatioPRToMerged, setNumOfRatioPRToMerged] = useState(<span></span>);
    const [numOfRatioPRToComments, setNumOfRatioPRToComments] = useState(<span></span>);

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

        return Math.ceil(numOfPR / numOfPRCommentsOrMerged * 100) / 100;

    }

    function getPercent(numOfPR, NumOfMerged){

        if (numOfPR === 0 || NumOfMerged === 0) {
            return 0;
        }

        return Math.ceil(numOfPR / NumOfMerged);
    }

    useEffect(() => {

        setNumOfAssigned(prev => Constructor(prev, user.statusInformation.numOfAssigned))

        setNumOfInProgress(prev => Constructor(prev, user.statusInformation.numOfInProgress));

        setNumOfDone(prev => Constructor(prev, user.statusInformation.numOfDone));


        setNumOfMerged(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfOpened));
        
        setNumOfOpen(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfMerged));

        setNumOfDeclined(prev => Constructor(prev, user.actions.codes.actions.pullRequests.numOfDeclined));


        setNumOfRatioPRToMerged(prev => Constructor(prev, getPercent(code.pullRequests.numOfPullRequests, user.actions.codes.actions.pullRequests.numOfMerged + user.actions.codes.actions.pullRequests.numOfDeclined + user.actions.codes.actions.pullRequests.numOfOpened)));
        
        setNumOfRatioPRToComments(prev => Constructor(prev,  ConvertValue(user.actions.codes.actions.pullRequests.numOfPullRequests, user.actions.codes.actions.pullRequests.numOfPullRequestsComments)));


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
                <div>{numOfMerged}</div>
                <div>{numOfOpened}</div>
                <div>{numOfDeclined}</div>
            </div>

            <div className="table-separator"></div>

            <div className='nums-actions-statuses' id='codes-statuses-container'>
                <div>{numOfRatioPRToMerged}%</div>
                <div>{numOfRatioPRToComments}</div>
                <div>{}</div>
            </div>

        </label>
    )
}

export default Statuses;