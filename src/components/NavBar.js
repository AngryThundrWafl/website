import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
        <Navbar color="dark" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to='/Home'>Home</Link>
            </NavItem>
              <NavItem>
                <Link to='/About'>About</Link>
              </NavItem>
              <NavItem>
                <Link to='/Contact'>Contact</Link>
              </NavItem>
              <NavItem>
                <Link to='/Portfolio'>Portfolio</Link>
              </NavItem>
              <NavItem>
                <Link to='/Skills'>Sills</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
