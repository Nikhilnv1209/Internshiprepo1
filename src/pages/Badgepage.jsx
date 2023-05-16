import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Toggles from "../Components/Toggles";
import { userbadges } from "../Constants/badgesdata";
import "../Styles/BadgePage.css"

const Badgepage = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);

  // this array will give the ids of all the badges that the user has earned
  // [1,2,3,4,6,7,10,11,12,14,15]
  const userbadgesids = new Set(userbadges.map(badge => badge.id));

  // fetch user data from api and pass it to the outlet

  function getTitle(pathname) {
    switch (pathname) {
      case "/":
        return "Earn a badge";
      case "/popular":
        return "Popular Badges";
      case "/ongoing":
        return "Ongoing Badges";
      case "/earned":
        return "Earned Badges";
      default:
        return "Not Found";
    }
  }

  // console.log(title);

  return (
    <div className="badgescontainer">
      <Header title={title} />
      <Toggles />
      {/* outlet is used to render the childrens in the routes. the childrens are defined in the routes in app component */}
      <Outlet context={{ userbadgesids }} />
    </div>
  );
};

export default Badgepage;
