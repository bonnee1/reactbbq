import React from 'react';
import CarouselSlides from './CarouselComponent';


function Home(props) {
    return (
        <div className="container">
            <div className="row">
            <CarouselSlides slides={this.state.slides} />
            </div>
        </div>
    )
}

export default Home;