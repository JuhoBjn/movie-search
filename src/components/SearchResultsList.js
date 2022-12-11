import Movie from "./Movie";

const SearchResultsList = (props) => {
  // 'key' is to make React shut up about children in the list not having a key.
  // 'key' won't actually be received by child component since it's
  // a special prop used by React.
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movie
          key={movie.imdbID}
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
