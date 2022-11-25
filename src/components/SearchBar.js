import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form onSubmit={props.searchMoviesHandler}>
        <input
          type="text"
          id="searchTitle"
          placeholder="Enter movie title to search for..."
          ref={props.titleRef}
          required
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
