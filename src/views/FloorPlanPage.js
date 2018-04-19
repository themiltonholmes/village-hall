import React, { Component } from 'react';
import Page from './PageComponent';
import ImageGallery from 'react-image-gallery';

class FloorPlanPage extends Component {

    constructor(props) {
        super(props);

        this.element = null;

        this.containerRef = element => {
            this.element = element;
        }
        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        this.setState({width: this.element.clientWidth});
    }

    floorPlanImage = [
        {
            original: `${process.env.PUBLIC_URL}/images/floorPlan.svg`,
            originalAlt: "Floor Plan for Willand Village Hall"
        }

    ]

    renderFullscreenButton(onClick, isFullscreen) {
        return (
          <button
            type='button'
            className={
              `btn btn-primary m-3 image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
            onClick={onClick}
          />
        );
    }

    render() {
        return (
            <Page title="floorplan">
            <div ref={this.containerRef} >
                {(this.state.width < 700) && <div className="alert alert-info">Mobile users: pinch to zoom in on floorplan</div>}
                <div className="card">
                <ImageGallery 
                showFullscreenButton={(this.state.width > 700) ? true : false} 
                renderFullscreenButton={this.renderFullscreenButton}
                showPlayButton={false} 
                showThumbnails={false} 
                items={this.floorPlanImage} 
                />
            </div>
            </div>
            </Page>
        );
    }
}

export default FloorPlanPage;