import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ServiceInfo from './ServiceInfoComponent';
import Catering from './DirectoryComponent';
import { SERVICES } from '../shared/services';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services: SERVICES,
            selectedService: null
        };
    }

    onServiceSelect(serviceId) {
        this.setState({selectedService: serviceId});
    }

    render() {
        return (
            <div>
                <Header />
                   <Catering services={this.state.services} onClick={serviceId => this.onServiceSelect(serviceId)}/>
                <ServiceInfo service={this.state.services.filter(service => service.id === this.state.selectedService)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;