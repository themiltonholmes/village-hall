import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { fetchImageUrls } from '../services/dataService';

class GalleryContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount() {
        fetchImageUrls( (resp) => {
            this.setState({images: resp});
        } )
    }
    /**
     * This will take an array of image names:
     *  ["iamge.png","image23.jpg"]
     * and convert it into the format that ImageGallery is after:
     * [
     *       {
     *           original: `${process.env.PUBLIC_URL}/images/iamge.png`,
     *           thumbnail: `${process.env.PUBLIC_URL}/images/iamge.png`,
     *       },
     *       {
     *           original: `${process.env.PUBLIC_URL}/images/image23.jpg`,
     *           thumbnail: `${process.env.PUBLIC_URL}/images/image23.jpg`,
     *       }
     * ]
     * 
     * @param {string} imageUrlArray array of image names, in string form. They must all be located in the images folder
     */
    _buildProperArray(imageUrlArray) {
        const finalArray = [];
        imageUrlArray.forEach(imageUrl => {
            finalArray.push({
                original: `${process.env.PUBLIC_URL}/images/${imageUrl}`,
                thumbnail: `${process.env.PUBLIC_URL}/images/${imageUrl}`
            })
        });
        return finalArray;
    }

    render() {
        return (
            <ImageGallery thumbnailPosition="top" showBullets={true} items={this._buildProperArray(this.state.images)} />
        );
    }

}

export default GalleryContainer;