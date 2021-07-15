import "./leadstable.css"
// import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from "react";
import { Visibility } from '@material-ui/icons';
import { Link } from "react-router-dom";

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
    city: "",
    state: "",
    country: ""
  }])

  useEffect(() => {
    fetch("/lead").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setleads(jsonRes));
  })

  //   const columns = [
  //     { field: 'id', headerName: 'ID', width: 100 },
  //     { field: 'leadName', headerName: 'Lead name', width: 200 },
  //     { field: 'company', headerName: 'Company', width: 200 },
  //     { field: 'email', headerName: 'Email', width: 200 },
  //     {
  //       field: 'phone',
  //       headerName: 'Phone',
  //       // type: 'number',
  //       width: 200,
  //     },
  //     {
  //       field: 'leadSource',
  //       headerName: 'Lead Source',
  //       width: 190,
  //     },
  //     {
  //       field: 'leadOwner',
  //       headerName: 'Lead Owner',
  //       width: 160,
  //     },
  //   ];

  //   let newrow = {
  //     leadName: leads.firstname,
  //     company: leads.company,
  //     email: leads.email,
  //     phone: leads.phone,
  //     leadSource: leads.leadsource,
  //     leadOwner: leads.leadowner
  //   }

  //   const rows=[
  //     { id: 1, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 2, leadName: 'Rahul', company: 'jmd', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 3, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 4, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 5, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 6, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 7, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 8, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 9, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 10, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //     { id: 10, leadName: 'Snow', company: 'Jon', email: 'jon@gmail.com', phone: '+91 9988774455', leadSource: 'Online Store', leadOwner: 'Tanmay' },
  //   ]

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
                <TableCell>active</TableCell>
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


{/* <DataGrid rows={rows} columns={columns} pageSize={8} /> */ }