import React, {useEffect, useState} from "react";
import "./GameBoard.css";
import Square from "./Square";

const GameBoard = ({setActive ,setWinner,setRound ,winner}) => {
  const [turn, setTurn] = useState("X");
  const [box, setBox] = useState(Array(9).fill(null));
  const [endGame, setEndGame] = useState(false);
  useEffect(() => {
    if (winner) {
      setEndGame(true);

    }
  }, [winner]);
  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    console.log(squares)
    for (let combo in combos) {

      combos[combo].forEach((pattern) => {
        if (
            squares[pattern[0]] === '' ||
            squares[pattern[1]] === '' ||
            squares[pattern[2]] === ''
        ) {
          // do nothing

        } else if (
            squares[pattern[0]] === squares[pattern[1]] &&
            squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);

        }
      });
    }
  };
  const handleClick = (number) => {
    if(endGame){
      return;
    }
    setRound(prevState => prevState + 1);
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
    checkForWinner(squares);

    setBox(squares);
  };
  return (
    <ol className={"game-board"}>
      {[...Array(9).keys()].map((i) => (
        <Square key={i} onClick={() => handleClick(i)} value={box[i]} >
          {box[i]}
        </Square>
      ))}
    </ol>
  );
};

export default GameBoard;
