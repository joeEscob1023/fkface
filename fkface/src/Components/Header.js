import React, { useState } from "react";
import { Switch } from "react-router-dom";

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

const Header = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);
  return (
    <div className="header">
      <Jumbotron>
        <img className="logo" src={Logo} alt="logo" />
        <Nav pills>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropDownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              + Follow
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Social Media</DropdownItem>
              <DropdownItem>
                <NavLink
                  target="_blank"
                  href="https://www.instagram.com/fuckfacepod/?hl=en"
                >
                  Instagram
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  target="_blank"
                  href="https://twitter.com/fuckfacepod?lang=en"
                >
                  Twitter
                </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink
                  target="_blank"
                  href="https://discord.com/channels/752965395492896810/"
                >
                  Discord
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
           
            <NavLink href="/cast">Cast</NavLink>
      
          </NavItem>
          
          <Switch>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://roosterteeth.com/series/f-kface"
              >
                Listen
              </NavLink>
            </NavItem>
          </Switch>
          <NavItem>
            <NavLink
              target="_blank"
              href="https://store.roosterteeth.com/collections/f-kface"
            >
              Merch
            </NavLink>
          </NavItem>
        </Nav>
      </Jumbotron>
    </div>
  );
};

export default Header;
