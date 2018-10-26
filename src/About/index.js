import React, { Component } from 'react'
import "./style.css";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <div className="headshot-container">
          <img className="headshot-image" src="https://i.imgur.com/OXY5vCA.png"/>
        </div> */}

        <h2 className="about-header"> Scott Tsai</h2>

        <div className="bio-container">
        <p>As a software developer and photographer, I am constantly fascinated by the parallels found between great photographs and elegant code.  As Einstein said, “Everything should be as simple as it can be, but not simpler.” This is a concept I strive for in all of my work. My background as an entrepreneur also gave me the ability to improvise and learn quickly. My hope is to take all my skills and experiences and integrate them into code that will help others.</p>
        </div>
      </div>
    )
  }
}
