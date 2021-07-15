import "./linechart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Linechart() {

    const data = [
        {
          name: 'Jan',
          amt: 2400,
        },
        {
          name: 'Feb',
          amt: 2210,
        },
        {
          name: 'Mar',
          amt: 1750,
        },
        {
          name: 'Apr',
          amt: 2000,
        },
        {
          name: 'May',
          amt: 1500,
        },
        {
          name: 'Jun',
          amt: 2500,
        },
        {
          name: 'Jul',
          amt: 2100,
        },
        {
           name: 'Aug',
           amt: 2500,
        },
        {
            name: 'Sept',
            amt: 2100,
        },
        {
            name: 'Oct',
            amt: 1100,
        },
        {
            name: 'Nov',
            amt: 1600,
        },
        {
            name: 'Dec',
            amt: 1900,
        },
      ];

    return (
        <div className="linechart">
            <h3 className="linecharttitle">Finalized Deals per Month</h3>
            <ResponsiveContainer  aspect={3 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <YAxis/>
                    <Line type="monotone" dataKey="amt" stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
