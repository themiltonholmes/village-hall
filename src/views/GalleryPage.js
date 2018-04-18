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

  clickGalleryButton() {
    this.setState({ view: "gallery" });
  }

  clickPanoButton() {
    this.setState({ view: "photospheres" });
  }

  render() {
    return (
      <Page title="gallery">
        <div className="card">
          <div className="card-body">
            <div className="btn-toolbar justify-content-center">
              <div className="btn-group ">
                <button onClick={this.clickGalleryButton.bind(this)} className={(this.state.view === "gallery") ? "btn btn-primary" : "btn btn-secondary"}>Gallery</button>
                <button onClick={this.clickPanoButton.bind(this)} className={(this.state.view === "photospheres") ? "btn btn-primary" : "btn btn-secondary"}>Photospheres</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {(this.state.view === "gallery")
            ? <GalleryContainer />
            : <PanoContainer />
          }
        </div>
      </Page>
    );
  }
}

export default GalleryPage;