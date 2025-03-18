import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <div className="header-container">
        <div className="header-logo">
          <h1>Aqua Pearl Lake Resort</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </button>
      </div>
    </header>
  );
};

export default Header;