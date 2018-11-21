import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: pink;
  height: 50px;
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: black;
    &:active {
      color: red;
    }
  }


`

class NavBar extends Component {
  render() {
    return (
      <Nav id="nav-container" className="some-class">
        <Link to="/">Home</Link>
        <Link to="/user">USERS</Link>
        <Link to="/user/create">Create New User</Link>
        
      </Nav>
    );
  }
}

export default NavBar;