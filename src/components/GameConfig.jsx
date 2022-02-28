import React from "react";
import classes from "./GameConfig.module.css";

const GameConfig = () => {
  return (
    <section className={classes["game-configuration"]}>
      <ol>
        <li>
          <article>
            <h2>Player 1</h2>
            <h3>PLAYER NAME</h3>
            <p className={classes["player-symbol"]}>X</p>
            <button className="btn btn-alt">Edit</button>
          </article>
        </li>
        <li>
          <article>
            <h2>Player 2</h2>
            <h3>PLAYER NAME</h3>
            <p className={classes["player-symbol"]}>O</p>
            <button className="btn btn-alt">Edit</button>
          </article>
        </li>
      </ol>
      <button className="btn" id="start-game-btn">
        Start New Game
      </button>
    </section>
  );
};

export default GameConfig;
