import React, { Component } from 'react';
import Header from './HeaderComponent';
import CarouselSlides from './CarouselComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Catering from './DirectoryComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SERVICES } from '../shared/services';
import { SLIDES } from '../shared/slides';



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
          )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => 
                    <CarouselSlides slides={this.state.slides} component={HomePage}/>}/>
                    <Route exact path='/services' render={() => <Catering services={this.state.services}/>}/>
                    <Route exact path='/contactus' component ={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;