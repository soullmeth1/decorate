import React from "react";
import "./Side.scss";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

function Side() {
  return (
    <div className="side">
      <SearchIcon />
      <ul className="side__nav">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <MenuIcon />
    </div>
  );
}

export default Side;
