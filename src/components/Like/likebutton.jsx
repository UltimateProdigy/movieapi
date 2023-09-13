import React, { useState } from "react";
import "./likebutton.css";
import filledheart from "../../assets/filledheart.png";
import unfilledheart from "../../assets/unfilledheart.png";

const Likebutton = ({className}) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
       setToggle(!toggle)
  }


  return (
    <div className={className}>
      <div onClick={handleClick} className="likebtn">
        <img style={{display: toggle ? "block" : "none"}} className="filled" src={filledheart} alt="" />
        <img style={{display: toggle ? "none" : "block"}} className="unfilled" src={unfilledheart} alt="" />
      </div>
    </div>
  );
};

export default Likebutton;
