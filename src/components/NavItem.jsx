import React, { useState } from "react";
import PropTypes from "prop-types";
import "./nav.css";

import NavCard from "./NavCard";

export default function NavItem({
  isHovering,
  setIsHovering,
  navItem: { id, title, navItemImgUrl, state, itemUrl },
}) {
  const handleMouseOver = () => {
    setIsHovering({ id, title, navItemImgUrl, state, itemUrl });
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
      <img class="navImage" src={navItemImgUrl} alt="" />
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
