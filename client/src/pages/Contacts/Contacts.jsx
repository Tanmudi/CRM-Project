import "./contacts.css"
import ContactsTable from "../../components/ContactsTable/ContactsTable"

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="contactheading">
                Contacts
            </div>
            <ContactsTable />
            {/* <div className="contactheading">
                Contact
            </div>
            <ContactsTable /> */}
        </div>
    )
}
