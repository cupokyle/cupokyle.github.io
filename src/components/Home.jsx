import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import Nav from "./Nav";
import NavCard from "./NavCard";
import Title from "./Title";
import DefaultCard from "./DefaultCard";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);
  const navItems = [
    {
      id: "1",
      title: "Tweeter",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/408/408171.png",
    },
    {
      id: "2",
      title: "Smart ToDo",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/408/408159.png",
    },
    {
      id: "3",
      title: "FitHub",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/465/465253.png",
    },
    {
      id: "4",
      title: "TUFT Sim",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/411/411041.png",
    },
    {
      id: "5",
      title: "Jungle",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/409/409071.png",
    },
    {
      id: "6",
      title: "Aircall",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/465/465275.png",
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main>
      <div className="pageWrapper">
        <Title />
        {isHovering && (
          <NavCard
            title={isHovering.title}
            navItemImgUrl={isHovering.navItemImgUrl}
            itemUrl={isHovering.itemUrl}
          />
        )}
        {!isHovering && <DefaultCard />}
        <Nav
          loading={loading}
          navItems={navItems}
          isHovering={isHovering}
          setIsHovering={setIsHovering}
        />
      </div>
      {/* <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </main>
  );
}
