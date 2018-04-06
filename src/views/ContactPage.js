import React, { Component } from 'react';
import Page from './PageComponent';
import ContactCard from './cards/contactCard';


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
                {contacts.map( (contact) => {
                    return <div key={contact.name}>
                    <ContactCard {...contact} />
                    </div>
                })}
            </Page>
        );
    }
}

export default ContactPage;