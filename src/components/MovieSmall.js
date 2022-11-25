import "./MovieSmall.css";

const MovieSmall = (props) => {
  return (
    <div className="MovieSmall">
      {props.poster !== "N/A" && (
        <div className="moviePoster">
          <img src={props.poster} alt="Poster" />
        </div>
      )}
      <div className="movieContent">
        <h2>{props.title}</h2>
        <h3>Released: {props.year}</h3>
        <p>Type: {props.type}</p>
      </div>
    </div>
  );
};

export default MovieSmall;
