import React, { Component } from "react";
import Portfolio from "../Portfolio";
import About from "../About";
import Contact from "../Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "./style.css";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      backgroundImg: 'somedefault.jpg'
    }
  }


  // setBackgroundImg = (backgroundImg) => {
  //   this.setState{ backgroundImg }
  // }



  render() {
    return (
      <Router>
        <div className="app-container">
          {/* <div className="App" style={backgoundImage: `url(${this.state.backgroundImg})`> */}
          <div className="logo-container"><img className="logo-image" src="https://i.imgur.com/OvUifPZ.png" /></div>
          <header>
            <nav className="nav-container">
              <Link className="nav" to="/">Portfolio</Link>
              <Link className="nav" to="/about">About Me</Link>
              <Link className="nav" to="/contact">Contact</Link>
            </nav>
          </header>
          <div className="content">
            <Route path="/" exact component={Portfolio} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

