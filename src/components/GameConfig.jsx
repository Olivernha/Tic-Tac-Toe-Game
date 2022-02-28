import React from "react";
import classes from "./GameConfig.module.css";
import Button from "./util-components/Button";
const GameConfig = () => {
  return (
    <section className={classes["game-configuration"]}>
      <ol>
        <li>
          <article>
            <h2>Player 1</h2>
            <h3>PLAYER NAME</h3>
            <p className={classes["player-symbol"]}>X</p>
            <Button className="btn-alt">Edit</ Button>
          </article>
        </li>
        <li>
          <article>
            <h2>Player 2</h2>
            <h3>PLAYER NAME</h3>
            <p className={classes["player-symbol"]}>O</p>
            <Button className="btn-alt">Edit</Button>
          </article>
        </li>
      </ol>
      <Button id="start-game-btn">
        Start New Game
      </Button>
    </section>
  );
};

export default GameConfig;
