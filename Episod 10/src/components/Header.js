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
      <div className="flex justify-between items-center px-8 py-1 bg-slate-400 sm:bg-red-500 lg:bg-yellow-300">
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
            alt=""
            />
        </div>
        <div className="nav-items">
          <ul className="flex gap-6"> 
            <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/grocerry">Grocerry</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <button className="bg-slate-300 p-2" type="button" onClick={() => {
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