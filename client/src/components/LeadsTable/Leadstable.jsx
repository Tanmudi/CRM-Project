import "./leadstable.css"
// import { DataGrid } from '@material-ui/data-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Leadstable() {

  const [leads, setleads] = useState([{
    leadowner: "",
    company: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    leadsource: "",
    annualrevenue: "",
    status: "",
    city: "",
    state: "",
    country: "",
    comment: "",
  }])

  useEffect(() => {
    loaddata();
    // fetch("/lead").then(res => {
    //   if (res.ok) {
    //     return res.json()
    //   }
    // }).then(jsonRes => setleads(jsonRes));
  }, []);

  const loaddata = async () => {
    const welcome = await axios.get(`http://localhost:4000/lead`);
    console.log(welcome.data);
    setleads(welcome.data);
  }

  return (
    <div className="leadstable">
      <Table>
        <TableHead>
          <TableRow className="tablehead">
            {/* <TableCell>Id</TableCell> */}
            <TableCell>Lead Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Lead Source</TableCell>
            <TableCell>Lead Owner</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            leads.map(lead => (
              <TableRow>
                {/* <TableCell>{lead._id}</TableCell> */}
                <TableCell>{lead.firstname}</TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.leadsource}</TableCell>
                <TableCell>{lead.leadowner}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.comment}</TableCell>
                <TableCell className="action">
                  <div className="crud">
                    <Link to={`/update/${lead._id}`} className="link">
                      <div className="leadedit">
                        Edit
                      </div>
                    </Link>
                    <Link to="/view" className="link">
                      <div className="leadview">View</div>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

    </div>
  )
}


