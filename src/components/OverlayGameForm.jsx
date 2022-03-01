import React, {useState} from "react";
import ReactDOM from "react-dom";
import Button from "./util-components/Button";
import style from "./OverlayGameForm.module.css";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick}/>;
};

const OverlayGameForm = ({isOpen,setModal}) => {
  const [playName , setPlayName] = useState("");
  if(!isOpen) return null;

  const toggleModalHandler = () => {
    setModal(!isOpen);
  };
  const submitHandler=(event) =>{
    event.preventDefault();
    const enteredPlayerName = playName;
    console.log(enteredPlayerName)

  }
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={toggleModalHandler}/>, document.getElementById("backdrop"))}
      <aside className={`${style.modal} ${style['config-overlay']}`}>
        <h2>Choose your name</h2>
        <form onSubmit={submitHandler}>
          <div className={style['form-control']}>
            <label htmlFor="playername">Player name</label>
            <input type="text" name="playername" id="playername" value={playName} onChange={(event)=>setPlayName(event.target.value)}/>
          </div>
          <div>
            <Button type="button" className="btn btn-alt" onClick={toggleModalHandler}>
              Cancel
            </Button>
            <Button type="submit" className="btn">
              Confirm
            </Button>
          </div>
        </form>
      </aside>
    </>
  );
};

export default React.memo(OverlayGameForm);
