import React, { Component } from 'react';
import Page from './PageComponent';



class Body extends Component {
    render() {
    const HallImage = `${process.env.PUBLIC_URL}/images/IMG_20180401_120625.jpg`;
      return (
        <Page title="home">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={HallImage} alt="The outside of the village hall" />
                </div>
                <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">About Us</h2>
                        <p className="card-text">
                            Willand Village Hall, one of the largest in Devon, is situated just off the B3181, in Gables Road, Willand with easy access from all local areas and from junctions 27 and 28 of the M5. 
                            The Hall has a Public Entertainment and Theatre Licence under the Licensing Act 2003. The hall also benefits from having central heating throughout.
                        </p>
                        <h3>Features</h3>
                            <ul className="list-unstyled">
                                <li>Stage (with Spot and Stage Lighting)</li>
                                <li>PA System</li>
                                <li>Loop Hearing System</li>
                                <li>Disabled Toilets</li>
                                <li>Guest WiFi</li>
                            </ul>
                    </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">History</h2>
                            <p className="card-text">
                            The idea for the hall was conceived in 1944 and following the numerous restrictions in money and materials at that time, the foundation stone was laid in June 1955. 
                            The building work was undertaken using both contract and considerable voluntary labour with the building being officially opened in June 1957. Various extensions followed with the hall being in its present form since 1976.
                            <br/>
                            Solar panels were recently added and the car park has been re-surfaced. The Hall also has a stage with spot and stage lighting, PA system and a theatre seating license of 265. 
                            Hall capacity is 360. The Hall has a Loop Hearing System and Disabled Toilets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
      );
    }
  }
  
export default Body;