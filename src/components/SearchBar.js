const SearchBar = (props) => {
  return (
    <>
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
    </>
  );
};

export default SearchBar;
