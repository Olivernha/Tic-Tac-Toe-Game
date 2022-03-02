import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./util-components/Button";
import style from "./OverlayGameForm.module.css";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};

const OverlayGameForm = ({
  isOpen,
  setModal,
  editPlayer,
  player1Data,
  player2Data,
  setPlayer2Data,
  setPlayer1Data,
}) => {
  const [playName, setPlayName] = useState(editPlayer === 'player1' ? player1Data.name : player2Data.name);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setPlayName(editPlayer === 'player1' ? player1Data.name : player2Data.name);
    return () => {
      console.log("cleanup");
      setPlayName("");
    };
  }, [isOpen,editPlayer]);


  const toggleModalHandler = () => {
    setModal(!isOpen);
    if (!error) {
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

    if (editPlayer === "player1") {
      setPlayer1Data({
        ...player1Data,
        name: enteredPlayerName,
      });
    } else {
      setPlayer2Data({
        ...player2Data,
        name: enteredPlayerName,
      });
    }
    setModal(!isOpen);
  };
  if (!isOpen) return null;
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
                error
                  ? `${style["form-control"]} ${style.error}`
                  : style["form-control"]
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
