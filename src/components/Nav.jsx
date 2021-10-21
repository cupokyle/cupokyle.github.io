import React from "react";
import PropTypes from "prop-types";

import NavItem from "./NavItem";

export default function Nav({ loading, navItems }) {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
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
    <div className="list-items">
      {navItemsInOrder.map((navItem) => (
        <NavItem key={navItem.id} navItem={navItem} />
      ))}
    </div>
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
