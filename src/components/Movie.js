import { useState } from "react";
import "./Movie.css";

const Movie = (props) => {
  const [movieFullInfo, setMovieFullInfo] = useState([]);
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Fetch more info on selected movie.
  const moreInfoHandler = async () => {
    if (Object.values(movieFullInfo).length === 0) {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${props.imdbID}&plot=full&apikey=${props.apiKey}`
      );
      const data = await response.json();

      const fetchedMovieData = {
        title: data.Title,
        poster: data.Poster,
        director: data.Director,
        released: data.Released,
        runtime: data.Runtime,
        genre: data.Genre,
        writer: data.Writer,
        actors: data.Actors,
        plot: data.Plot,
        language: data.Language,
        country: data.Country,
        awards: data.Awards,
      };

      setMovieFullInfo(fetchedMovieData);
    }

    setShowFullInfo(true);
  };

  // Minimize large search result.
  const minimizeMovieInfoHandler = () => {
    setShowFullInfo(false);
  };

  // Define large and small versions of movie to show.
  let content;
  if (showFullInfo) {
    content = (
      <div className="movieLarge">
        {movieFullInfo.poster !== "N/A" && (
          <div className="moviePosterLarge">
            <img src={movieFullInfo.poster} alt="Poster" />
          </div>
        )}
        <div className="movieContentLarge">
          <h2>{movieFullInfo.title}</h2>
          <h3>Director: {movieFullInfo.director}</h3>
          <p>Released: {movieFullInfo.released}</p>
          <p>Runtime: {movieFullInfo.runtime}</p>
          <p>Genre: {movieFullInfo.genre}</p>
          <p>Writer: {movieFullInfo.writer}</p>
          <p>Actors: {movieFullInfo.actors}</p>
          <p>Plot: {movieFullInfo.plot}</p>
          <p>Language: {movieFullInfo.language}</p>
          <p>Country: {movieFullInfo.country}</p>
          <p>Awards: {movieFullInfo.awards}</p>
          <button onClick={minimizeMovieInfoHandler}>Minimize</button>
          <button onClick={() => props.watchlistActionHandler(props)}>
            {props.watchlistActionText}
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="movieSmall">
        {props.poster !== "N/A" && (
          <div className="moviePosterSmall">
            <img src={props.poster} alt="Poster" />
          </div>
        )}
        <div className="movieContentSmall">
          <h2>{props.title}</h2>
          <h3>Released: {props.year}</h3>
          <button onClick={moreInfoHandler}>More info</button>
          <button onClick={() => props.watchlistActionHandler(props)}>
            {props.watchlistActionText}
          </button>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Movie;
