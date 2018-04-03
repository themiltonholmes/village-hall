import React from 'react';

const AboutCard = () => {
    const HallImage = `${process.env.PUBLIC_URL}/images/IMG_20180401_120625.jpg`;
    return (
        <div className="card">
            <img className="card-img-top" src={HallImage} alt="The outside of the village hall" />
            <div className="card-body">
                <h2 className="card-title">About Us</h2>
                <p className="card-text">
                    Willand Village Hall, one of the largest in Devon, is situated just off the B3181, in Gables Road, Willand with easy access from all local areas and from junctions 27 and 28 of the M5.
                    The Hall has a Public Entertainment and Theatre Licence under the Licensing Act 2003. The hall also benefits from having central heating throughout.
                                </p>
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
                        <dl>
                            <dt>Capacity</dt><dd>360</dd>
                            <dt>Parking Spaces</dt><dd>49</dd>
                            <dt>Theatre Seating License</dt><dd>Up to 265</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;