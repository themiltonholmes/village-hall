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
            </div>
        </div>
    )
}

export default AboutCard;