import React, { useCallback, useState } from "react";
import "./GameBoard.css";
import Square from "./Square";

const GameBoard = ({setActive}) => {
  const [turn, setTurn] = useState("X");
  const [box, setBox] = useState(Array(9).fill(null));
  const handleClick = (number) => {

    if (box[number] !== null) {
      alert("already clicked");
      return;
    }

    let squares = box;
    if (turn === "X") {
        setActive("X")
      squares[number] = "X";
      setTurn("O");
    } else {
        setActive("O")
      squares[number] = "O";
      setTurn("X");
    }
    setBox(squares);
  };
  return (
    <ol className={"game-board"}>
      {[...Array(9).keys()].map((i) => (
        <Square key={i} onClick={() => handleClick(i)} value={box[i]}>
          {box[i]}
        </Square>
      ))}
    </ol>
  );
};

export default GameBoard;
