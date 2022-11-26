import Movie from "../components/Movie";

const SearchResultsList = (props) => {
  return (
    <ul>
      {props.searchResults.map((result) => (
        <Movie
          key={result.imdbID}
          title={result.Title}
          year={result.Year}
          type={result.Type}
          poster={result.Poster}
          imdbID={result.imdbID}
          apiKey={props.apiKey}
          addWatchlistHandler={props.addWatchlistHandler}
        />
      ))}
    </ul>
  );
};

export default SearchResultsList;
