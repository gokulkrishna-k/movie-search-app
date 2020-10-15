import React from "react";
import "./developerInfo.css";

export const DeveloperInfo = () => {
  return (
    <div className="developerInfo">
      <h3>
        Developed by{" "}
        <a href="https://github.com/gokulkrishna-k" target="_blank">
          Gokul Krishna
        </a>
      </h3>
      <div className="tools">
        <h3>Framework: React</h3>
        <h3>
          API :{" "}
          <a href="https://www.themoviedb.org/" target="_blank">
            TMDB
          </a>
        </h3>
      </div>
    </div>
  );
};

export default DeveloperInfo;
