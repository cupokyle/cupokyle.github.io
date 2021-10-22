import React, { useState } from "react";
import PropTypes from "prop-types";
import "./nav.css";

import NavItem from "./NavItem";

export default function Nav({ loading, navItems, isHovering, setIsHovering }) {
  // const [isHovering, setIsHovering] = useState(false);
  const LoadingRow = (
    <img
      className="loading list-item"
      alt=""
      src="https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
    />
  );
  if (loading) {
    return (
      <nav className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </nav>
    );
  }
  if (navItems.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no nav items</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const navItemsInOrder = [
    ...navItems.filter((p) => p.state === "NAVITEM_PINNED"),
    ...navItems.filter((p) => p.state !== "NAVITEM_PINNED"),
  ];

  return (
    <nav className="list-items">
      {navItemsInOrder.map((navItem) => (
        <NavItem
          key={navItem.id}
          navItem={navItem}
          isHovering={isHovering}
          setIsHovering={setIsHovering}
        />
      ))}
    </nav>
  );
}

Nav.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of navItems */
  navItems: PropTypes.arrayOf(NavItem.propTypes.navItem).isRequired,
};
Nav.defaultProps = {
  loading: false,
};
