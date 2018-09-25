import React, { Component } from "react";
import Portfolio from "../Portfolio";
import About from "../About";
import Contact from "../Contact";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


import "./style.css";

class App extends Component {

  
  
  render() {
    return (
      <Router>
        <div className="App">
        <header>
          <div className="logo-container"><img className="logo-image" src="https://i.imgur.com/OvUifPZ.png"/></div>
          <h3 className="tagline">Full Stack Web Developer</h3>
          <nav className="nav-container">
            <Link className="nav" to="/portfolio">Portfolio</Link>
            <Link className="nav" to="/about">About Me</Link>
            <Link className="nav" to="/contact">Contact</Link>
          </nav>
        </header>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </div>
      </Router>
      );
  }
}

export default App;

