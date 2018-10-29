import React, { Component } from 'react';
import "./style.css";

export default class Contact extends Component {
  render() {
    return (
      <form className="form-container" method="POST" action="https://formspree.io/scotttsai2011@gmail.com" >
        <input className="your-email" type="email" name="email" placeholder="Your email" />
        <br></br>
        <textarea className="your-message" name="message" placeholder="Your message"></textarea>
        <br></br>
        <button className="contact-submit-button" type="submit">Send</button>
      </form>
    )
  }
}
