import React, { useEffect, useState } from "react";
import Badgesitems from "./Badgesitems";
import { allbadges, popularbadges, userbadges } from "../Constants/badgesdata";
import { useOutletContext, useParams } from "react-router-dom";
import '../Styles/BadgeTypes.css'

const BadgeTypes = () => {
  const { badgetype } = useParams();
  const { userbadgesids } = useOutletContext();
  // console.log(badgetype);
  // console.log(userbadgesids);
  // console.log(user);

  // array finding
  const BadgeArray = (badgetype) => {
    switch (badgetype) {
      case undefined:
        return allbadges;
      case "popular":
        return popularbadges;
      case "ongoing":
        return popularbadges;
      default:
        return userbadges;
    }
  };

  useEffect(() => {
    if (noOfElements === 6) return;
    setNoOfElements(6);
    // console.log("reset");
  }, [badgetype]);

  // for pagination
  const [noOfElements, setNoOfElements] = useState(6);
  const slice = BadgeArray(badgetype).slice(0, noOfElements);

  return (
    <div className="Badgetypecontainer">
      {slice.map((badge) => {
        const print = userbadgesids.has(badge.id);
        return (
          <Badgesitems
            key={badge.id}
            badgeid={badge.id}
            earned={print}
            badgeimage={badge.img}
            badgetype={badgetype}
          />
        );
      })}
      {noOfElements < BadgeArray(badgetype).length && (
        <button
          onClick={() => setNoOfElements(noOfElements + 4)}
          className="btn"
        >
          View more
        </button>
      )}
    </div>
  );
};

export default BadgeTypes;
