import React from "react";

const ActiveGame = () => {
  return (
    <>
      <article>
        <h2>
          You won, <span>PLAYER NAME</span>!
        </h2>
        <p>Click "Start New Game" above, to start a new game!</p>
      </article>

      <p>
        It's your turn <span>PLAYER NAME</span>!
      </p>
      <ol>
        <li className="disabled">X</li>
        <li></li>
        <li className="disabled">O</li>

        <li></li>
        <li className="disabled">X</li>
        <li></li>

        <li className="disabled">O</li>
        <li></li>
        <li></li>
      </ol>
    </>
  );
};

export default ActiveGame;
