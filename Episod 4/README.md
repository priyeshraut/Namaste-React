// One

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  // props is an object
  console.log(props)
  const {resName, resDish, rating, time} = props;
  return (
    <div className="card">
      <div className="resIMg">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
          alt=""
        />
      </div>
      {/* <h1>{props.resName}</h1> */}
      <h1>{resName}</h1>
      {/* <h2>{props.resDish}</h2> */}
      <h2>{resDish}</h2>
      {/* <h3>{props.rating}</h3> */}
      <h3>{rating}</h3>
      {/* <h3>{props.time}</h3> */}
      <h3>{time}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <ResCard  resName = "Meghna Food" resDish = "Biryani" rating="3.5" time="43 minute" />
      <ResCard resName = "KFC" resDish = "Burger" rating="5" time="22 minute"/>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
