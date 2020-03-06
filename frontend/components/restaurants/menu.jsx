import React from "react";

class MenuItems extends React.Component {
  render() {
    const { item } = this.props;
    if (item === "") return null; 
    const [ dish, desciption, price ] = item.split("-->") 
    return (
      <li className="restaurant-menu-item">
        <div className="restaurant-menu-dish">
          <h5>{dish}</h5>
          <h5>{price}</h5>
        </div> 
        <div className="restaurant-menu-description">{desciption}</div>
      </li>
    );
  }
}

export default MenuItems;