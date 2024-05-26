import { LOGO_URL } from "./utils/constant";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;