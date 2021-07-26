import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";
import request from "./request";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchActionMovies);
      setMovies(requests.data.results);
      return requests;
    }

    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      {/* {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))} */}
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
