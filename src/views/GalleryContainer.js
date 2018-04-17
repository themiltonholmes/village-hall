import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class GalleryContainer extends Component {

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
    buildProperArray(imageUrlArray) {
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

        const imageUrlArray = [
            "IMG_20180401_120617.jpg",
            "IMG_20180401_120625.jpg",
            "IMG_20180401_120631.jpg"
        ]

        return (
            <ImageGallery showBullets={true} items={this.buildProperArray(imageUrlArray)} />
        );
    }

}

export default GalleryContainer;