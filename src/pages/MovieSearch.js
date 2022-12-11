import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import { useState, useRef } from "react";

const MovieSearch = (props) => {
  const titleRef = useRef("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Search movies with title entered in titleRef.
  const searchMoviesHandler = async (event) => {
    event.preventDefault(); // Prevent default behaviour of submitting a form.

    let searchTerm = titleRef.current.value;
    // Replace all spaces in search term with '+'.
    searchTerm = searchTerm.replace(/ /g, "+");

    setLoading(true); // Show loading text.
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${props.apiKey}`
    );
    const data = await response.json();

    const fetchedResults = [];
    for (const key in data.Search) {
      fetchedResults.push({
        title: data.Search[key].Title,
        year: data.Search[key].Year,
        imdbID: data.Search[key].imdbID,
        poster: data.Search[key].Poster,
      });
    }

    console.log(fetchedResults);
    setSearchResults(fetchedResults);
    setLoading(false);  // Remove loading text.
  };

  // Add movie to watchlist on Firebase.
  const addWatchlistHandler = async (props) => {
    console.log(props);

    const movie = {
      title: props.title,
      year: props.year,
      imdbID: props.imdbID,
      poster: props.poster,
    };

    const response = await fetch(
      "https://movie-search-396da-default-rtdb.europe-west1.firebasedatabase.app/watchlist.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
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
        <SearchResultsList
          movies={searchResults}
          addWatchlistHandler={addWatchlistHandler}
          apiKey={props.apiKey}
        />
      )}
    </>
  );
};

export default MovieSearch;
