import React from 'react';
import { Link } from 'gatsby';
import Icon from './Icon';

const NavItem = ({ url, icon, children }) => (
  <li className="first:ml-0 ml-10 hover:text-primary-lighter">
    <Link to={url} activeClassName="underline">
      {icon && <Icon icon={icon} className="inline w-4 h-4 -mt-1 mr-1" />}
      {children}
    </Link>
  </li>
);

const Navbar = () => (
  <nav className="w-full h-16 flex justify-between items-center px-10 md:px-20 text-lg">
    <ul>
      <NavItem url="/">TK</NavItem>
    </ul>
    <ul className="flex">
      <NavItem url="/about/" icon="info">
        About
      </NavItem>
      <NavItem url="/media/" icon="volume">
        Media
      </NavItem>
      <NavItem url="/contact/" icon="chat">
        Contact
      </NavItem>
    </ul>
  </nav>
);

export default Navbar;
