import "./App.css";
import Header from "./components/Header";
import GameConfig from "./components/GameConfig";
import ActiveGame from "./components/ActiveGame";
import OverlayGameForm from "./components/OverlayGameForm";
import { useState } from "react";

function App() {
  console.log("App");
  const [openModal, setOpenModal] = useState(false);
  const [editPlayer, setEditPlayer] = useState("");
  const [startNewGame, setStartNewGame] = useState(false);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);
  const [player1Data, setPlayer1Data] = useState({
    name: "",
    symbol: "X",
  });
  const [player2Data, setPlayer2Data] = useState({
    name: "",
    symbol: "O",
  });
  return (
    <>
      <Header />
      <>
        <OverlayGameForm
          isOpen={openModal}
          setModal={setOpenModal}
          editPlayer={editPlayer}
          setEditPlayer={setEditPlayer}
          player1Data={player1Data}
          player2Data={player2Data}
          setPlayer1Data={setPlayer1Data}
          setPlayer2Data={setPlayer2Data}
        />
        <GameConfig
          isOpen={openModal}
          setModal={setOpenModal}
          editPlayer={editPlayer}
          setEditPlayer={setEditPlayer}
          player1Data={player1Data}
          player2Data={player2Data}
          setPlayer1Data={setPlayer1Data}
          setPlayer2Data={setPlayer2Data}
          setStartNewGame={setStartNewGame}
          startNewGame={startNewGame}
          winner={winner}
          setWinner={setWinner}
          setRound={setRound}
        />
        <ActiveGame
          startNewGame={startNewGame}
          player1Data={player1Data}
          player2Data={player2Data}
          winner={winner}
          setWinner={setWinner}
          round={round}
          setRound={setRound}
        />
      </>
    </>
  );
}

export default App;
