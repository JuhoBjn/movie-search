import Movie from "./Movie";

const WatchlistMoviesList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          dbID={movie.key}
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
          imdbID={movie.imdbID}
          apiKey={props.apiKey}
          watchlistActionText={"Remove from watchlist"}
          watchlistActionHandler={props.removeFromWatchlistHandler}
        />
      ))}
    </ul>
  );
};

export default WatchlistMoviesList;
