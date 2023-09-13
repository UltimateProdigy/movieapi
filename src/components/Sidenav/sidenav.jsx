import React from "react";
import "./sidenav.css";
import tv from "../../assets/tv.png";
import Home from "../../assets/Home.png";
import Movies from "../../assets/Movie Projector.png";
import TVSeries from "../../assets/TV Show.png";
import Upcoming from "../../assets/Calendar.png";
import Logout from "../../assets/Logout.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="flex mt-8">
        <img className="mr-4 ml-2" src={tv} alt="" />
        <h3 className="moviebox">MovieBox</h3>
      </div>

      <div className="pt-12 ml-4">
        <Link to="/">
          <div className="links flex pb-6">
            <img className="mt-3 pr-4" src={Home} alt="" />
            <h3 className="title">Home</h3>
          </div>
        </Link>
        <div className="links flex pb-6">
          <img className="mt-2 pr-5" src={Movies} alt="" />
          <h3 className="title">Movies</h3>
        </div>
        <div className="links flex pb-6">
          <img className="mt-3 pr-4" src={TVSeries} alt="" />
          <h3 className="title">TV series</h3>
        </div>
        <div className="links flex pb-6">
          <img className="mt-3 pr-4" src={Upcoming} alt="" />
          <h3 className="title">Upcoming</h3>
        </div>
      </div>
      <div className="quiz">
        <p className="quizintro">Play movie quizes and earn free tickets</p>
        <p className="quizdetails">50k people are playing now</p>
        <div className="quizbtn">
          <p className="start">Start playing</p>
        </div>
      </div>
      <div className="links flex pb-6 ml-4 mt-6">
        <img className="mt-3 pr-4" src={Logout} alt="" />
        <h3 className=" mt-5 title">Log out</h3>
      </div>
    </div>
  );
};

export default Sidenav;
