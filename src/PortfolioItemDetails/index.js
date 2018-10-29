import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import "./style.css";

export default class PortfolioItemDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: {}
        }
    }

    render() {
        return (
            <div className="details-container">
                <h1 className="details-name">{this.props.currentProject.name}</h1>
                <h4 className="details-technologies">{this.props.currentProject.technologies}</h4>
                <div className="details-description">
                    <p >{this.props.currentProject.description}</p>
                </div>

                <button className="details-link"><a target="_blank" href={this.props.currentProject.link}>See the app</a></button>

                <div>
                    <img></img>
                </div>
            </div>
        )
    }
}
