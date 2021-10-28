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
      itemUrl: "https://tweeter-46p8c.ondigitalocean.app/",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/408/408171.png",
      gifUrl: "https://s5.gifyu.com/images/tweeter-cap.gif",
      altText: "User using Tweeter",
    },
    {
      id: "2",
      title: "Smart ToDo",
      itemUrl: "https://github.com/cupokyle/smartToDo",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/408/408159.png",
      // gifUrl:
      //   "http://www.netanimations.net/Animated-orange-black-flashing-construction-barracade.gif",
      altText: "GIF is currently Under Construction",
    },
    {
      id: "3",
      title: "FitHub",
      itemUrl: "https://github.com/zeeplo/fithub",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/465/465253.png",
      gifUrl: "https://s5.gifyu.com/images/fithub-cap.gif",
      altText: "User using FitHub",
    },
    {
      id: "4",
      title: "TUFT Sim",
      itemUrl: "https://cupokyle.github.io/tuftsim/",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/411/411041.png",
      gifUrl: "https://s1.gifyu.com/images/tuft-cap.gif",
      altText: "GIF is currently Under Construction",
    },
    {
      id: "5",
      title: "Jungle",
      itemUrl: "https://github.com/cupokyle/jungle-rails",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/409/409071.png",
      // gifUrl:
      //   "http://www.netanimations.net/Animated-orange-black-flashing-construction-barracade.gif",
      altText: "GIF is currently Under Construction",
    },
    {
      id: "6",
      title: "Aircall",
      itemUrl: "https://kf-aircall.netlify.app/",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/465/465275.png",
      gifUrl: "https://s1.gifyu.com/images/aircall-cap.gif",
      altText: "User archives a call in aircall",
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
            gifUrl={isHovering.gifUrl}
            altText={isHovering.altText}
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
