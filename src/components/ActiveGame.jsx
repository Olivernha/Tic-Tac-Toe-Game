import React from "react";
import classes from './ActiveGame.module.css';
const ActiveGame = () => {
  return (
    <section className={classes['active-game']}>
    <article className={classes['game-over']}>
      <h2>You won, <span className="winner-name">PLAYER NAME</span>!</h2>
      <p>Click "Start New Game" above, to start a new game!</p>
    </article>

    <p>It's your turn <span className={classes['active-player-name']}>PLAYER NAME</span>!</p>
    <ol className={classes['game-board']}>
      <li data-col="1" data-row="1"></li>
      <li data-col="2" data-row="1"></li>
      <li data-col="3" data-row="1"></li>

      <li data-col="1" data-row="2"></li>
      <li data-col="2" data-row="2"></li>
      <li data-col="3" data-row="2"></li>

      <li data-col="1" data-row="3"></li>
      <li data-col="2" data-row="3"></li>
      <li data-col="3" data-row="3"></li>
    </ol>
  </section>
  );
};

export default ActiveGame;
