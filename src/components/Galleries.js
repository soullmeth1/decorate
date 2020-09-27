import React from "react";
import "./Galleries.scss";
import gl from "../images/gl.webp";
import gl1 from "../images/gl1.webp";
import gl2 from "../images/gl2.webp";
import gl3 from "../images/gl3.webp";

function Galleries() {
  return (
    <div className="gallery">
      <img src={gl} alt="" />
      <img src={gl1} alt="" />
      <img src={gl2} alt="" />
      <img src={gl3} alt="" />
      <img src={gl1} alt="" />
      <img src={gl} alt="" />
      <img src={gl3} alt="" />
      <img src={gl2} alt="" />
    </div>
  );
}

export default Galleries;
