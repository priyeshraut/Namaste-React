import { LOGO_URL } from "./utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login")

  useEffect(()=> {
  }, [loginBtn])


  const onlineStatus = useOnlineStatus();

  // using usecontext
  const contextData = useContext(UserContext);
  const {loggedInUser} = contextData;

    return (
      <div className="flex justify-between items-center px-8 py-1 bg-slate-400 sm:bg-red-500 lg:bg-gray-200">
        <div className="logo-container">
          <img
            className="w-[100px]"
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

            {/* using userContext (this userContext data I can get anywhere in my app. I can use anywhere in my app) */}

            <button className="bg-black p-1 text-white">{loggedInUser}</button>
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