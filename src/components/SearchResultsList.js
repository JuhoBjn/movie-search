import MovieSmall from "../components/MovieSmall";

const SearchResultsList = (props) => {
  return (
    <ul>
      {props.searchResults.map((result) => (
        <MovieSmall
          title={result.Title}
          year={result.Year}
          type={result.Type}
          poster={result.Poster}
        />
      ))}
    </ul>
  );
};

export default SearchResultsList;
