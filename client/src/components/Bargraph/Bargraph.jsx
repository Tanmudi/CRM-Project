import "./bargraph.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Bargraph() {

    const data = [
        {
          name: '1st Quater',
          uv: 2486,
        },
        {
          name: '2nd Quater',
          uv: 3000,
        },
        {
          name: '3rd Quater',
          uv: 2000,
        },
        {
          name: '4th Quater',
          uv: 1500,
        },
      ];

    return (
        <div className="bargraph">
            <h3 className="bargraphtitle">Leads Per Quater</h3>
            <ResponsiveContainer overflow-y="hidden" aspect={3/1}>
                <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <YAxis stroke="#5550bd"/>
                    <Bar dataKey="uv" fill="#5550bd" />
                    <Tooltip/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
