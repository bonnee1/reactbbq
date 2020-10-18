import React, { Component } from 'react';
import Header from './HeaderComponent';
import ServiceInfo from './ServiceInfoComponent';
import CarouselSlides from './CarouselComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Catering from './DirectoryComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SERVICES } from '../shared/services';
import { SLIDES } from '../shared/slides';
import MyCarousel from './CarouselComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services: SERVICES,
            slides: SLIDES
        };
    }



    render() {

        const HomePage = () => {
          return (
              <Home />
         );
        }

        const ServiceWithId = ({match}) => {
            return (
                <ServiceInfo service={this.state.services.filter(service => service.id ===
                    +match.params.serviceId[0])} />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => 
                    <CarouselSlides slides={this.state.slides} component={HomePage}/>}/>
                    <Route exact path='/services' render={() => <Catering services={this.state.services}/>}/>
                    <Route path='/services/:serviceId' component={ServiceWithId} />
                    <Route exact path='/contactus' component ={Contact} />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;