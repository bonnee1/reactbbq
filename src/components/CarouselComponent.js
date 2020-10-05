import React from 'react';
import { UncontrolledCarousel, CarouselItem } from 'reactstrap';

function RenderCarouselSlides({slides}) {
    return (
        <UncontrolledCarousel slides={slides} />
    )
}


function CarouselSlides(props) {
    const slides = props.slides.map((slide) => {
        return (
            <UncontrolledCarousel slides={slides} />
        )
    })
}

export default CarouselSlides;