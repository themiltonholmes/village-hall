import React, { Component } from 'react';
import Page from './PageComponent';

import AboutCard from './cards/aboutCard';
import HistoryCard from './cards/historyCard';
import StatsCard from './cards/statsCard';
import FacebookContainer from './facebookContainer';
import HallUsersCard from './cards/hallUsersCard';
import BookingCard from './cards/bookingCard';



class HomePage extends Component {
    render() {
        return (
            <Page title="home">
                <div className="row">
                    <div id="home-main" className="col-lg-7">
                            <AboutCard />
                            <div className="row"> 
                                <div className="col-lg-6">
                                    <StatsCard />
                                </div>
                                <div className="col-lg-6">
                                    <HistoryCard />
                                </div>
                            </div>
                        
                    </div>
                    <div id="home-sidebar" className="col-lg-5 align-content-center">
                        <div className="col-12">
                        <BookingCard />
                        <HallUsersCard />
                        <FacebookContainer />
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default HomePage;