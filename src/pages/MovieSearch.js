import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import { useState, useRef } from "react";

const MovieSearch = (props) => {
  const titleRef = useRef("");
  const [searchResults, setSearchResults] = useState([]);

  const searchMoviesHandler = async (event) => {
    event.preventDefault();

    let searchTerm = titleRef.current.value;
    searchTerm = searchTerm.replace(/ /g, "+");
    console.log(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${props.apiKey}`);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${props.apiKey}`
    );
    const data = await response.json();
    console.log(data.Search);
    setSearchResults(data.Search);
  };

  return (
    <>
      <SearchBar
        searchMoviesHandler={searchMoviesHandler}
        titleRef={titleRef}
      />
      <SearchResultsList searchResults={searchResults} />
    </>
  );
};

export default MovieSearch;
