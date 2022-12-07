import Movie from "./Movie";

const WatchlistMoviesList = (props) => {
  // Key in map is to make React shut up about children in the list
  // not having a key.
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.key}
          dbID={movie.key}
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
          imdbID={movie.imdbID}
          apiKey={props.apiKey}
          watchlistActionText={"Remove from watchlist"}
          watchlistActionHandler={props.showModalHandler}
        />
      ))}
    </ul>
  );
};

export default WatchlistMoviesList;
