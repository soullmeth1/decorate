import { Avatar } from "@material-ui/core";
import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">
        Deco<span>rative.</span>
      </h1>
      <ul className="navbar__nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
      </ul>
      <Avatar src="" alt="" />
    </div>
  );
}

export default Nav;
