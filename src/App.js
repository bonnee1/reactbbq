import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Service from './components/ServiceComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Joe's ChuckWagon BBQ</NavbarBrand>
          </div>
        </Navbar>
        <Service />
      </div>
    );
  }
}

export default App;