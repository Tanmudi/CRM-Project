import "./createlead.css";
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";


export default function CreateLead() {

    const history = useHistory();

    const url="http://localhost:4000/createlead";
    const [data, setdata] = useState({
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

    
    function handle(e){
        const newdata = {...data}
        newdata[e.target.name] = e.target.value
        setdata(newdata)
    }
    
    function submit(e){

        if(!data.leadowner || !data.company || !data.firstname || !data.lastname || !data.email || !data.phone || !data.leadsource || !data.annualrevenue || !data.status || !data.city || !data.state || !data.country){
            alert("Your fields are blank");
            return false;
        }
        else{
            e.preventDefault();
            console.log(data);
            const newLead = {
                leadowner: data.leadowner,
                company: data.company,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phone: data.phone,
                leadsource: data.leadsource,
                annualrevenue: data.annualrevenue,
                status: data.status,
                city: data.city,
                state: data.state,
                country: data.country,
                comment: data.comment,
            }
            
            axios.post(url, newLead)
            alert("Lead added Successfully");
            history.push("/leads");
        }
    }


    return (
        <div className="createlead">
            <div className="createtopbar">
                <div className="createtitle">Create Lead</div>
                {/* <div className="createbutton">Save</div> */}
            </div>
            <hr className="horline" />
            <h3 className="leadinfoform">Lead Information</h3>
            <form  className="createleadform">
                {/* <div className="newleaditem">
                    <label>ID</label>
                    <input type="number" name="id" />
                </div> */}
                <div className="newleaditem">
                    <label>Lead Owner</label>
                    <input type="text" name="leadowner" onChange={(e)=>handle(e)} value={data.leadowner}/>
                </div>
                <div className="newleaditem">
                    <label>Company</label>
                    <input type="text" name="company" onChange={(e)=>handle(e)} value={data.company} />
                </div>
                <div className="newleaditem">
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={(e)=>handle(e)} value={data.firstname} />
                </div>
                <div className="newleaditem">
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={(e)=>handle(e)} value={data.lastname} />
                </div>
                <div className="newleaditem">
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e)=>handle(e)} value={data.email} />
                </div>
                <div className="newleaditem">
                    <label>Phone</label>
                    <input type="text" name="phone" onChange={(e)=>handle(e)} value={data.phone} />
                </div>
                <div className="newleaditem">
                    <label>Lead Source</label>
                    <select id="leadsource" name="leadsource" onChange={(e)=>handle(e)} value={data.leadsource} >
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
                <div className="newleaditem">
                    <label>Annual Revenue</label>
                    <input type="text" name="annualrevenue" onChange={(e)=>handle(e)} value={data.annualrevenue} />
                </div>
                <div className="newleaditem">
                    <label>Status</label>
                    <select id="status" name="status" onChange={(e)=>handle(e)} value={data.status} >
                        <option value="None">-None-</option>
                        <option value="complete">Complete</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
                <div className="newleaditem">
                    <label>City</label>
                    <input type="text" name="city" onChange={(e)=>handle(e)} value={data.city} />
                </div>
                <div className="newleaditem">
                    <label>State</label>
                    <input type="text" name="state" onChange={(e)=>handle(e)} value={data.state} />
                </div>
                <div className="newleaditem">
                    <label>Country</label>
                    <input type="text" name="country" onChange={(e)=>handle(e)} value={data.country} />
                </div>
                <div className="newleaditem">
                    <label>Comment</label>
                    <input type="text" name="comment" onChange={(e)=>handle(e)} value={data.comment} />
                </div>
                <button onClick={submit} className="createbutton" >Save</button>
            </form>
        </div>
    )
}



// onSubmit={(e)=>submit(e)}
// function submit(e){
    //     e.preventDefault();
    //     axios.post(url, {
    //         leadowner: data.leadowner,
    //         company: data.company,
    //         firstname: data.firstname,
    //         lastname: data.lastname,
    //         email: data.email,
    //         phone: data.phone,
    //         leadsource: data.leadsource,
    //         annualrevenue: data.annualrevenue,
    //         city: data.city,
    //         state: data.state,
    //         country: data.country
    //     })
    //     .then(res=>{
    //         console.log(res.data);
    //     })
    // }
