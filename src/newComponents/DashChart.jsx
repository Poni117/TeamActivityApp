import { useEffect, useMemo, useState } from "react";
import { CartesianAxis, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { diffDates } from "../tools/tools";
import substr from 'substr';

import './styles/DashChart.css';

export default function DashChart({ dates, rangeDashChartDates, setDates }) {

    const [data, setData] = useState([]);

    const [rangeDays, setRangeDays] = useState(0);

    useEffect(() => {

        const nextRangeDate = new Date(new Date(dates.end) - rangeDays * (1000 * 60 * 60 * 24));

        const actions = rangeDashChartDates({
            start: dates.start,
            end: dates.end
        });

        setData(prev => [{
            name: new Date(dates.end).toISOString().substr(0, 10),
            Created: actions.codes.pullRequests.numOfPullRequests,
            Merged: actions.codes.pullRequests.numOfMerged,
            IssueCreated: actions.issues.issues.numOfOpen,
            IssueDone: actions.issues.issues.numOfDone
        },
        ...prev]);

    }, []);

    function addRangeDates() {

        if (rangeDays <= 0) {
            return;
        }

        const nextRangeDate = new Date(new Date(dates.start) - rangeDays * (1000 * 60 * 60 * 24));

        const actions = rangeDashChartDates({
            start: nextRangeDate.toISOString().substr(0, 10),
            end: new Date(dates.start).toISOString().substr(0, 10)
        });

        setData(prev => [{
            name: nextRangeDate.toLocaleDateString(),
            Created: actions.codes.pullRequests.numOfPullRequests,
            Merged: actions.codes.pullRequests.numOfMerged,
            IssueCreated: actions.issues.issues.numOfOpen,
            IssueDone: actions.issues.issues.numOfDone
        },
        ...prev
        ]);

        setDates({
            start: nextRangeDate.toISOString().substr(0, 10),
            end: dates.end
        });
    }

    return (
        <div>
            <div >
                <span>rangeDays</span>
                <input id='range-days' type='number' onChange={event => setRangeDays(event.target.value)}></input>
                <button onClick={addRangeDates}>+</button >
            </div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="Created" stroke="blue" />
                <Line type="monotone" dataKey="Merged" stroke="green" />
                <Line type="monotone" dataKey="IssueCreated" stroke="purple" />
                <Line type="monotone" dataKey="IssueDone" stroke="black" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
            </LineChart>
        </div>
    )
}