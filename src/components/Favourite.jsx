import React, { useEffect, useState } from "react";
import "./Favourite.css";
import axios from "axios";
import IDMB from "../assets/IDMB.png";
import Tomato from "../assets/Tomato.png";
import Spinner from "./Spinner/spinner";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.jpg";
import Instagram from "../assets/instagram.jpg";
import Twitter from "../assets/twitter.jpg";
import Youtube from "../assets/youtube.jpg";
import Likebutton from "./Like/likebutton";

const Favourite = () => {
  const MOVIE_IMAGE_URL_PREFIX =
    "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async (path, params) => {
    await axios
      .get(`${TMDB_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
        params: params,
      })
      .then((response) => {
        const result = response.data.results;
        setMovies(result);
        console.log("Movies", result);
        setLoading(true);
      })
      .catch((err) => {
        console.log("An error occurred in getting movies: ", err);
      });
  };

  useEffect(() => {
    getMovies("movie/top_rated", {});
  }, []);

  const numberOfMovies = 10;
  const moviedata = movies.slice(0, numberOfMovies);

  return (
    <>
      {loading ? (
        <div className="featured">
          <div className="div">
            <h1 className="featuredmovie">Featured Movie</h1>
            <h3 className="seemore">See More &gt; </h3>
          </div>
          <div className="card-parent">
            {moviedata.map((movie) => (
              <Link to={`/${movie.id}`}>
                <div className="card" data-testid="movie-card">
                  <Likebutton />
                  <img                   
                    className="images"
                    src={`${MOVIE_IMAGE_URL_PREFIX}${movie.poster_path}`}
                    data-testid="movie-poster"
                  />
                  <h3 className="date" data-testid="movie-release-date">
                    Release date: <span>{movie.release_date}</span>
                  </h3>
                  <p data-testid="movie-title">
                    {movie.title ? movie.title : movie.name}
                  </p>
                  <div className="flex">
                    <div className="rating-div mr-8">
                      <img className="mr-4 mt-2" src={IDMB} alt="" />
                      <h3 className="cardrating">{movie.vote_count}</h3>
                    </div>
                    <div className="rating-div">
                      <img className="mr-4 mt-2" src={Tomato} alt="" />
                      <h3 className="cardrating">{movie.vote_average} / 10</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="footerlinks">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />
          </div>
          <div className="conditions">
            <p>Conditions of use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
          </div>
          <div className="footer">
            <p>© 2021 MovieBox by Akinola Ayobami Joshua </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Favourite;
