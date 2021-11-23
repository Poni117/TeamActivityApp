import React, { useEffect, useState } from "react";

import InputListIssues from "./InputListIssues/InputListIssues";
import InputListCodes from "./InputListCodes/InputListCodes.jsx/InputListCodes";
import InputListDocs from "./InputListDocs/InputListDocs.jsx/InputListDocs";

import '../styles/FilterLocation.css';

function FilterLocation({locationsList, filterLocation, setFilterLocation, isDisabled}){
    
    const[projects, setProjects] = useState({issues: [{name: '',issues: []}], codes: [{workspace: '', repositories: []}], docs: [{name: '', spaces: []}]});

    useEffect(() => {
        if (locationsList === null) {
            return;
        }

        setProjects({
            issues: locationsList.projects.issues,
            codes: locationsList.projects.codes,
            docs: locationsList.projects.docs
        })
        
    }, [locationsList]);

    return(
        <div id='filter_location'>
            <div className="table_seporator" ></div>
            <InputListIssues locationsList={projects.issues} setFilterLocation={setFilterLocation}/>
            <div className="table_seporator"></div>
            <InputListCodes  locationsList={projects.codes} filterLocation={filterLocation.codes} setFilterLocation={setFilterLocation}/>
            <div className="table_seporator"></div>
            <InputListDocs locationsList={projects.docs} setFilterLocation={setFilterLocation} isDisabled={isDisabled}/>
        </div>
    )
}

export default FilterLocation;