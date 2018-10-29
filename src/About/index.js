import React, { Component } from 'react'
import "./style.css";

export default class About extends Component {
  render() {
    return (
      <div className="bio-container">       
        <img className="headshot-image" src={"/images/ScottTsai-AboutMe.jpg"} />
        <img className="headshot-image-mobile" src={"/images/ScottTsai-AboutMe-Mobile.jpg"} />
      </div>
    )
  }
}
