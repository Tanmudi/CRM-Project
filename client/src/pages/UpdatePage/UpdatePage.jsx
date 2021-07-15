import "./updatepage.css"
import axios from 'axios';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function UpdatePage() {


    const url="http://localhost:4000/lead";
    const {id} = useParams();
    const [lead, setlead] = useState({
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
        country: "",
        comment: ""
    })

    useEffect(()=>{
        loaddata(id);
    }, []);

    const loaddata = async (id)=>{
        const welcome = await axios.get(`${url}/${id}`);
        setlead(welcome.data);
    //     let obj = welcome.data;
    //     let l = obj.length;
    //     for(var i=0;i<l;i++)
    //     {
    //         if(id===obj[i]._id)
    //         {
    //             setlead(obj[i]);
    //         }
    //     }
    }

    
    function handle(e){
        const newdata = {...lead}
        newdata[e.target.name] = e.target.value
        setlead(newdata)
    }
    
    function submit(e){

        if(!lead.leadowner || !lead.company || !lead.firstname || !lead.lastname || !lead.email || !lead.phone || !lead.leadsource || !lead.annualrevenue || !lead.city || !lead.state || !lead.country){
            alert("Your fields are blank");
            return false;
        }
        else{
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
                city: lead.city,
                state: lead.state,
                country: lead.country,
                comment: lead.comment
            }
            
            axios.put(`${url}/${id}`, newLead)
            alert("Lead Updated Successfully");
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
                    view
                </div>
                <div className="leadupdate">
                    <span className="leadupdatetitle">Edit</span>
                    <form className="leadupdateform">
                        <div className="leadupdateleft">
                            <div className="leadupdateitem">
                                <label>Lead Owner</label>
                                <input type="text" name="leadowner" onChange={(e)=>handle(e)} value={lead.leadowner} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Company</label>
                                <input type="text" name="company" onChange={(e)=>handle(e)} value={lead.company} />
                            </div>
                            <div className="leadupdateitem">
                                <label>First Name</label>
                                <input type="text" name="firstname" onChange={(e)=>handle(e)} value={lead.firstname} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Last Name</label>
                                <input type="text" name="lastname" onChange={(e)=>handle(e)} value={lead.lastname} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Email</label>
                                <input type="email" name="email" onChange={(e)=>handle(e)} value={lead.email} />
                            </div>
                            <div className="leadupdateitem">
                                <label>Phone</label>
                                <input type="text" name="phone" onChange={(e)=>handle(e)} value={lead.phone}/>
                            </div>
                            <div className="leadupdateitem">
                                <label>Lead Source</label>
                                <select id="leadsource" name="leadsource" onChange={(e)=>handle(e)} value={lead.leadsource} >
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
                                <input type="text" name="annualrevenue" onChange={(e)=>handle(e)} value={lead.annualrevenue}/>
                            </div>
                            <div className="leadupdateitem">
                                <label>City</label>
                                <input type="text" name="city" onChange={(e)=>handle(e)} value={lead.city}/>
                            </div>
                            <div className="leadupdateitem">
                                <label>State</label>
                                <input type="text" name="state" onChange={(e)=>handle(e)} value={lead.state}/>
                            </div>
                            <div className="leadupdateitem">
                                <label>Country</label>
                                <input type="text" name="country" onChange={(e)=>handle(e)} value={lead.country}/>
                            </div>
                            <div className="leadupdateitem">
                                <label>Comment</label>
                                <input type="text" name="comment" onChange={(e)=>handle(e)} value={lead.comment}/>
                            </div>
                            
                        </div>
                        <div className="leadupdateright">
                            <button onClick={submit} className="leadupdateupdate">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
