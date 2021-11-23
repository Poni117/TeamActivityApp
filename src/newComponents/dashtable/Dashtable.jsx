import React, { useMemo, useState } from "react";
import Activities from "../Activities";
import ActivitiesLabel from "../ActivitiesLabel";
import FilterLocation from "../filterLocation/FilterLocation";
import Search from "../Search";

import '../styles/DashTable.css';

function Dashtable({users, locationsList, setFilterLocation}){
    
    const[search, setSearch] = useState('');
    
    function SetSearch(search){
        setSearch(search);
    }

    const searched = useMemo(() => {

        if(search === ''){
            return users;
        }

        return [...users].filter(user => user.accountName.toLowerCase().includes(search))
        
    }, [search, users]);
   

    return (
        <div>
            <div id='label-activity'>
                <Search setSearch={SetSearch}/>
                <ActivitiesLabel />
            </div>
            <div id="table-scroll" style={{maxHeight: window.screen.height - 56 - 220 - 150}}>
                {searched.map((user, index) => (
                    
                    <Activities user={user} v-key={index}/>
                ))}
                </div>
        </div>
    )
}

export default Dashtable;