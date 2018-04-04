import React, { Component } from 'react';
import Page from './PageComponent';

import AboutCard from './cards/aboutCard';
import HistoryCard from './cards/historyCard';
import StatsCard from './cards/statsCard';
import FacebookContainer from './facebookContainer';



class Body extends Component {
    render() {
        return (
            <Page title="home">
                <div className="row">
                    <div id="home-main" className="col-md-8 row">
                            <AboutCard />
                            <div className="row"> 
                        <div className="col-md-6">
                            <StatsCard />
                        </div>
                        <div className="col-md-6">
                            <HistoryCard />
                        </div>
                            </div>
                        
                    </div>
                    <div id="home-sidebar" className="col-md-4 container align-content-center">
                        <FacebookContainer />
                    </div>
                </div>
            </Page>
        );
    }
}

export default Body;