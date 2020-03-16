import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

class ChangeLocation extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(city) {
    return e => {
      e.preventDefault();
      // document.querySelector(".location").style.display = "none"
      // document.querySelector(".location-triangle").style.display = "none"
      this.props.history.push({ pathname: "/restaurants", state: { city } })
    }
  }

  render() {
    return (
      <div className="nav-bar-location">
        <section id="change-location" >
          <div>
            <FontAwesomeIcon icon="map-marker-alt" className="header-icon change-location-icon" />
          </div>
          <div>
            <FontAwesomeIcon icon="angle-down" className="header-icon change-location-icon dropdown-icon" />
          </div>
        </section>
        <span className="location-triangle"></span>
        <ul className="location">
          <div className="menu-sub-header">Choose Your City</div>
          <li onClick={this.handleClick("All")}>
            <div>All</div>
          </li>
          <li onClick={this.handleClick("Manhattan")}> 
            <div>Manhattan</div>
          </li>
          <li onClick={this.handleClick("Brooklyn")}>
            <div>Brooklyn</div>
          </li>
          <li onClick={this.handleClick("Queens")}>
            <div>Queens</div>
          </li>
          <li onClick={this.handleClick("Bronx")}>
            <div>Bronx</div>
          </li>
          <li onClick={this.handleClick("Staten Island")}>
            <div>Staten Island</div>
          </li>

        </ul>
      </div>
    )
  }

}

export default withRouter(ChangeLocation);