import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import Nav from "./Nav";
import Title from "./Title";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const navItems = [
    {
      id: "1",
      title: "Tweeter",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl:
        "https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif",
      state: "NAVITEM",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "2",
      title: "Smart ToDo",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl:
        "https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif",
      state: "NAVITEM",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "3",
      title: "FitHub",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl:
        "https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif",
      state: "NAVITEM",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "4",
      title: "TUFT Sim",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl:
        "https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif",
      state: "NAVITEM",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "5",
      title: "Jungle",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl:
        "https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif",
      state: "NAVITEM",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "6",
      title: "Aircall",
      itemUrl: "https://github.com/cupokyle",
      navItemImgUrl:
        "https://pa1.narvii.com/6292/33c7cda3e5cc4b21250a70c98e0826d3c0708248_hq.gif",
      state: "NAVITEM",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main>
      <div className="pageWrapper">
        <Title />
        <Nav loading={loading} navItems={navItems} />
      </div>
    </main>
  );
}
