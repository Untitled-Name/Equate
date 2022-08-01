import logo from './logo.svg';
import './App.css';
import { useState, setState } from 'react';
import TitleScreen from './Components/TitleScreen';
import DifficultyScreen from './Components/DifficultyScreen';
import SettingsScreen from './Components/SettingsScreen';
import GameScreen from './Components/GameScreen';
import Background from './Background1.png';
import ModeScreen from './Components/ModeScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState("titleScreen");
  const [difficulty, setDifficulty] = useState("normal");

  const leaveAnim = (currentScreen, targetScreen) => {
    if (currentScreen === "gameScreen"){
      document.getElementById("gameScreen").style.background = "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(102,217,206, 1) 33%)";
    }
    if (document.getElementById(currentScreen).classList.contains("flyIn")){
      document.getElementById(currentScreen).classList.remove("flyIn");
    } else if (document.getElementById(currentScreen).classList.contains("flyInRev")){
      document.getElementById(currentScreen).classList.remove("flyInRev");
    }
    if (targetScreen === "titleScreen"){
      document.getElementById(currentScreen).classList.add("flyOutRev");
    } else {
      document.getElementById(currentScreen).classList.add("flyOut")
    }
    setTimeout(()=>{setCurrentScreen(targetScreen)}, 600);
    clearTimeout();
  }


  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet"/>
      </head>
      {
        {
          "titleScreen": <TitleScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)}/>,
          "modeScreen": <ModeScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)} />,
          "difficultyScreen": <DifficultyScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)} setDifficulty={setDifficulty}/>,
          "settingsScreen": <SettingsScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)} background={Background}/>,
          "gameScreen": <GameScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)} difficulty={difficulty} />
        }[currentScreen]
      }
    </div>
  );
}

export default App;
