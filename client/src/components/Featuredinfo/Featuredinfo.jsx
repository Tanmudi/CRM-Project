import "./featuredinfo.css";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

export default function Featuredinfo() {
    return (
        <div className="featuredinfo">
            <div className="featuredinfoitems">
                <span className="featuredtitle">Total Leads</span>
                <div className="featuredinfocontainer">
                    <span className="featuredinfocount">1500</span>
                    <span className="featuredinforate">-5% <ArrowDownward className="featuredinfoicon negative"/></span>
                </div>
                <span className="featuredinfomessage">Compared to last Quater</span>
            </div>
            <div className="featuredinfoitems">
                <span className="featuredtitle">New Contacts</span>
                <div className="featuredinfocontainer">
                    <span className="featuredinfocount">2500</span>
                    <span className="featuredinforate">+15% <ArrowUpward className="featuredinfoicon"/></span>
                </div>
                <span className="featuredinfomessage">Compared to last Month</span>
            </div>
            <div className="featuredinfoitems">
                <span className="featuredtitle">Activities</span>
                <div className="featuredinfocontainer">
                    <span className="featuredinfocount">2000</span>
                    <span className="featuredinforate">+15 <ArrowUpward className="featuredinfoicon"/></span>
                </div>
                <span className="featuredinfomessage">Compared to last Month</span>
            </div>
            <div className="featuredinfoitems">
                <span className="featuredtitle">Finalized Deals</span>
                <div className="featuredinfocontainer">
                    <span className="featuredinfocount">500</span>
                    <span className="featuredinforate">+10% <ArrowUpward className="featuredinfoicon"/></span>
                </div>
                <span className="featuredinfomessage">Compared to last Month</span>
            </div>
        </div>
    )
}
