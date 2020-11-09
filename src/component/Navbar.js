import React from 'react';
import Logo from "../images/logo.png";
import * as ReactBootStrap from "react-bootstrap";

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


const NavBar = () => {
  return (
   
      <ReactBootStrap.Navbar collapseOnSelect expand="lg"  variant="light" className="sticky-nav">
  <Link to="/"><ReactBootStrap.Navbar.Brand href="#home"><img src="{ Logo }"/></ReactBootStrap.Navbar.Brand></Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <Link to="/">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/Products">
      <ReactBootStrap.Nav.Link href="#products">Products</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/Pricing">
      <ReactBootStrap.Nav.Link href="#Pricing">Pricing</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/Social">
      <ReactBootStrap.Nav.Link href="#Social">Social</ReactBootStrap.Nav.Link>
      </Link>
      <Link to="/About">
      <ReactBootStrap.Nav.Link href="#About">About</ReactBootStrap.Nav.Link>
      </Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">Log In</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Create Event
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
   
  );
}

export default NavBar;
