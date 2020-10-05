import React from 'react';
import { UncontrolledCarousel, CarouselItem, CarouselCaption } from 'reactstrap';

function RenderCarouselSlides({slide}) {
    return (
        <CarouselItem
            key={slide.src}
        >
            <img src={slide.src} alt={slide.altText} />
            <CarouselCaption captionText={slide.caption} captionHeader={slide.caption} />
        </CarouselItem>
    )
}


function CarouselSlides(props) {
    const slide = props.slides.map((slide) => {
        return (
          <div key={slide.id} className="col-md-5 m-1">
            <RenderCarouselSlides slide={slide} />
            
          </div>
        );
      });
      
}
   


export default CarouselSlides;