import React, { Component } from 'react';
import { Navbar, NavbarBrand, } from 'reactstrap';
import './App.css';
import Service from './components/ServiceComponent';
import { SERVICES } from './shared/services';
import GlobalFonts from './fonts/fonts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Joe's ChuckWagon BBQ</NavbarBrand>
          </div>
        </Navbar>
        <Service services={this.state.services} />
      </div>
    );
  }
  
}

export default App;