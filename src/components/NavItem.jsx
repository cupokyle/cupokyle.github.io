import React, { useState } from "react";
import PropTypes from "prop-types";
import "./nav.css";

export default function NavItem({
  isHovering,
  setIsHovering,
  navItem: { id, title, navItemImgUrl, state, itemUrl, gifUrl, altText },
}) {
  const handleMouseOver = () => {
    setIsHovering({
      id,
      title,
      navItemImgUrl,
      state,
      itemUrl,
      gifUrl,
      altText,
    });
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <a
      href={itemUrl}
      className="navItem"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      target="_blank"
      rel="noreferrer"
    >
      <img class="navImage" src={navItemImgUrl} alt="" />
    </a>
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
