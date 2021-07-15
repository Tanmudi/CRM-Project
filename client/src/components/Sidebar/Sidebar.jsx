import "./sidebar.css"
import {NotificationsNone, Search, AccountCircle, TextsmsOutlined, Call} from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebarwidget">
                <div className="sidebarlist">
                    <NotificationsNone className="sidebarlistitems"/>
                    <Search className="sidebarlistitems"/>
                    <AccountCircle className="sidebarlistitems"/>
                </div>
                <div className="sidebarcontact">
                    <TextsmsOutlined className="sidebarcontactitems"/>
                    <Call className="sidebarcontactitems"/>
                </div>
            </div>
        </div>
    )
}
