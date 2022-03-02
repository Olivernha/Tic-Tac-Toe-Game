import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./util-components/Button";
import style from "./OverlayGameForm.module.css";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};

const OverlayGameForm = ({ isOpen, setModal }) => {
  const [playName, setPlayName] = useState("");
  const [error, setError] = useState("");
  if (!isOpen) return null;

  const toggleModalHandler = () => {
    setModal(!isOpen);
    if(!error){
      return;
    }
    setPlayName("");
    setError("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPlayerName = playName.trim();
    if (!enteredPlayerName) {
      setError("Please enter a valid name");
      return;
    }
    console.log(enteredPlayerName);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={toggleModalHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <aside className={`${style.modal} ${style["config-overlay"]}`}>
          <h2>Choose your name</h2>
          <form onSubmit={submitHandler}>
            <div
              className={
                error ? `${style['form-control']} ${style.error}` : style["form-control"]
              }
            >
              <label htmlFor="playername">Player name</label>
              <input
                type="text"
                name="playername"
                id="playername"
                required
                value={playName}
                onChange={(event) => setPlayName(event.target.value)}
              />
            </div>
            {error && <p className={style.error}>{error}</p>}
            <div>
              <Button
                type="reset"
                className="btn btn-alt"
                onClick={toggleModalHandler}
              >
                Cancel
              </Button>
              <Button type="submit" className="btn">
                Confirm
              </Button>
            </div>
          </form>
        </aside>,
        document.getElementById("modalForm")
      )}
    </>
  );
};

export default React.memo(OverlayGameForm);
