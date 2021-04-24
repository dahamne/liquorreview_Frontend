import React, { Component } from 'react';
import {Nav} from 'react-bootstrap'
import "./styles/styles.css"
const NavBar = () => {
    return (
    <Nav className="justify-content-end NavBar"  activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item >
            <Nav.Link className="navItem" href="/home">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
        </Nav.Item>
    </Nav>
      );
}
 
export default NavBar;