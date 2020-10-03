import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Catering from './DirectoryComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SERVICES } from '../shared/services';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services: SERVICES
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
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/services' render={() => <Catering services={this.state.services}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;