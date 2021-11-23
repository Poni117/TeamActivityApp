import React from "react";

import './styles/ActivityConfluence.css';

function ActivityConfluence(){
    
    return (

        <div className="containers" id="docs-container">
            <div>Confluence</div>
            <div className="wrapper-datas" id="docs-label">
                    <div id='confluence_craete'>Create</div>
                    <div id='confluence_edits'>Edits</div>
                    <div id='confluence_edits_comments'>Comments</div>
            </div>
        </div>
    )
}

export default ActivityConfluence;