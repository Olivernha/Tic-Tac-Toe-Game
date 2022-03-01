import "./App.css";
import Header from "./components/Header";
import GameConfig from "./components/GameConfig";
import ActiveGame from "./components/ActiveGame";
import OverlayGameForm from "./components/OverlayGameForm";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header />
      <>
        <OverlayGameForm isOpen={openModal} setModal={setOpenModal}/>
        <GameConfig isOpen={openModal} setModal={setOpenModal} />
        <ActiveGame />
      </>
    </>
  );
}

export default App;
