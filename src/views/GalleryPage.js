import React, { Component } from 'react';
import Page from './PageComponent';
import GalleryContainer from './GalleryContainer';
import PanoContainer from './PanoContainer';

class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: "gallery"
    }
  }

  clickButton(string) {
    this.setState({ view: string });
  }

  section() {
    switch (this.state.view) {
      case "gallery":
        return <GalleryContainer />
      case "mainPhotosphere":
        return <PanoContainer caption="Willand Village Main Hall" image="PANO_20180401_115103.jpg" />
      default:
        return <GalleryContainer />
    }
  }



  render() {
    return (
      <Page title="gallery">
        <div className="card">
          <div className="card-body">
            <div className="btn-toolbar justify-content-center">
              <div className="btn-group mr-2">
                <button onClick={() => this.clickButton("gallery")} className={(this.state.view === "gallery") ? "btn btn-primary" : "btn btn-light"}>Gallery</button>
              </div>
              <div className="btn-group ">
                <button onClick={() => this.clickButton("mainPhotosphere")} className={(this.state.view === "mainPhotosphere") ? "btn btn-primary" : "btn btn-light"}>Photosphere</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {this.section()}
        </div>
      </Page>
    );
  }
}

export default GalleryPage;