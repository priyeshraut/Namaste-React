import { LOGO_URL } from "./utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login")

  useEffect(()=> {
  }, [loginBtn])


  const onlineStatus = useOnlineStatus();

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
            <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/grocerry">Grocerry</Link></li>
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