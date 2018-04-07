import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';

const facebookUrl = "https://www.facebook.com/WillandVillageHall/";

class FacebookContainer extends Component {
  render() {
    return (
      <div id="facebook-container">
            <div className="big-facebook">
            <FacebookProvider appId="willandVillageHall">
              <Page hideCover={true} adaptContainerWidth={true} href={facebookUrl} tabs="timeline" />
            </FacebookProvider>
            </div>
            <div className="small-facebook">
              <a target="_blank" href={facebookUrl}><span className="btn btn-primary col-12">Visit Our Facebook Page</span></a>
            </div>

      </div>
    );
  }
}
  
export default FacebookContainer;