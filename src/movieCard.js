import React from "react";
import "./movieCard.css";
const MovieCard = ({ title, image, overview, rating, release_date }) => {
  let path = `https://image.tmdb.org/t/p/w500/${image}`;

  return (
    <div className="movieCard">
      <div
        className="poster"
        style={{
          backgroundImage: `url(${path})`,
          backgroundSize: "15rem",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="movieInfo">
        <h1>{title}</h1>
        <h4 className="rating">Rating : {rating}/10</h4>
        <h4 className="date">Year: {release_date.slice(0, 4)}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
