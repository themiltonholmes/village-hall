import React, { Component } from 'react';
import Page from './PageComponent';

import AboutCard from './cards/aboutCard';
import HistoryCard from './cards/historyCard';
import FacebookContainer from './facebookContainer';



class Body extends Component {
    render() {
        return (
            <Page title="home">
                <div className="row">
                    <div id="home-main" className="col-md-8 row">
                        <div className="col-6">
                            <AboutCard />
                        </div>
                        <div className="col-6">
                            <HistoryCard />
                        </div>
                        
                    </div>
                    <div id="home-sidebar" className="col-md-4 container">
                        <FacebookContainer />
                    </div>
                </div>
            </Page>
        );
    }
}

export default Body;