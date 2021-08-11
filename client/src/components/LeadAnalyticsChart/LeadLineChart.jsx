import "./leadlinechart.css"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function LeadLineChart() {

    const [select, setselect] = useState([{
        leadsource: "Default"
    }])

    const [def, setdefault] = useState([{
        _id: "",
        count: ""
    }])

    const [currmonth, setcurrmonth] = useState([{
        _id: "",
        count: ""
    }])

    const [prevmonth, setprevmonth] = useState([{
        _id: "",
        count: ""
    }])

    const [prevyear, setprevyear] = useState([{
        _id: "",
        count: ""
    }])

    useEffect(() => {
        loaddata();
    },[])

    const loaddata = async () => {
        const welcome = await axios.get(`http://localhost:4000/analysisgetbyyear`);
        setdefault(welcome.data);
        const currentmonthdata = await axios.get(`http://localhost:4000/analysisgetbycurrentmonth`);
        setcurrmonth(currentmonthdata.data);
        const previousmonthdata = await axios.get(`http://localhost:4000/analysisgetbypreviousmonth`);
        setprevmonth(previousmonthdata.data);
        const previousyeardata = await axios.get(`http://localhost:4000/analysisgetbypreviousyear`);
        setprevyear(previousyeardata.data);
    }

    function handle(e) {
        const newselect = { ...select }
        newselect[e.target.name] = e.target.value
        setselect(newselect)
    };

    function filldata() {
        if(select.leadsource === "Default")
        {
            return def
        }
        else if(select.leadsource === "CurrentMonth")
        {
            console.log(currmonth)
            return currmonth
        }
        else if(select.leadsource === "PreviousMonth")
        {
            return prevmonth
        }
        else if(select.leadsource === "PreviousYear")
        {
            return prevyear
        }
        else
        {
            return def
        }
    }


    return (
        <div className="analyticslinechart">
            <div className="charthead">
                <h3 className="linecharttitle">Leads Analytics</h3>
                <div className="selecttemplet">
                    <label className="selectlable">Lead Source</label>
                    <select id="leadsource" name="leadsource" onChange={(e) => handle(e)} value={select.leadsource}>
                        <option value="Default">-Default-</option>
                        <option value="PreviousYear">Previous Year</option>
                        <option value="PreviousMonth">Previous Month</option>
                        <option value="CurrentMonth">Current Month</option>
                        <option value="PreviousQuater">Previous Quater</option>
                        <option value="PreviousWeek">Previous Week</option>
                    </select>
                </div>
            </div>

            <ResponsiveContainer width="100%" aspect={4 / 1} >
                <LineChart data={filldata()}>
                    <XAxis dataKey="_id" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey="count" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

const data = [
    {
        _id: 'Jan',
        count: 2400,
    },
    {
        _id: 'Feb',
        count: 2210,
    },
    {
        _id: 'Mar',
        count: 1750,
    },
    {
        _id: 'Apr',
        count: 2000,
    },
    {
        _id: 'May',
        count: 1500,
    },
    {
        _id: 'Jun',
        count: 2500,
    },
    {
        _id: 'Jul',
        count: 2100,
    },
    {
        _id: 'Aug',
        count: 2500,
    },
    {
        _id: 'Sept',
        count: 2100,
    },
    {
        _id: 'Oct',
        count: 1100,
    },
    {
        _id: 'Nov',
        count: 1600,
    },
    {
        _id: 'Dec',
        count: 1900,
    },
];
