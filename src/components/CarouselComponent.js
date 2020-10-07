import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
function CarouselSlides(props) {
    return (
       
        <div className="container">
            <div className="row row-content">
                <div className="col col-md-8 ">
                <UncontrolledCarousel 
                    items={props.slides}
                    indicators={false}
                />
                </div>
            </div>
        </div>
    );
}
export default CarouselSlides;