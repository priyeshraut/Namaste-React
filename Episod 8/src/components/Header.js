import { LOGO_URL } from "./utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login")

  // console.log("Header Render")

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial (just once)
  // if dependency array has somthing in it like [loginBtn] => called everytime loginBtn is updated (changes)
  useEffect(()=> {
    // console.log("useEffect Called")
  }, [loginBtn])


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt=""
            />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <button type="button" onClick={() => {
              loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login")
            }}>
              {loginBtn}
            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;