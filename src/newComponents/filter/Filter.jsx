import React, { useEffect, useState } from 'react'

import Button from './UI/button/Button';
import substr from 'substr'
import '../styles/Filter.css';
import defaultDates from '../../tools/tools';

function Filter({dates, setDates, isDisabled}){

    const [currentDate, setCurrentDate] = useState(defaultDates());
    
    useEffect(() => {
        setDates(currentDate);
    }, [currentDate]);


    return (
        <div id='RangeDates'  >
            <input id="start" type='date' name="start" label="Start Date" value={new Date(dates.start).toISOString().substr(0, 10)} disabled={isDisabled} onChange={event => setCurrentDate(prev => ({...prev, start: event.target.value}))}/>
            <input id="end" type='date' name="end" label="End Date"  value={new Date(dates.end).toISOString().substr(0, 10)} disabled={isDisabled} onChange={event => setCurrentDate(prev => ({...prev, end: event.target.value}))}/>
            <Button isDisabled={isDisabled}/>
        </div>
    )
}


export default Filter;