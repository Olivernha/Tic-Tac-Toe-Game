import React, { useState } from "react";
import classes from "./ActiveGame.module.css";
import GameBoard from "./util-components/GameBoard";
const ActiveGame = ({ startNewGame, player1Data, player2Data }) => {
  const [active, setActive] = useState("");
  const activePlayer = active === "X" ? player2Data.name : player1Data.name;
  if (!startNewGame) {
    return null;
  }
  return (
    <section className={classes["active-game"]}>
      <article className={classes["game-over"]}>
        <h2>
          You won, <span className="winner-name"></span>!
        </h2>
        <p>Click "Start New Game" above, to start a new game!</p>
      </article>

      <p>
        It's your turn{" "}
        <span className={classes["active-player-name"]}>{activePlayer}</span>!
      </p>
      <GameBoard setActive={setActive} />
    </section>
  );
};

export default ActiveGame;
