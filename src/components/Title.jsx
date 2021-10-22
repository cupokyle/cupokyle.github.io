import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "../App.css";

export default function Title() {
  return (
    <div class="titleBar">
      <div className="headerLink">
        <a href="https://www.linkedin.com/in/kyleforsyth/">
          <BsLinkedin className="headerLinkButton" size={50} />
        </a>
      </div>
      <div id="title">
        <img
          src="https://fontmeme.com/permalink/211022/6d231f6b9cf880944410a0b506a981fb.png"
          alt="super-mario-256-font"
          border="0"
        />

        <img
          src="https://fontmeme.com/permalink/211022/9563d32bc30e1363d0e2ce8a7db926d3.png"
          alt="super-mario-256-font"
          border="0"
        />

        <img
          src="https://fontmeme.com/permalink/211022/88d7582539d3f114b7b131b57d030e66.png"
          alt="super-mario-256-font"
          border="0"
        />
      </div>
      <div className="headerLink">
        <a href="https://github.com/cupokyle">
          <BsGithub className="headerLinkButton" size={50} />
        </a>
      </div>
    </div>
  );
}
