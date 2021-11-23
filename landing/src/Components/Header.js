import logo from '../images/logo.png';
import React from "react";


function Header() {
  return (
    <div className="header">
      <div className="col-20 logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-60">
        <div className="nav">
          <ul>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Docs</li>
          <li>More</li>
        </ul>
        </div>
      </div>
      <div className="col-20">
        <div className="btn-section">
        <button className="btn-signin">Sign in</button>
        <button className="btn-signup">Sign up</button>
        </div>
      </div>

    </div>
  );
}

export default Header;
