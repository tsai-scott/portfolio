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
      <div class="portfolio-container">
        {/* <div className="portfolio-link bumpin" onMouseEnter={this.props.setBackground('/images/bumpin.jpg')}><a href="https://vigilant-beaver-4f448a.netlify.com/"><h3>Bumpin' Bubbles</h3></a></div> */}

        <div className="portfolio-item bumpin" >
          <a href="https://vigilant-beaver-4f448a.netlify.com/">
            <div className="portfolio-text-container">

              <div className="portfolio-title-container">
                <h3 className="portfolio-item-title">Bumpin'<br></br> Bubbles</h3>
              </div>

              <div className="portfolio-item-description">
                <h4> Javascript Game</h4>
              </div>

            </div>

            <div className="portfolio-image-container">
              <div className="portfolio-background-bumpin">

              </div>
            </div>
          </a>
        </div>


          <div className="portfolio-item collector" >
          <a href="https://guitar-collection-app.herokuapp.com/">
            <div className="portfolio-text-container">

              <div className="portfolio-title-container">
                <h3 className="portfolio-item-title">Guitar<br></br>Collector App</h3>
              </div>

              <div className="portfolio-item-description">
                <h4>React App</h4>
              </div>

            </div>

            <div className="portfolio-image-container">
              <div className="portfolio-background-collector">

              </div>
            </div>
          </a>
        </div>


         <div className="portfolio-item rememberme" >
          <a href="https://remember-me-2018.herokuapp.com/">
            <div className="portfolio-text-container">

              <div className="portfolio-title-container">
                <h3 className="portfolio-item-title">Remember<br></br>Me</h3>
              </div>

              <div className="portfolio-item-description">
                <h4>React | Express</h4>
              </div>

            </div>

            <div className="portfolio-image-container">
              <div className="portfolio-background-rememberme">

              </div>
            </div>
          </a>
        </div>


         <div className="portfolio-item gearshare" >
          <a href="https://gear-share-app.herokuapp.com/">
            <div className="portfolio-text-container">

              <div className="portfolio-title-container">
                <h3 className="portfolio-item-title">Gear<br></br>Share</h3>
              </div>

              <div className="portfolio-item-description">
                <h4>React | Express</h4>
              </div>

            </div>

            <div className="portfolio-image-container">
              <div className="portfolio-background-gearshare">

              </div>
            </div>
          </a>
        </div>

      

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

