import React from 'react';

const BookingCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Booking the Hall</h2>
                <p>Please read <a target="_blank" href={`${process.env.PUBLIC_URL}/Documents/Wvh Hire Conditions 2018.pdf`}>Our Hire Conditions</a></p>
                <div className="form-link-container">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href={`${process.env.PUBLIC_URL}/Documents/Wvh Booking Form single Event 2018 - 2019.pdf`} target="_blank" id="booking-btn">Single Event</a></li>
                    <li className="list-group-item"><a href={`${process.env.PUBLIC_URL}/Documents/Wvh Regular Booking Form 2018 - 2019.pdf`} target="_blank" id="booking-btn">Reoccuring Events</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default BookingCard;