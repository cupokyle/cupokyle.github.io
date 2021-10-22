import React, { useState } from "react";
import PropTypes from "prop-types";
import "./nav.css";

import NavCard from "./NavCard";

export default function NavItem({
  navItem: { id, title, navItemImgUrl, state, itemUrl },
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="navItem"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* <img
        src="https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif"
        alt=""
      /> */}
      {isHovering && (
        <NavCard
          title={title}
          navItemImgUrl={navItemImgUrl}
          itemUrl={itemUrl}
        />
      )}
      <img
        src="https://66.media.tumblr.com/0caee7e4146a8a74e6a740d656ecb85d/tumblr_mnakva6Dds1rfjowdo1_500.gif"
        alt=""
      />
    </div>
  );
}

NavItem.propTypes = {
  /** Composition of the project */
  project: PropTypes.shape({
    /** Id of the project */
    id: PropTypes.string.isRequired,
    /** Title of the project */
    title: PropTypes.string.isRequired,
    /** Image for the project */
    navItemImgUrl: PropTypes.string.isRequired,
    /** Current state of the project */
    state: PropTypes.string.isRequired,
  }),
};
