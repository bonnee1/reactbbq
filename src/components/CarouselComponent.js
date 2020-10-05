import React from 'react';
import { UncontrolledCarousel, CarouselItem, CarouselCaption } from 'reactstrap';

function RenderCarouselSlides({slide}) {
    return (
        <UncontrolledCarousel>
            <CarouselItem
                key={slide.src}
            >
                <img src={slide.src} alt={slide.altText} />
                <CarouselCaption captionText={slide.caption} captionHeader={slide.caption} />
            </CarouselItem>
        </UncontrolledCarousel>
    );
}


function CarouselSlides(props) {
    const slide = props.slides.map((slide) => {
        return (
          <div key={slide.id} className="col-md-5 m-1">
            <RenderCarouselSlides slide={slide} />
            
          </div>
        );
      });

      return (
        <div className="container">
            <div className="row">
                {CarouselSlides}
            </div>
        </div>
      );
    }


export default CarouselSlides;