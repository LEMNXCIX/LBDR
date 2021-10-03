import React, { Component } from "react";
import { MenuItems } from "./menuItems";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./dNavbar.css";
import {BiShoppingBag} from "react-icons/bi";



class BarraNavegacion extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
 
  render() {
    return (
      <NavItems className="navbar">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" >
          LBDR    
          <BiShoppingBag className="fa-shopping-bag"/>
        </NavLink>
       
        {/* Menu resposive */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        

        {/* Menu  Opciones */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={item.cName}
                  to={item.url}
                  data-tooltip={item.tooltip}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </NavItems>
    );
  }
}
const NavItems = styled.nav``;
export default BarraNavegacion;
