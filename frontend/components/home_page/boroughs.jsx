import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

class TopBoroughs extends React.Component {
  constructor(props) {
    super(props);
    this.handleBoroughClick = this.handleBoroughClick.bind(this);
  }


  handleBoroughClick(value) {
    return e => {
      e.preventDefault();
      this.props.history.push({ pathname: "/restaurants", state: { city: value } });
    }
  }

  render() {
    return (
      <>
        <ul className="boroughs-list">
          <li className="borough" onClick={this.handleBoroughClick("")}>
            <img src={window.nycFive} />
            <div className="borough-title-container">
              <h3 className="borough-title">Best of the 5</h3>
            </div>
          </li>
          <li className="borough" onClick={this.handleBoroughClick("Manhattan")}>
            <img src={window.manhattan} />
            <div className="borough-title-container">
              <h3 className="borough-title">Manhattan</h3>
            </div>
          </li>
          <li className="borough" onClick={this.handleBoroughClick("Brooklyn")}>
            <img src={window.brooklyn} />
            <div className="borough-title-container">
              <h3 className="borough-title">Brooklyn</h3>
            </div>
          </li>
          <li className="borough" onClick={this.handleBoroughClick("Queens")}>
            <img src={window.queens} />
            <div className="borough-title-container">
              <h3 className="borough-title">Queens</h3>
            </div>
          </li>
          <li className="borough" onClick={this.handleBoroughClick("Bronx")}>
            <img src={window.bronx} />
            <div className="borough-title-container">
              <h3 className="borough-title">Bronx</h3>
            </div>
          </li>
          <li className="borough" onClick={this.handleBoroughClick("Staten Island")}>
            <img src={window.statenIsland} />
            <div className="borough-title-container">
              <h3 className="borough-title">Staten Island</h3>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default withRouter(TopBoroughs);