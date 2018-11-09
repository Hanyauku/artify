import React, { Component } from 'react';
import './css/Carousel.css';

export default class Carousel extends Component {
    checkLength(additionalImages) {
        if (additionalImages) {
            return additionalImages.length
        }
    }

    render() {
        const { primaryImage, additionalImages } = this.props.image;
        if (this.checkLength(additionalImages) === 0) {
            return (
                <div className="pic">
                    <img className="single-pic" src={primaryImage} alt="object" />
                </div>);
        } else {
            return (
                <div id="carouselExampleIndicators" className="carousel slide pic" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={primaryImage} alt="First slide"/>
                        </div>
                        {additionalImages ? additionalImages.map((item, key) => { return (
                        <div className="carousel-item">
                            <img className="d-block w-100" src={item} key={key} alt="Next slide"/>
                        </div>)}) : null}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            );
        }
    }
}
