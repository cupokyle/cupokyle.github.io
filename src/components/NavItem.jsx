import React from "react";
import PropTypes from "prop-types";
import "./nav.css";

export default function NavItem({
  navItem: { id, title, navItemImgUrl, state },
}) {
  return <div className={`navItem ${state}`}></div>;
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
