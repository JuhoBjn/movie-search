import { useEffect, useState } from "react";
import WatchlistMoviesList from "../components/WatchlistMoviesList";

const Watchlist = (props) => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch watchlist from Firebase.
  const fetchWatchlist = async () => {
    setLoading(true);
    const response = await fetch(
      "https://movie-search-396da-default-rtdb.europe-west1.firebasedatabase.app/watchlist.json"
    );
    const data = await response.json();

    const fetchedWatchlist = [];

    for (const key in data) {
      fetchedWatchlist.push({
        key: key,
        poster: data[key].poster,
        title: data[key].title,
        year: data[key].year,
        imdbID: data[key].imdbID,
      });
    }
    console.log(fetchedWatchlist);
    setWatchlist(fetchedWatchlist);
    setLoading(false);
  };

  const removeFromWatchlistHandler = async (props) => {
    console.log("Remove from watchlist clicked.");
    console.log(props);
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  return (
    <>
      {loading ? (
        <h3 className="loadingText">Fetching watchlist...</h3>
      ) : (
        <WatchlistMoviesList
          movies={watchlist}
          removeFromWatchlistHandler={removeFromWatchlistHandler}
          apiKey={props.apiKey}
        />
      )}
    </>
  );
};

export default Watchlist;
