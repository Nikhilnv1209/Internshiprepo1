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
    <div className="toggles">
      <Link to="/">
        <button
          className={`btn btn-primary btn-all-badges
      ${active === "/" ? "active" : ""}`}
          onClick={() => handleToggle("/")}
        >
          All Badges
        </button>
      </Link>
      <Link to="/popular">
        <button
          className={`btn btn-primary btn-popular-badges
      ${active === "/popular" ? "active" : ""}`}
          onClick={() => handleToggle("/popular")}
        >
          Popular Badges
        </button>
      </Link>
      <Link to="/ongoing">
        <button
          className={`btn btn-primary btn-ongoing-badges
      ${active === "/ongoing" ? "active" : ""}`}
          onClick={() => handleToggle("/ongoing")}
        >
          Ongoing Badges
        </button>
      </Link>
      <Link to="/earned">
        <button
          className={`btn btn-primary btn-earned-badges
      ${active === "/earned" ? "active" : ""}`}
          onClick={() => handleToggle("/earned")}
        >
          Earned Badges
        </button>
      </Link>
    </div>
  );
};

export default Toggles;
