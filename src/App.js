import "./App.css";
import Header from "./components/Header";
import GameConfig from "./components/GameConfig";
import ActiveGame from "./components/ActiveGame";
import OverlayGameForm from "./components/OverlayGameForm";

function App() {
  return (
    <>
      <Header />
      <>
        <OverlayGameForm />
        <GameConfig />
        <ActiveGame />
      </>
    </>
  );
}

export default App;
