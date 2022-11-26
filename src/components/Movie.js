import { useState } from "react";
import "./Movie.css";

const Movie = (props) => {
  const [movieFullInfo, setMovieFullInfo] = useState([]);
  const [showFullInfo, setShowFullInfo] = useState(false);

  // Fetch more info on select movie.
  const moreInfoHandler = async () => {
    console.log(`Fetching more info for: ${props.imdbID}`);
    const response = await fetch(
      `http://www.omdbapi.com/?i=${props.imdbID}&plot=full&apikey=${props.apiKey}`
    );
    const data = await response.json();
    console.log(data);
    setMovieFullInfo(data);
    setShowFullInfo(true);
  };

  // Minimize large search result.
  const minimizeMovieInfoHandler = () => {
    setShowFullInfo(false);
  }

  let content;
  if (showFullInfo) {
    content = (
      <div className="movieLarge">
        {movieFullInfo.Poster !== "N/A" && (
          <div className="moviePosterLarge">
            <img src={movieFullInfo.Poster} alt="Poster" />
          </div>
        )}
        <div className="movieContentLarge">
          <h2>{movieFullInfo.Title}</h2>
          <h3>Director: {movieFullInfo.Director}</h3>
          <p>Released: {movieFullInfo.Released}</p>
          <p>Runtime: {movieFullInfo.Runtime}</p>
          <p>Genre: {movieFullInfo.Genre}</p>
          <p>Writer: {movieFullInfo.Writer}</p>
          <p>Actors: {movieFullInfo.Actors}</p>
          <p>Plot: {movieFullInfo.Plot}</p>
          <p>Language: {movieFullInfo.Language}</p>
          <p>Country: {movieFullInfo.Country}</p>
          <p>Awards: {movieFullInfo.Awards}</p>
          <button
            onClick={() => props.addWatchlistHandler(movieFullInfo.imdbID)}
          >
            Add to watchlist
          </button>
          <button onClick={minimizeMovieInfoHandler}>Minimize</button>
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
          <p>Type: {props.type}</p>
          <button onClick={moreInfoHandler}>More info</button>
          <button onClick={() => props.addWatchlistHandler(props.imdbID)}>
            Add to watchlist
          </button>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Movie;
