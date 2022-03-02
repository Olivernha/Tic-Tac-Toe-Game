import React, {useState} from "react";
import classes from "./GameConfig.module.css";
import Button from "./util-components/Button";
const GameConfig = ({isOpen,setModal,player1Data,startNewGame,setStartNewGame,setEditPlayer,player2Data ,setPlayer2Data ,setPlayer1Data}) => {
  const player1Handler = () =>{
    setModal(!isOpen);
    setEditPlayer('player1');
    setPlayer1Data(prevData => ({...prevData,name:player1Data.name}));
  }
  const player2Handler = () =>{
    setModal(!isOpen);
    setEditPlayer('player2');
    setPlayer2Data(prevData => ({...prevData,name:player2Data.name}));
  }

  return (
    <section className={classes["game-configuration"]}>
      <ol>
        <li>
          <article>
            <h2>Player 1</h2>
            <h3>{player1Data.name ? player1Data.name  : 'PLAYER NAME'}</h3>
            <p className={classes["player-symbol"]}>X</p>
            <Button className="btn-alt" onClick={player1Handler}>Edit</ Button>
          </article>
        </li>
        <li>
          <article>
            <h2>Player 2</h2>
            <h3>{player2Data.name ? player2Data.name  : 'PLAYER NAME'}</h3>
            <p className={classes["player-symbol"]}>O</p>
            <Button className="btn-alt" onClick={player2Handler}>Edit</Button>
          </article>
        </li>
      </ol>
      <Button id="start-game-btn" onClick={()=>{
        if(!player1Data.name || !player2Data.name){
          alert('Please enter custom player names for both players!');
          return;
        }
        setStartNewGame(true);
      }}>
        Start New Game
      </Button>
    </section>
  );
};

export default GameConfig;
