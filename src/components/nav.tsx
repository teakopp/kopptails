import React from "react";
import "./nav.css";
import search from "../icons/magnifying-glass-solid.svg";
import menu from "../icons/bars-solid.svg";

interface NavProps {
  title: string;
  subtitle: string;
}

function Nav(props: NavProps) {
  return (
    <div className="Nav">
      <header className="nav-title">
        <div>{props.title}</div>
      </header>
      <div className="nav-container">
        <div className="nav-item">
          <button className="nav-clear-button">
            <img className="nav-menu" src={menu} alt="search" />
          </button>
        </div>
        <div className="nav-item">
          <div className="nav-location">
            <div>{props.subtitle}</div>
          </div>
        </div>
        <div className="nav-item">
          <button className="nav-clear-button">
            <img className="nav-search" src={search} alt="search" />
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div></div>
    </div>
  );
}
export default Nav;
