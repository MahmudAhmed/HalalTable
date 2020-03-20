import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';


class Splash extends React.Component{
  constructor(){
    super();
    this.state = { city: "All"}
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBtnClick(e) {
    e.preventDefault();
    this.props.history.push({ pathname: "/restaurants", state: { city: this.state.city } });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ city: e.target.value })
  }


  render(){

    return(
      <div className="splash-form-container">
        <section className="splash-form">
          <h1 className="splash-form-title">
            Find your table for any occasion
                  </h1>
          <form>
            <div className="splash-location-container">
              <FontAwesomeIcon
                icon="map-marker-alt"
                className="splash-location-icon"
              />
              <select className="splash-location-select" value={this.state.city} onChange={this.handleChange}>
                <option value="All">All New York / Tri-State Area</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Bronx">Bronx</option>
                <option value="Staten Island">Staten Island</option>
              </select>
            </div>
            <button className="btn" id="splash-btn" onClick={this.handleBtnClick}>
              Let's go
            </button>
          </form>
        </section>
      </div>
    )
  }
}

export default withRouter(Splash);