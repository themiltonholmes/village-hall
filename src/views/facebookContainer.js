import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';

const facebookUrl = "https://www.facebook.com/WillandVillageHall/";

class FacebookContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: "300"
    }

    this.facebookContainer = element => {
      this.facebookContainerElement = element;
    }
  }

  componentDidMount() {
    this.updateDimensions();

    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const containerWidth = this.facebookContainerElement.clientWidth;
    this.setState({width: containerWidth});
  }

  render() {
    return (
      <div id="facebook-container">
            <div ref={this.facebookContainer} className="big-facebook col-12">
            <FacebookProvider appId="willandVillageHall">
              <Page hideCover={true} width={this.state.width} href={facebookUrl} tabs="timeline" />
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