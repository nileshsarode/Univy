import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Pricing from "./component/Pricing";
import Social from "./component/Social";
import About from "./component/About";
import HomeSlider from "./component/HomeSlider";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const NavBar = () => {
  return(
    <div className="App">     
      <Router>
      <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
       
          <Route path="/Products" component={Products}>
            <Products />
          </Route>
          <Route path="/Pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/Social" component={Social}>
            <Social />
          </Route>
          <Route path="/About" component={About}>
            <About />
          </Route>     
          <Route path="/HomeSlider" component={HomeSlider}>
            <HomeSlider />
          </Route>    
          <Route path="/" component={Home}>
            <Home />
          </Route>

         
        </Switch>      
    </Router>
    
    </div>
  );
}

export default NavBar;
