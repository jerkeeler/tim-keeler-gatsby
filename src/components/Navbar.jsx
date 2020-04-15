import React from 'react';
import { Link } from 'gatsby';
import Icon from './Icon';

const NavItem = ({ url, icon, children }) => (
  <li className="first:ml-0 ml-4 md:ml-10 hover:text-primary-lighter">
    <Link to={url} activeClassName="underline">
      {icon && <Icon icon={icon} className="inline w-4 h-4 -mt-1 mr-1" />}
      {children}
    </Link>
  </li>
);

const Navbar = () => (
  <nav className="w-full h-16 flex justify-between items-center px-3 md:px-20 text-lg">
    <ul>
      <NavItem url="/">TK</NavItem>
    </ul>
    <ul className="flex">
      <NavItem url="/about/">About</NavItem>
      <NavItem url="/media/">Media</NavItem>
      <NavItem url="/contact/">Contact</NavItem>
    </ul>
  </nav>
);

export default Navbar;
