import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/logo.png";
import "./index.css";

//Planning

/*Headers
 -logo
 -Nav item
Body
 -search,
 -RestaurantContainer
   -RestaurandCard
Footer
 -Copyrights
 -Links
 -Address/contacts
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img className="logo" src={logo} />
      </div>
      <h3>Meghna Food</h3>
      <h4>burger, pizza, perry phery</h4>
      <h4>400 price</h4>
      <h4>4.3 star</h4>
      <h4>35 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-contaier">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const Footer = () => {};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("div"));

root.render(<AppLayout />);
