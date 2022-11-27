import Movie from "./Movie";

const MoviesList = (props) => {
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
          watchlistActionText={props.watchlistActionText}
          watchlistActionHandler={props.watchlistActionHandler}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
