import React, { useState } from "react";

import Logo from "../Assets/ffaceLogo.png";
import {
  Jumbotron,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);
  return (
    <div className="header">
      <Jumbotron>
        <img className="logo" src={Logo} alt="logo" />
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>
              Home
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropDownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              + Follow
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Social Media</DropdownItem>
              <DropdownItem>Instagram</DropdownItem>
              <DropdownItem>Twitter</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Discord</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Cast</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Listen</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Merch</NavLink>
          </NavItem>
        </Nav>
      </Jumbotron>
    </div>
  );
};

export default Header;
