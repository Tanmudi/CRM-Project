import React from 'react'
import "./navbar.css";
import {PersonOutline} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbarwidget">
                <div className="navbarlogo">CRM</div>
                <div className="navbarlist">
                    <ul className="navbarlistjack">
                        <li className="navbarlistitem">
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li className="navbarlistitem">
                            <Link to="/leads" className="link">
                                Leads
                            </Link>
                            </li>
                        <li className="navbarlistitem">Contacts</li>
                        <li className="navbarlistitem">Accounts</li>
                        <li className="navbarlistitem">Deals</li>
                        <li className="navbarlistitem">Activities</li>
                        <li className="navbarlistitem">Reports</li>
                        <li className="navbarlistitem">Analytics</li>
                        <li className="navbarlistitem">Products</li>
                        <li className="navbarlistitem">Marketplace</li>
                    </ul>
                </div>
                <div className="navbarright">
                    <PersonOutline className="navbarrighticon"/>
                    Tanmay Joshi
                </div>
            </div>
        </div>
    )
}
