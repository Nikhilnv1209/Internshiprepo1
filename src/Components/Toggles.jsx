import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Toggles.css";

const Toggles = () => {
  const location = window.location.pathname;
  const [active, setActive] = useState(location);

  const handleToggle = (location) => {
    if (active === location) return;
    setActive(location);
  };

  return (
    <div className="toggles__container">
      <div className="toggles">
        <Link to="/badges">
          <button
            className={`btn btn-primary btn-all-badges
      ${active === "/badges" ? "active" : ""}`}
            onClick={() => handleToggle("/badges")}
          >
            All Badges
          </button>
        </Link>
        <Link to="/badges/popular">
          <button
            className={`btn btn-primary btn-popular-badges
      ${active === "/badges/popular" ? "active" : ""}`}
            onClick={() => handleToggle("/badges/popular")}
          >
            Popular Badges
          </button>
        </Link>
        <Link to="/badges/ongoing">
          <button
            className={`btn btn-primary btn-ongoing-badges
      ${active === "/badges/ongoing" ? "active" : ""}`}
            onClick={() => handleToggle("/badges/ongoing")}
          >
            Ongoing Badges
          </button>
        </Link>
        <Link to="/badges/earned">
          <button
            className={`btn btn-primary btn-earned-badges
          ${active === "/badges/earned" ? "active" : ""}`}
            onClick={() => handleToggle("/badges/earned")}
          >
            Earned Badges
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Toggles;
