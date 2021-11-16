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
      gifUrl: "https://im4.ezgif.com/tmp/ezgif-4-68b694eb5c22.gif",
      altText: "User using Tweeter",
    },
    {
      id: "2",
      title: "Smart ToDo",
      itemUrl: "https://github.com/cupokyle/smartToDo",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/408/408159.png",
      gifUrl:
        "https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/200/2016/09/28125140/photos-coming-soon.jpg",
      altText: "GIF is currently Under Construction",
    },
    {
      id: "3",
      title: "FitHub",
      itemUrl: "https://github.com/zeeplo/fithub",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/465/465253.png",
      gifUrl: "https://im4.ezgif.com/tmp/ezgif-4-18a6d73521c3.gif",
      altText: "User using FitHub",
    },
    {
      id: "4",
      title: "TUFT Sim",
      itemUrl: "https://cupokyle.github.io/tuftsim/",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/411/411041.png",
      gifUrl: "https://im4.ezgif.com/tmp/ezgif-4-01e4e7bd22b8.gif",
      altText: "GIF is currently Under Construction",
    },
    {
      id: "5",
      title: "Jungle",
      itemUrl: "https://github.com/cupokyle/jungle-rails",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/409/409071.png",
      gifUrl:
        "https://d2dgtayfmpkokn.cloudfront.net/wp-content/uploads/sites/200/2016/09/28125140/photos-coming-soon.jpg",
      altText: "GIF is currently Under Construction",
    },
    {
      id: "6",
      title: "Aircall",
      itemUrl: "https://kf-aircall.netlify.app/",
      navItemImgUrl: "https://cdn-icons-png.flaticon.com/512/465/465275.png",
      gifUrl: "https://im4.ezgif.com/tmp/ezgif-4-019281c04cbf.gif",
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
