import React, { useEffect, useState } from "react";
import RangesUsers from "../../tools/RangesUsers";
import CardOverallTeam from "../CardOverallTeam/CardOverallTeam";
import CardRange from "../CardRange";
import DashChart from "../DashChart";

import '../styles/Dashboard.css';

function Dashboard({users, projects, dates, rangeDashChartDates, setDates}){

    return (
        <div id='dashboard-scroller' style={{height: window.screen.height - 56 - 220 - 150}}>
            <DashChart setDates={setDates} rangeDashChartDates={rangeDashChartDates} projects={projects} dates={dates}/>
            <div id='cards' > 
              <CardOverallTeam projects={projects}/>
              <CardRange users={RangesUsers(users).slice(0, 3)} label='Top 3'/>
              <CardRange users={RangesUsers(users).slice(users.length - 3)} label='Losers 3'/>
            </div>
        </div>
    )
}

export default Dashboard;