import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';

class FacebookContainer extends Component {
    render() {
      return (
        <div id="facebook-container">
              <FacebookProvider appId="willandVillageHall">
                <Page href="https://www.facebook.com/WillandVillageHall/" tabs="timeline" />
              </FacebookProvider>
        </div>
      );
    }
  }
  
export default FacebookContainer;