import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Nav className="bg-light justify-content-center">
      <NavItem className="px-4 py-4">
        <Link to="/" className="text-dark">
          Home
        </Link>
      </NavItem>
      <NavItem className="px-4 py-4">
        <Link to="/about" className="text-dark">
          About
        </Link>
      </NavItem>
      <NavItem className="px-4 py-4">
        <Link to="#" className="text-dark">
          Blog
        </Link>
      </NavItem>
    </Nav>
  );
};

export default Header;
