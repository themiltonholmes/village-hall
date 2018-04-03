import React from 'react';

const AboutCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="sr-only">Features and Specification</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Features</h3>
                        <ul className="list-unstyled">
                            <li>Stage (with Spot and Stage Lighting)</li>
                            <li>PA System</li>
                            <li>Loop Hearing System</li>
                            <li>Disabled Toilets</li>
                            <li>Guest WiFi</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Specification</h3>
                        <dl className="row">
                            <dt className="col-9">Capacity</dt><dd className="col-3">360</dd>
                            <dt className="col-9">Parking Spaces</dt><dd className="col-3">89</dd>
                            <dt className="col-9">Theatre Seating License</dt><dd className="col-3">265</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;