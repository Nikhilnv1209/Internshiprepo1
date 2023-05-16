import React from "react";
import arrow from "../assets/Badges/Arrow.png";
import "../Styles/BadgeItems.css";

const Badgesitems = ({ badgeid, badgeimage, earned, badgetype }) => {
  // console.log("in badgeitems component",earned,badgeid);

  const badgeType = (badgetype) => {
    switch (badgetype) {
      case undefined:
        return "Complete the badge";
      case "popular":
        return "Complete this Popular badge";
      case "ongoing":
        return "Complete this ongoing Badge";
      default:
        return "You have Earned this badge";
    }
  };

  return (
    <div className="profile-card">
      <aside>
        <h1>
          {earned && badgetype !== "ongoing"
            ? `You have Earned this badge ${badgeid}`
            : `${badgeType(badgetype)} ${badgeid}`}
        </h1>
        <p>
          Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum m lorem ipsim
          fldkjfksdjflsdfj jdjflksjdf o sflsml8f flajfl
        </p>
      </aside>
      <aside>
        <img src={badgeimage} alt="badge" />
        <div>
          <button>View more</button>
          <img src={arrow} alt="arrow" />
        </div>
      </aside>
    </div>
  );
};
export default Badgesitems;
