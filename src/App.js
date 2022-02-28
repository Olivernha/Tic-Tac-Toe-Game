import "./App.css";
import Header from "./components/Header";
import GameConfig from "./components/GameConfig";
import ActiveGame from "./components/ActiveGame";

function App() {
  return (
    <>
      <Header />
      <>
        <GameConfig />
        <ActiveGame />
      </>
    </>
  );
}

export default App;
