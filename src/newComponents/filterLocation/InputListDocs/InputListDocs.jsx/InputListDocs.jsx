import React, { useEffect, useState } from "react";

import classeses from './InputListDocs.module.css';

function InputListDocs({ locationsList, setFilterLocation, isDisabled}) {

    const [spaces, setSpaces] = useState([]);
    
    const [filter, setFilter] = useState({ spaces: 'All', docType: 'All' });

    function OnChangeSpace(event) {

        if (event.target.value === 'All') {
            setFilter(prev => ({ ...prev, docType: 'All', spaces: 'All' }))
            return;
        }

        setFilter(prev => ({ ...prev, spaces: event.target.value }))
    }

    function OnChangeDocType(event) {

        setFilter(prev => ({ ...prev, docType: event.target.value }))
    }

    useEffect(() => {
        if (locationsList === null) {
            return;
        }
        
        setSpaces(locationsList);

    }, [locationsList]);

    useEffect(() => {

        setFilterLocation(filter, 'docs');

    }, [filter]);

    return (
        <div id={classeses.LocationListDocs}>
            <select name='spaces' className={classeses.select} onChange={OnChangeSpace} disabled={isDisabled}>
                <option disabled>spaces</option>

                <option>All</option>

                {spaces.map(space => (
                    <option key={space.id}>{space.space}</option >
                ))}
            </select>

            <select className={classeses.select} id="location_list_docs" onChange={OnChangeDocType} disabled={isDisabled}>

                <option disabled>DocTypes</option>
                <option>All</option>
                <option>pages</option>
                <option>blogs</option>
            </select>
        </div>
    )
}

export default InputListDocs;