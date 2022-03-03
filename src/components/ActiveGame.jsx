import React, {useEffect, useState} from "react";
import classes from "./ActiveGame.module.css";
import GameBoard from "./util-components/GameBoard";
const ActiveGame = ({ startNewGame, player1Data, player2Data ,setWinner,winner ,round ,setRound}) => {

  const [active, setActive] = useState("");

  const activePlayer = active === "X" ? player2Data.name : player1Data.name;
  if (!startNewGame) {
    return null;
  }
  return (
    <section className={classes["active-game"]}>
        {(winner || round === 9 ) && <article className={classes["game-over"]}>
            {winner && <h2>
                You won,{" "}
                <span className="winner-name">
                {winner ? winner === 'X' ? player1Data.name : player2Data.name : ''}
          </span>
                !
            </h2>}
            {round === 9 && !winner && <h2>It's a draw</h2>}
            <p>Click "Start New Game" above, to start a new game!</p>
        </article>}

      <p>
        It's your turn{" "}
        <span className={classes["active-player-name"]}>{activePlayer}</span>!
      </p>
      <GameBoard setActive={setActive} setWinner={setWinner} setRound={setRound} winner={winner}/>
    </section>
  );
};

export default ActiveGame;
