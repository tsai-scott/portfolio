import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PortfolioItem from "../PortfolioItem";
import "./style.css";

export default class Portfolio extends Component {

  render() {
    
    return (
      <div className="portfolio-container">
  
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

