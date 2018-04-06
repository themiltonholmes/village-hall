import React, { Component } from 'react';
import Page from './PageComponent';
import ContactCard from './cards/contactCard';
import MapsContainer from './mapsContainer';


const contacts = [
    {
        name: "Bookings",
        imgSrc: "person-placeholder.png",
        telephone: "123",
        email: "bookings@mail"
    },
    {
        name: "Caretaker",
        imgSrc: "person-placeholder.png",
        telephone: "456"
    },
    {
        name: "Chairperson",
        imgSrc: "person-placeholder.png",
        telephone: "890",
        email: "person@mail"
    },
    {
        name: "Treasurer",
        imgSrc: "person-placeholder.png",
        telephone: "090",
    }
]

class ContactPage extends Component {
    render() {
        return (
            <Page title="contact-us">
            <div className="row">
            <div className="col-md-6">
                <h2>Contacts</h2>
                {contacts.map( (contact) => {
                    return <div key={contact.name}>
                    <ContactCard {...contact} />
                    </div>
                })}
                </div>
                <div className="col-md-6">
                <h2>Find Us</h2>
                <MapsContainer />
                </div>
                </div>
            </Page>
        );
    }
}

export default ContactPage;