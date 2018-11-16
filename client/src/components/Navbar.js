import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #457B9D;
  height: 50px;
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: white;
    &:active {
      color: red;
    }
  }


`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" className="some-class">
        <Link to="/">Home</Link>
        <Link to="/user">USERS</Link>
        
      </NavBarStyles>
    );
  }
}

export default NavBar;