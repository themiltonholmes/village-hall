import React, { Component } from 'react';
import Page from './PageComponent';
import GalleryContainer from './GalleryContainer';

class GalleryPage extends Component {
    render() {
      return (
        <Page title="gallery">
          <GalleryContainer />
        </Page>
      );
    }
  }
  
export default GalleryPage;