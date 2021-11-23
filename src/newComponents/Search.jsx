import React from "react";

import './styles/Search.css';

function Search({setSearch}){
    
        function onChange(event){

            setSearch(event.target.value);
        }
    
        return (
            <div id="search-container">

                <input id="searchEmployee" label="Search Employee" name="name" placeholder='Search' autocomplete="off" onChange={onChange} />
            </div>
        )
}

export default Search;