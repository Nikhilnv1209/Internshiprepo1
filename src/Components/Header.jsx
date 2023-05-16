import React from "react";
import ribben from "../assets/Banner/ribben.png";
import banner from "../assets/Banner/banner.png";
import trophygif from "../assets/Banner/trophybg.gif";
import mountain from "../assets/Banner/mountain.png";
import ribbens from "../assets/Banner/ribbens.png";
import "../styles/Header.css";

const Header = ({ title }) => {
  return (
     <header className="header">
      <img src={mountain} alt="" className="header__image--bottom" />
      <img src={ribbens} alt="" className="header__image--top" />
      <section className="header__content">
        <div className="header__title">
          <h1 className="header__title-text">{title}</h1>
          <img src={ribben} alt="" className="header__title-image" />
        </div>
        <p className="header__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="header__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <section className="header__banner">
        <img src={banner} alt="" className="header__banner-image" />
        <img src={trophygif} alt="" className="header__banner-trophy" />
      </section>
    </header>
  );
};

export default Header;
