import React from "react";
import tv from "../assets/tv.png";
import "./Herosection.css";
import backgroundimage from "../assets/John.png";
import IDMB from "../assets/IDMB.png";
import Tomato from "../assets/Tomato.png";
import PLAY from "../assets/PLAY.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Search from "../assets/Search.jpg"

const Herosection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "600px",
        width: "98.7vw",
      }}
    >
      <div className="navbar">
        <div className="flex">
          <img className="mr-6" src={tv} alt="" />
          <h1>MovieBox</h1>
        </div>
        <div className="custom-input">
          <input type="text" placeholder="What do you want to watch?" />
        </div>
        <div className="flex">
          <h3 className="signin mr-4">Sign In</h3>
          <div className=" mt-2 hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mt-2 ml-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="details">
        <h1 className="johnwick">John Wick 3 : Parabellum</h1>
        <div className="flex">
          <div className="rating-div mr-8">
            <img className="mr-4 mt-2" src={IDMB} alt="" />
            <h3 className="rating">86.0 / 100</h3>
          </div>
          <div className="rating-div">
            <img className="mr-4 mt-2" src={Tomato} alt="" />
            <h3 className="rating">97%</h3>
          </div>
        </div>
        <h3 className="moviedetails">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </h3>
        <Link
          to={{ pathname: "https://www.youtube.com/watch?v=M7XM597XO94" }}
          target="_blank"
        >
          <button>
            <img src={PLAY} alt="" /> WATCH TRAILER
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Herosection;
