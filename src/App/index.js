import React, { Component } from "react";
import Home from "../Home";
import Portfolio from "../Portfolio";
import PortfolioItem from "../PortfolioItem";
import PortfolioItemDetails from "../PortfolioItemDetails";
import About from "../About";
import Contact from "../Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "./style.css";


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          id: 1,
          name: "Bumpin' Bubbles",
          technologies: "Javascript",
          link: "https://vigilant-beaver-4f448a.netlify.com/",
          backgroundColorClass: "portfolio-background-bumpin",
          description: "A fun, retro, arcade style, javascript game. Merge with other bubbles to grow, and avoid being popped the spikey objects. Beware of new obstacles that appear as you progress through the levels. I also composed the background music!"
        },
        {
          id: 2,
          name: "Guitar Collector App",
          technologies: "React",
          link: "https://guitar-collection-app.herokuapp.com/",
          backgroundColorClass: "portfolio-background-collector",
          description: "As a guitar collector, I built this app to keep track of and display my own collection. The user can enter information and an image of the instrument. The collection can displayed in a gallery view or as a list."
        },
        {
          id: 3,
          name: "Remember Me",
          technologies: "React | Express",
          link: "https://remember-me-2018.herokuapp.com/",
          backgroundColorClass: "portfolio-background-rememberme",
          description: "Ever have a great conversation with someone at a networking event and then completely forget their name just minutes later? This handy app helps you keeps track of people you've met and what you talked about. The contacts can be sorted by date added or by importance."
        },
        {
          id: 4,
          name: "Gear Share",
          technologies: "React | Express",
          link: "https://gear-share-app.herokuapp.com/",
          backgroundColorClass: "portfolio-background-gearshare",
          description: "AirBnB for musical equipment in NYC! You want to record your new hit album, but don't want to spend thousands on a new microphone you'll only use a few times? Go on the Gear Share app to rent a microphone from another local musician."
        },
      ],

      currentProject: {}
    }
  }

  setDetailsPage = (projectId) => {
    const clickedProject = this.state.projects.filter(project => project.id === projectId)[0];
    this.setState({
      currentProject: clickedProject,
    })
  }


  // setBackgroundImg = (backgroundImg) => {
  //   this.setState{ backgroundImg }
  // }



  render() {
    return (
      <Router>
        <div className="app-container">
          {/* <div className="App" style={backgoundImage: `url(${this.state.backgroundImg})`> */}
          <div className="header">
            <div className="logo-container"><img className="logo-image" src="https://i.imgur.com/OvUifPZ.png" /></div>
            <nav className="nav-container">
              <Link className="nav" to="/">Portfolio</Link>
              <Link className="nav" to="/about">About Me</Link>
              <Link className="nav" to="/contact">Contact</Link>
            </nav>
          </div>
          <div className="content">

            
            <Route
              exact path="/"
              render={(props) => <Portfolio {...props} projects={this.state.projects} setDetailsPage={this.setDetailsPage} />}
            />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route
              path="/projectdetail/:id"
              render={(props) => <PortfolioItemDetails {...props} projects={this.state.projects} setDetailsPage={this.setDetailsPage} currentProject={this.state.currentProject} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

