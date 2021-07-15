import "./leads.css"
import Leadstable from "../../components/LeadsTable/Leadstable"
import { Link } from "react-router-dom";

export default function Leads() {
    

    return (
        <div className="leads">
            <div className="topbar">
                <div className="title">All Leads</div>
                <Link to="/createleads" className="link">
                <div className="create">Create Lead</div>
                </Link>
            </div>
            <Leadstable />
        </div>
    )
}
