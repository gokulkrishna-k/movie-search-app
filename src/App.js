import React, { useState } from "react";
import "./App.css";
import "./movieCard";
import MovieCard from "./movieCard";
import DeveloperInfo from "./developerInfo";

const App = () => {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [result, setResult] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const getMovieList = async () => {
    const responce = await fetch(url);
    const finalData = await responce.json();
    if (finalData.total_results > 0) {
      setMovieList(finalData.results);
      setResult("success");
    } else {
      setResult("failed");
    }
    setQuery("");
  };

  const updateSearch = (e) => {
    setQuery(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    getMovieList();
  };

  return (
    <div className="app">
      <div className="heading">
        <h1>Movie Search</h1>
        <h3>by Gokul Krishna</h3>
      </div>
      <div className="form">
        <h4>Enter Movie Name:</h4>
        <form onSubmit={getSearch}>
          <input type="text" value={query} onChange={updateSearch} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="result">
        {result === "success"
          ? movieList
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                  release_date={movie.release_date}
                  rating={movie.vote_average}
                />
              ))
          : null}
        {result === "failed" ? (
          <h3 className="error">Result not Found!</h3>
        ) : null}
      </div>
      <DeveloperInfo />
    </div>
  );
};

export default App;
