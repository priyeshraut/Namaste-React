import { LOGO_URL } from "./utils/constant";
import { useEffect, useState } from "react";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login")

  console.log("Header Render")

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial (just once)
  // if dependency array has somthing in it like [loginBtn] => called everytime loginBtn is updated (changes)
  useEffect(()=> {
    console.log("useEffect Called")
  }, [loginBtn])


    return (
      <div className="header">
        <div className="logo-container">
            {/* Never ever create any hard-coded string into your component file */}
            {/* src="" => this is hard-coded data */}
          <img
            className="logo"
            src={LOGO_URL}
            alt=""
            />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
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