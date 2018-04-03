import React from 'react';

const AboutCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2>Features and Specification</h2>
                <div className="row">
                    <div className="col-xl-6">
                        <ul>
                            <li>Stage (with Spot and Stage Lighting)</li>
                            <li>PA System</li>
                            <li>Loop Hearing System</li>
                            <li>Disabled Toilets</li>
                            <li>Guest WiFi</li>
                        </ul>
                    </div>
                    <div className="col-xl-6">
                        <h3 className="sr-only">Specification</h3>
                        <dl>
                            <dt >Capacity</dt><dd >360</dd>
                            <dt >Parking Spaces</dt><dd >89</dd>
                            <dt >Theatre Seating License</dt><dd >265</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;