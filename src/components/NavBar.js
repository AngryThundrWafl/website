import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import * as FontAwesome from 'react-icons/fa';

class NavBar extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" id="navbar">
          <NavbarBrand href="/"><p id="AngryThundrWafl">AngryThundrWafl</p></NavbarBrand>
            <Nav className="ml-auto" navbar id="nav">
              <Link to='/Home'><FontAwesome.FaHome id="icon-home"/></Link>
              <Link to='/About'><FontAwesome.FaUser id="icon-about"/></Link>
              <Link to='/Contact'><FontAwesome.FaEnvelope id="icon-contact"/></Link>
              <Link to='/Portfolio'><FontAwesome.FaEye id="icon-portfolio"/></Link>
              <Link to='/Skills'><FontAwesome.FaCode id="icon-skills"/></Link>
            </Nav>
            <ul>
              <li><a href="https://github.com/AngryThundrWafl"><FontAwesome.FaGithub/></a></li>
              <li><a href="https://www.linkedin.com/in/brian-pina-estrada-576791155/"><FontAwesome.FaLinkedin/></a></li>
            </ul>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
