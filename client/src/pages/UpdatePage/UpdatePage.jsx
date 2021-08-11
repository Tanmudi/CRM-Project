import "./updatepage.css"
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

export default function UpdatePage() {

    const history = useHistory();
    const url = "http://localhost:4000/lead";
    const { id } = useParams();
    const [lead, setlead] = useState({
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
        comment: ""
    })

    const [comm, setcomm] = useState({
        addcomment: "",
        commdate: "",
        commid: "",
        commtime: "",
    })

    const [outcomm, setoutcomm] = useState([{
        addcomment: "",
        commdate: "",
        commid: "",
        commtime: "",
    }])


    useEffect(() => {
        loaddata(id);
    }, []);

    const loaddata = async (id) => {
        const welcome = await axios.get(`${url}/${id}`);
        setlead(welcome.data);
    }


    function handle(e) {
        const newdata = { ...lead }
        newdata[e.target.name] = e.target.value
        setlead(newdata)
    };

    function handlecomment(e) {
        const newcomm = { ...comm }
        newcomm[e.target.name] = e.target.value
        setcomm(newcomm)
    }


    function submitcomment(e) {
        if (!comm.addcomment) {
            alert("Please Enter the comment");
            return false;
        }
        else {
            e.preventDefault();
            const today = new Date();
            const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const newcomment = {
                addcomment: comm.addcomment,
                commid: id,
                commdate: date,
                commtime: time,
            }
            axios.post(`http://localhost:4000/comment`, newcomment);
            axios.patch(`http://localhost:4000/commentupdate/${id}`, newcomment)
            alert("Comment added successfully");
            console.log(newcomment);
        }
    }

    useEffect(() => {
        loadcomment(id);
    }, []);

    const loadcomment = async (id) => {
        const getcomment = await axios.get(`http://localhost:4000/getcomment/${id}`);
        setoutcomm(getcomment.data)
        console.log(getcomment.data);
    }

    function submit(e) {

        if (!lead.leadowner || !lead.company || !lead.firstname || !lead.lastname || !lead.email || !lead.phone || !lead.leadsource || !lead.annualrevenue || !lead.status || !lead.city || !lead.state || !lead.country) {
            alert("Your fields are blank");
            return false;
        }
        else {
            e.preventDefault();
            console.log(lead);
            const newLead = {
                leadowner: lead.leadowner,
                company: lead.company,
                firstname: lead.firstname,
                lastname: lead.lastname,
                email: lead.email,
                phone: lead.phone,
                leadsource: lead.leadsource,
                annualrevenue: lead.annualrevenue,
                status: lead.status,
                city: lead.city,
                state: lead.state,
                country: lead.country,
                comment: lead.comment
            }

            axios.patch(`http://localhost:4000/leadupdate/${id}`, newLead)
            alert("Lead Updated Successfully");
            history.push("/leads");
        }
    }


    return (
        <div className="update">
            <div className="titlecontainer">
                <h1>Edit Lead</h1>
                <hr />
            </div>
            <div className="leadcontainer">
                <div className="leadshow">
                    <div className="leadshowitem">
                        <span className="leadshowname">Name :- </span>
                        <span className="leadshowfirstname">{lead.firstname}</span>
                        <span className="leadshowlastname">{lead.lastname}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowemailtitle">Email :- </span>
                        <span className="leadshowemailaddress">{lead.email}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowphonetitle">Phone :- </span>
                        <span className="leadshowphonenumber">{lead.phone}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowcompanytitle">Company :- </span>
                        <span className="leadshowcompanyname">{lead.company}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowleadsourcetitle">Lead Source :- </span>
                        <span className="leadshowleadsourcename">{lead.leadsource}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowannualrevenuetitle">Annual Revenue :- </span>
                        <span className="leadshowannualrevenuecount">{lead.annualrevenue}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowannualrevenuetitle">Status :- </span>
                        <span className="leadshowannualrevenuecount">{lead.status}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowcitytitle">City :- </span>
                        <span className="leadshowcityname">{lead.city}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowstatetitle">State :- </span>
                        <span className="leadshowstatename">{lead.state}</span>
                    </div>
                    <div className="leadshowitem">
                        <span className="leadshowcountrytitle">Country :- </span>
                        <span className="leadshowcountryname">{lead.country}</span>
                    </div>
                </div>
                <div className="leadupdate">
                    <span className="leadupdatetitle">Edit</span>
                    <form className="leadupdateform">
                        <div className="leadupdateleft">
                            <div className="leadupdateitem">
                                <label>Lead Owner</label>
                                <input type="text" name="leadowner" onChange={(e) => handle(e)} value={lead.leadowner} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Company</label>
                                <input type="text" name="company" onChange={(e) => handle(e)} value={lead.company} />
                            </div>
                            <div className="leadupdateitem">
                                <label>First Name</label>
                                <input type="text" name="firstname" onChange={(e) => handle(e)} value={lead.firstname} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Last Name</label>
                                <input type="text" name="lastname" onChange={(e) => handle(e)} value={lead.lastname} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Email</label>
                                <input type="email" name="email" onChange={(e) => handle(e)} value={lead.email} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Phone</label>
                                <input type="text" name="phone" onChange={(e) => handle(e)} value={lead.phone} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Lead Source</label>
                                <select id="leadsource" name="leadsource" onChange={(e) => handle(e)} value={lead.leadsource} >
                                    <option value="None">-None-</option>
                                    <option value="advertisement">Advertisement</option>
                                    <option value="coldcall">Cold Call</option>
                                    <option value="employeereferral">Employee Referral</option>
                                    <option value="ExternalReferral">External Referral</option>
                                    <option value="OnlineStore">Online Store</option>
                                    <option value="Partner">Partner</option>
                                    <option value="PublicRelations">Public Relations</option>
                                    <option value="SalesEmailAlias">Sales Email Alias</option>
                                    <option value="SeminarPartner">Seminar Partner</option>
                                    <option value="InternalSeminar">Internal Seminar</option>
                                    <option value="TradeShow">Trade Show</option>
                                    <option value="WebDownload">Web Download</option>
                                    <option value="WebResearch">Web Research</option>
                                    <option value="Chat">Chat</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Google">Google+</option>
                                </select>
                            </div>
                            <div className="leadupdateitem">
                                <label>Annual Revenue</label>
                                <input type="text" name="annualrevenue" onChange={(e) => handle(e)} value={lead.annualrevenue} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Status</label>
                                <select id="status" name="status" onChange={(e) => handle(e)} value={lead.status} >
                                    <option value="None">-None-</option>
                                    <option value="complete">Complete</option>
                                    <option value="incomplete">Incomplete</option>
                                </select>
                            </div>
                            <div className="leadupdateitem">
                                <label>City</label>
                                <input type="text" name="city" onChange={(e) => handle(e)} value={lead.city} />
                            </div>
                            <div className="leadupdateitem">
                                <label>State</label>
                                <input type="text" name="state" onChange={(e) => handle(e)} value={lead.state} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Country</label>
                                <input type="text" name="country" onChange={(e) => handle(e)} value={lead.country} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Comment</label>
                                <input type="text" name="comment" onChange={(e) => handle(e)} value={lead.comment} />
                            </div>

                        </div>
                        <div className="leadupdateright">
                            <button onClick={submit} className="leadupdateupdate">Update</button>
                        </div>
                    </form>
                </div>
                <div className="leadcomment">
                    <div className="showcomment">
                        <Table>
                            <TableHead>
                                <TableRow className="tablehead">
                                    <TableCell>Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    outcomm.map((com) => (
                                        <TableRow>
                                            <TableCell>
                                                <h4>
                                                    {com.commdate}  {com.commtime}
                                                </h4>
                                                {com.addcomment}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                    <div className="writecomment">
                        <input type="text" name="addcomment" placeholder="Enter comment here" className="commentinput" onChange={(e) => handlecomment(e)} value={comm.addcomment} />
                        <button onClick={submitcomment} className="commentbtn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
