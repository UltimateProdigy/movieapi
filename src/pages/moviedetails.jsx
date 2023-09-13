import React from "react";
import "./moviedetails.css";
import Sidenav from "../components/Sidenav/sidenav";
import Spinner from "../components/Spinner/spinner";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const Moviedetails = () => {
  const MOVIE_IMAGE_URL_PREFIX =
    "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const callGetTMDBAPI = async (path, params) =>
    await axios
      .get(`${TMDB_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
        params: params,
      })
      .then((response) => {
        console.log("This is your response", response);
        return response;
      })
      .catch((err) => {
        console.log("There was an error in getting movie details...", err);
        return err;
      });

  const getMovieDetail = async (movieId) => {
    try {
      const movieDetailResponse = await callGetTMDBAPI(`movie/${movieId}`, {});
      const movieObject = movieDetailResponse.data;
      setMovie(movieObject);
      console.log("Movie details received:", movieObject);
      setLoading(true);
    } catch (error) {
      console.log("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovieDetail(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <div>
          <Sidenav />
          <div className="totalnav flex">
            <img
              className="image"
              src={`${MOVIE_IMAGE_URL_PREFIX}/${movie.poster_path}`}
              alt=""
            />
            <div>
              <div className="titlediv">
                <p className="font-bold movietitle" data-testid="movie-title">
                  {movie.original_title}
                </p>
                <p
                  className="moviedetailstitle"
                  data-testid="movie-release-date"
                >
                  Release Date: {movie.release_date}
                </p>
              </div>
              <div>
                <p className="moviedetailstitle">
                  ⭐ {movie.vote_average} | {movie.vote_count}
                </p>
                <p className="moviedetailstitle" data-testid="movie-runtime">
                  Runtime: {movie.runtime} minutes
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="overview" data-testid="movie-overview">
              {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Moviedetails;
