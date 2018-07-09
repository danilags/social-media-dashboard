import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = (props) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Social Media Dashboard</NavbarBrand>
    <NavbarToggler onClick={() => null } />
    <Collapse isOpen={false} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="https://github.com/danilags">Daniel Agus</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default NavBar;
