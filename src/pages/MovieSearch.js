import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";
import { useState, useRef } from "react";

const MovieSearch = (props) => {
  const titleRef = useRef("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Search movies with title entered in titleRef.
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
        <MoviesList
          searchResults={searchResults}
          watchlistActionText={"Add to watchlist"}
          watchlistActionHandler={addWatchlistHandler}
          apiKey={props.apiKey}
        />
      )}
    </>
  );
};

export default MovieSearch;
