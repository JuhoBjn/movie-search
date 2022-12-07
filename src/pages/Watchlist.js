import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import WatchlistMoviesList from "../components/WatchlistMoviesList";
import { useEffect, useState } from "react";

const Watchlist = (props) => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [movieToRemove, setMovieToRemove] = useState([]);

  const showModalHandler = (movie) => {
    setMovieToRemove(movie);
    setShowModal(true);
  };

  const declineModalHandler = () => {
    setShowModal(false);
  };

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

    setWatchlist(fetchedWatchlist);
    setLoading(false);
  };

  const removeFromWatchlistHandler = async () => {
    setShowModal(false);

    const response = await fetch(
      `https://movie-search-396da-default-rtdb.europe-west1.firebasedatabase.app/watchlist/${movieToRemove.dbID}.json`,
      {
        method: "DELETE",
      }
    );
    const data = response.json();
    console.log(data);
    setMovieToRemove(null);
    fetchWatchlist();
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
          showModalHandler={showModalHandler}
          apiKey={props.apiKey}
        />
      )}
      {showModal && (
        <Modal
          onDecline={declineModalHandler}
          onConfirm={removeFromWatchlistHandler}
        />
      )}
      {showModal ? <Backdrop onClick={declineModalHandler} /> : null}
    </>
  );
};

export default Watchlist;
