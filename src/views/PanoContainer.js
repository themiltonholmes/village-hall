import React, { Component } from 'react';

import PhotoSphereViewer from 'photo-sphere-viewer';

class PanoContainer extends Component {

    constructor(props) {
        super(props);

            this.panoElement = null;

            this.panoContainerRef = element => {
                this.panoElement = element;
            }
    }

    componentDidMount() {
        var PSV = new PhotoSphereViewer({
            panorama: `${process.env.PUBLIC_URL}/images/PANO_20151220_170406.jpg`,
            container: 'pano-container',
            loading_img: 'https://raw.githubusercontent.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/photosphere-logo.gif',
            navbar: 'autorotate zoom download fullscreen',
            caption: 'Willand Village Hall',
            default_fov: 65,
            mousewheel: true,
            size: {
              height: 400
            }
          });
    }

    render() {
        return (
            <div id="pano-container" ref={this.panoContainerRef} />
        );
    }

}

export default PanoContainer;