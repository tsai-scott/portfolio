import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PortfolioItem from "../PortfolioItem";
import "./style.css";


export default class Portfolio extends Component {
  

  // document.querySelector(".bumpin").addEventListener("mouseover", function() {
  //   .style.backgroundImage = "url(https://media.coindesk.com/uploads/2017/12/Soap-bubbles.jpg)";
  // });

  

  render() {
    
    return (
      <div className="portfolio-container">
        {/* <div className="portfolio-link bumpin" onMouseEnter={this.props.setBackground('/images/bumpin.jpg')}><a href="https://vigilant-beaver-4f448a.netlify.com/"><h3>Bumpin' Bubbles</h3></a></div> */}


        {this.props.projects.map(project => {        
                return(                   
                        <PortfolioItem  
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                technologies={project.technologies}
                                link={project.link}
                                backgroundColorClass={project.backgroundColorClass}
                                setDetailsPage={this.props.setDetailsPage}
                                />
                  
                 )
            })}

      </div>
    )
  }
}

