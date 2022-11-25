import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import { useState, useRef } from "react";

const MovieSearch = (props) => {
  const titleRef = useRef("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchMoviesHandler = async (event) => {
    event.preventDefault();

    let searchTerm = titleRef.current.value;
    searchTerm = searchTerm.replace(/ /g, "+");

    setLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${props.apiKey}`
    );
    const data = await response.json();
    console.log(data.Search);
    setSearchResults(data.Search);
    setLoading(false);
  };

  return (
    <>
      <SearchBar
        searchMoviesHandler={searchMoviesHandler}
        titleRef={titleRef}
      />
      {loading ? (
        <h3 className="loadingText">Searching movies...</h3>
      ) : (
        <SearchResultsList searchResults={searchResults} />
      )}
    </>
  );
};

export default MovieSearch;
