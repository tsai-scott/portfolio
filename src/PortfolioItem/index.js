import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import "./style.css";

export default class PortfolioItem extends Component {
 
  render() {
    return (
        <Link to={'/projectdetail/' + this.props.id} className="portfolio-item" onClick={() => this.props.setDetailsPage(this.props.id)}>
        
          <div className="portfolio-text-container">

            <div className="portfolio-title-container">
              <h3 className="portfolio-item-title">{this.props.name}</h3>
            </div>

            <div className="portfolio-item-description">
              <h4>{this.props.technologies}</h4>
            </div>

          </div>

          <div className="portfolio-image-container">
            <div className={this.props.backgroundColorClass}>

            </div>
          </div>
        
      </Link>
    )
  }
}
