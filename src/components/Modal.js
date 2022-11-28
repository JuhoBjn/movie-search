import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <p>Do you want to delete this movie from your watchlist?</p>
      <button onClick={() => props.onConfirm(props)}>Yes</button>
      <button onClick={props.onDecline}>No</button>
    </div>
  );
};

export default Modal;
