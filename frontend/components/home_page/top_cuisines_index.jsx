import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopCusinines extends React.Component {
  componentDidMount(){
    const rightScroll = document.querySelector(".scroll-right");
    const cusinesList = document.querySelector(".cusines-list");
    if (cusinesList.offsetWidth === cusinesList.scrollWidth) {
      rightScroll.style.display = "none"
    }
  }

  handleScroll(e) {
    const cusinesList = document.querySelector(".cusines-list");
    const leftScroll = document.querySelector(".scroll-left");
    const rightScroll = document.querySelector(".scroll-right");
    if (cusinesList.scrollLeft === 0) {
      leftScroll.style.display = "none"
    } else {
      leftScroll.style.display = "block"
    }

    if (cusinesList.offsetWidth === cusinesList.scrollWidth) {
      rightScroll.style.display = "none"
    }

    const leftPos = cusinesList.scrollLeft;
    const ulWidth = cusinesList.offsetWidth;
    debugger
    var scrollwidth = cusinesList.scrollWidth;
    if (leftPos === scrollwidth - ulWidth) {
      rightScroll.style.display = "none"
    } else {
      rightScroll.style.display = "block"
    }
  }

  handleScrollClick(btn){
    return e => {
      e.preventDefault();
      const cusinesList = document.querySelector(".cusines-list");
      btn === "right" ? cusinesList.scrollLeft += 40 : cusinesList.scrollLeft -= 40
    }
  }

  handleResize(){
    debugger
    const rightScroll = document.querySelector(".scroll-right");
    const cusinesList = document.querySelector(".cusines-list");
    if (cusinesList.offsetWidth === cusinesList.scrollWidth) {
      rightScroll.style.display = "none"
    } else {
      rightScroll.style.display = "block"
    }
  }

  render() {
    window.addEventListener('resize', this.handleResize)
    return (
      <>
        <ul className="cusines-list" onScroll={this.handleScroll}>
          <div className="scroll-left" onClick={this.handleScrollClick("left")}>
            <div className="scroll-icons" >
              <FontAwesomeIcon icon="angle-left" />
            </div>
          </div>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg"/>
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Afgan Restaurants Around You</p>
            </div>
          </li>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Barbeque Restaurants Around You</p>
            </div>
          </li>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Burgers & Wings Restaurants Around You</p>
            </div>
          </li>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Middle Eastern Restaurants Around You</p>
            </div>
          </li>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Turkish Restaurants Around You</p>
            </div>
          </li>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Turkish Restaurants Around You</p>
            </div>
          </li>
          <li className="cusine-list-item">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
            <div className="cuisine-title-container">
              <p className="cuisine-title">Best Turkish Restaurants Around You</p>
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

export default TopCusinines;