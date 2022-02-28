import React from "react";

const GameConfig = () => {

  return (
    <ol>
      <li>
        <article >
          <h2>Player 1</h2>
          <h3>PLAYER NAME</h3>
          <p className="player-symbol">X</p>
          <button
            className="btn btn-alt"
          >
            Edit
          </button>
        </article>
      </li>
      <li>
        <article >
          <h2>Player 2</h2>
          <h3>PLAYER NAME</h3>
          <p className="player-symbol">O</p>
          <button
            className="btn btn-alt"
          >
            Edit
          </button>
        </article>
      </li>
    </ol>
  );
};

export default GameConfig;
