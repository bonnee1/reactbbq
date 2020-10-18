import React, { Component } from 'react';
import styled from 'styled-components';
import WesternFont from '../fonts/fonts'
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <NavbarBrand href="/"><img src="/logo.png" height="50" width="40" alt="BBQ logo" />
                                </NavbarBrand>
                            </div>
                            <div className="col">
                                <WesternFont>Joe's Chuckwagon BBQ</WesternFont>
                                <h2>Santa Maria comfort food</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand href="/"><img src="/logo.png" height="50" width="40" alt="BBQ logo" />Joe's Chuckwagon BBQ</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        <i className="fa fa-list fa-lg" /> Catering
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
   
}

export default Header;