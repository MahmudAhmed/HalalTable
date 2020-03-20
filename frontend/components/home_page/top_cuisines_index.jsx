import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

class TopCusinines extends React.Component {
  constructor(props) {
    super(props);
    this.handleCusinineClick = this.handleCusinineClick.bind(this);
  }

  componentDidMount(){
    const rightScroll = document.querySelector(".scroll-right");
    const cuisinesList = document.querySelector(".cuisines-list");
    if (cuisinesList.offsetWidth === cuisinesList.scrollWidth) {
      rightScroll.style.display = "none"
    }
  }

  handleScroll(e) {
    const cuisinesList = document.querySelector(".cuisines-list");
    const leftScroll = document.querySelector(".scroll-left");
    const rightScroll = document.querySelector(".scroll-right");
    if (cuisinesList.scrollLeft === 0) {
      leftScroll.style.display = "none"
    } else {
      leftScroll.style.display = "block"
    }

    if (cuisinesList.offsetWidth === cuisinesList.scrollWidth) {
      rightScroll.style.display = "none"
    }

    const leftPos = cuisinesList.scrollLeft;
    const ulWidth = cuisinesList.offsetWidth;
    var scrollwidth = cuisinesList.scrollWidth;
    if (leftPos === scrollwidth - ulWidth) {
      rightScroll.style.display = "none"
    } else {
      rightScroll.style.display = "block"
    }
  }

  handleScrollClick(btn){
    return e => {
      e.preventDefault();
      const cuisinesList = document.querySelector(".cuisines-list");
      btn === "right" ? cuisinesList.scrollLeft += 40 : cuisinesList.scrollLeft -= 40
    }
  }

  handleResize(){
    const rightScroll = document.querySelector(".scroll-right");
    const cuisinesList = document.querySelector(".cuisines-list");
    if (cuisinesList.offsetWidth === cuisinesList.scrollWidth) {
      rightScroll.style.display = "none"
    } else {
      rightScroll.style.display = "block"
    }
  }

  handleCusinineClick(value){
    return e => {
      e.preventDefault();
      this.props.history.push({ pathname: "/restaurants", state: { cuisine: value } });
    }
  }

  render() {
    window.addEventListener('resize', this.handleResize)
    return (
      <>
        <ul className="cuisines-list" onScroll={this.handleScroll}>
          <div className="scroll-left" onClick={this.handleScrollClick("left")}>
            <div className="scroll-icons" >
              <FontAwesomeIcon icon="angle-left" />
            </div>
          </div>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Afgan")}>
            <img src={window.afganDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Afgan Restaurants Around You</p>
            </div>
          </li>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Barbeque")}>
            <img src={window.bbqDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Barbeque Restaurants Around You</p>
            </div>
          </li>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Burgers & Wings")}>
            <img src={window.burgersDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Burgers & Wings Restaurants Around You</p>
            </div>
          </li>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Indian")}>
            <img src={window.indianDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Indian Restaurants Around You</p>
            </div>
          </li>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Middle Eastern")}>
            <img src={window.middleEasternDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Middle Eastern Restaurants Around You</p>
            </div>
          </li>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Seafood")}>
            <img src={window.seafoodDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Seafood Restaurants Around You</p>
            </div>
          </li>
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Turkish")}>
            <img src={window.turkishDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Turkish Restaurants Around You</p>
            </div>
          </li>
          
          <li className="cuisine-list-item" onClick={this.handleCusinineClick("Vegetarian")}>
            <img src={window.veggieDish} />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Vegetarian Restaurants Around You</p>
            </div>
          </li>
          <div className="scroll-right" onClick={this.handleScrollClick("right")}>
            <div className="scroll-icons" >
              <FontAwesomeIcon icon="angle-right" />
            </div>
          </div>
        </ul>
      </>
    )
  }
}

export default withRouter(TopCusinines);