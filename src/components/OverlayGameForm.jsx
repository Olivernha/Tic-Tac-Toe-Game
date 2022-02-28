import React from "react";
import ReactDOM from "react-dom";
import Button from "./util-components/Button";
import style from "./OverlayGameForm.module.css";
const Backdrop = () => {
  return <div className={style.backdrop} />;
};

const OverlayGameForm = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      <aside className={`${style.modal} ${style['config-overlay']}`}>
        <h2>Choose your name</h2>
        <form>
          <div className={style['form-control']}>
            <label htmlFor="playername">Player name</label>
            <input type="text" name="playername" id="playername" />
          </div>
          <div>
            <Button type="button" className="btn btn-alt">
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

export default OverlayGameForm;
