const MovieSmall = (props) => {
  return (
    <li>
      <h2>Title: {props.title}</h2>
      <h3>Year: {props.year}</h3>
      <p>Type: {props.type}</p>
      <img src={props.poster} alt="Poster" />
    </li>
  );
};

export default MovieSmall;
