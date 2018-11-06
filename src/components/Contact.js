import React, { Component } from "react";
import PropTypes from "prop-types";

//This class component sets the original state showing (true) or hiding (false) the contact info on load.
class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // I used !this.state.showContactInfo instaed of false/true to be able to toggle between state, and shorten the code
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact; //pulls from contact form
    const { showContactInfo } = this.state; //Renders toggle state

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>
        {showContactInfo ? (
          //This section of code triggers the toggle.
          <ul className="list-group">
            <li className="list-group-item">Email: {email} </li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

//Prop type functions
Contact.propTypes = {
  contact: PropTypes.object.isRequired //Information required
};

//This command exports the entire Contact.js form as a default state.
export default Contact;
