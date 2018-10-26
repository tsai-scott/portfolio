import React, { Component } from 'react'
import "./style.css";


export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentProject: {}
    }
  }

  

  // document.querySelector(".bumpin").addEventListener("mouseover", function() {
  //   .style.backgroundImage = "url(https://media.coindesk.com/uploads/2017/12/Soap-bubbles.jpg)";
  // });
  
  render() {
    return (
        <div class="container">
            {/* <div className="portfolio-link bumpin" onMouseEnter={this.props.setBackground('/images/bumpin.jpg')}><a href="https://vigilant-beaver-4f448a.netlify.com/"><h3>Bumpin' Bubbles</h3></a></div> */}
            <div className="portfolio-link bumpin" ><a href="https://vigilant-beaver-4f448a.netlify.com/"><h3>Bumpin' Bubbles</h3></a></div>
            <div className="portfolio-link guitar"><a href="https://guitar-collection-app.herokuapp.com/"><h3>Guitar Collector App</h3></a></div>
            <div className="portfolio-link remember"><a href="https://remember-me-2018.herokuapp.com/"><h3>Remember Me</h3></a></div>
            <div className="portfolio-link gearshare"><a href="https://gear-share-app.herokuapp.com/"><h3>Gear Share</h3></a></div>
           
            {/* <div class="big"><a href="https://vigilant-beaver-4f448a.netlify.com/"><img className="portfolio-image" src="https://i.imgur.com/OSmRcpy.png"/></a></div>
            <div class="big"><a href="https://guitar-collection-app.herokuapp.com/"><img className="portfolio-image" src="https://i.imgur.com/Vryi0Mn.png"/></a></div>
            <div class="big"><a href="https://vigilant-beaver-4f448a.netlify.com/"><img className="portfolio-image" src="https://i.imgur.com/OSmRcpy.png"/></a></div>
            <div class="big"><a href="https://guitar-collection-app.herokuapp.com/"><img className="portfolio-image" src="https://i.imgur.com/Vryi0Mn.png"/></a></div>
            <div class="big"><a href="https://vigilant-beaver-4f448a.netlify.com/"><img className="portfolio-image" src="https://i.imgur.com/OSmRcpy.png"/></a></div>
            <div class="big"><a href="https://guitar-collection-app.herokuapp.com/"><img className="portfolio-image" src="https://i.imgur.com/Vryi0Mn.png"/></a></div>
            <div class="big"><a href="https://vigilant-beaver-4f448a.netlify.com/"><img className="portfolio-image" src="https://i.imgur.com/OSmRcpy.png"/></a></div> */}
        </div>
    )
  }
}

