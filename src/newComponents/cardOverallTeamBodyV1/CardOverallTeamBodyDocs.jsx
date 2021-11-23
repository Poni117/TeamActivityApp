import React from "react"

import '../styles/CardOverallTeamBodyDocs.css';

function CardOverallTeamBodyDocs({projects}){

    return(
        
        <div id="card-body-table-issues">

        <div id="card-body-action-issues-name" className="card-text text-style">Docs</div>
    
        <div id="card-body-issues">
            
            <span className="card-text text-style">Create </span>

            <span className="card-text text-style">Edits</span>

            <span className="card-text text-style">Comments</span>
            
            <span>{projects.docs.pages.numOfCreatedPages + projects.docs.blogs.numOfCreatedBlogs}</span> 

            <span>{projects.docs.pages.numOfPagesEdits + projects.docs.blogs.numOfBlogsEdits}</span>

            <span>{projects.docs.pages.numOfPagesComments + projects.docs.blogs.numOfBlogsComments}</span>
        </div>

    </div>
    )
}

export default CardOverallTeamBodyDocs;