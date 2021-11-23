import React, { useMemo, useState } from "react";
import Access from "./Access";

import jiraLogo from '../../assets/Logos/JiraLabel.png'
import confluenceLogo from '../../assets/Logos/ConfluenceLabel.png'
import bitbucketLogo from '../../assets/Logos/BitBucketLabel.png';


function AccesSignes({state, accessesState}){
    return(
        <div id="accesses-container">
            <Access accessesState={accessesState.isJiraAccessExist} state={state} type="jira" logo={jiraLogo} textLabel="Jira Software" textBody="Click on the label to authenticate app Team Activity" />
            <Access accessesState={accessesState.isConfluenceAccessExist} state={state} type="confluence" logo={confluenceLogo} textLabel="Confluence" textBody="Click on the label to authenticate app Team Activity"  message= ''/>
            <Access accessesState={accessesState.isBitBucketAccessExist} state={state} type="bitbucket" logo={bitbucketLogo} textLabel="Bitbucket" textBody="Click on the label to authenticate app Team Activity"  message= ''/>
        </div>
    )
}

export default AccesSignes;