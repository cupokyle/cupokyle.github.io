import React from "react";
import "./nav.css";

export default function NavCard({
  title,
  navItemImgUrl,
  itemUrl,
  gifUrl,
  altText,
}) {
  return (
    <div className="navCard">
      <h2>{title}</h2>
      <img src={gifUrl} alt={altText} />
    </div>
  );
}
