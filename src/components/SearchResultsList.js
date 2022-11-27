import Movie from "./Movie";

const SearchResultsList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
          imdbID={movie.imdbID}
          apiKey={props.apiKey}
          watchlistActionText={"Add to watchlist"}
          watchlistActionHandler={props.addWatchlistHandler}
        />
      ))}
    </ul>
  );
};

export default SearchResultsList;
