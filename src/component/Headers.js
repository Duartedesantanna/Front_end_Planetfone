import React, { useState } from 'react';
import Path from '../routes';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function Headers(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' expand dark>
        <NavbarBrand ></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Sistema Front</NavbarText>
        </Collapse>
      </Navbar>
      <Path />
    </div>
  );
}

export default Headers;