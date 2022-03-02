import React from "react";
import classes from './ActiveGame.module.css';
import GameBoard from "./util-components/GameBoard";
const ActiveGame = ({startNewGame}) => {
  if(!startNewGame){
    return null;
  }
  return (
    <section className={classes['active-game']}>
    <article className={classes['game-over']}>
      <h2>You won, <span className="winner-name">PLAYER NAME</span>!</h2>
      <p>Click "Start New Game" above, to start a new game!</p>
    </article>

    <p>It's your turn <span className={classes['active-player-name']}>PLAYER NAME</span>!</p>
    <GameBoard />
  </section>
  );
};

export default ActiveGame;
