import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="navbar-logo">
            <Link to="/">
              <img
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                alt=""
                srcset=""
              />
            </Link>
          </li>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <form action="">
              <input
                type="text"
                name=""
                id="input-text"
                placeholder="Weather In Your City"
              />
            </form>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Guide
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                API
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Marketplace
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Maps
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Initiative
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                For Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Support
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
