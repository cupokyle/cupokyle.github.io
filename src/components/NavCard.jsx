import React from "react";

export default function NavCard({ title }) {
  return (
    <div>
      <span role="img" aria-label="cat">
        {title}
      </span>
    </div>
  );
}
