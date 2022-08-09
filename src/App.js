import logo from './logo.svg';
import './App.css';
import { useState, setState } from 'react';
import TitleScreen from './Components/TitleScreen';
import DifficultyScreen from './Components/DifficultyScreen';
import SettingsScreen from './Components/SettingsScreen';
import GameScreen from './Components/GameScreen';
import ModeScreen from './Components/ModeScreen';
import Background from './assets/Background1.png';
import Heart_Empty from './assets/heart_empty.png';
import Heart_Full from './assets/heart_full.png';
import Timer from './assets/timer.png';

function App() {
  const [currentScreen, setCurrentScreen] = useState("titleScreen");
  const [currentMode, setCurrentMode] = useState("");
  const [difficulty, setDifficulty] = useState("normal");
  const [livesCount, setLivesCount] = useState(3);
  const [enterAnim, setEnterAnim] = useState("flyIn");

  const changeScreen = (currentScreen, targetScreen) => {
    if (currentScreen === "gameScreen"){
      document.getElementById(currentScreen).style.background = "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(102,217,206, 1) 33%)";
    } else if (currentScreen === "modeScreen"){
      setEnterAnim("flyIn");
    }
    if (document.getElementById(currentScreen).classList.contains("flyIn")){
      document.getElementById(currentScreen).classList.remove("flyIn");
    } else if (document.getElementById(currentScreen).classList.contains("flyInRev")){
      document.getElementById(currentScreen).classList.remove("flyInRev");
    }
    if (targetScreen === "titleScreen"){
      document.getElementById(currentScreen).classList.add("flyOutRev");
    } else if (currentScreen === "gameScreen" && targetScreen === "difficultyScreen"){
      document.getElementById(currentScreen).style.backgroundColor = "rgba(102,217,206, 1)";
      document.getElementById(currentScreen).classList.add("flyOutRevAlt");
      setEnterAnim("flyInRev");
    } else {
      document.getElementById(currentScreen).classList.add("flyOut");
    }
    setTimeout(()=>{setCurrentScreen(targetScreen);}, 600);
    clearTimeout();
  }

  const altEnterAnimation = (targetScreen, fromAnim, toAnim) => {
    let elem = document.getElementById(targetScreen).classList
    elem.remove(fromAnim);
    elem.add(toAnim);
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
          "titleScreen": <TitleScreen changeScreen={(currentScreen, targetScreen) => changeScreen(currentScreen, targetScreen)}/>,
          "modeScreen": <ModeScreen changeScreen={(currentScreen, targetScreen) => changeScreen(currentScreen, targetScreen)} 
                      setCurrentMode={setCurrentMode} />,
          "difficultyScreen": <DifficultyScreen changeScreen={(currentScreen, targetScreen) => changeScreen(currentScreen, targetScreen)} 
                      setDifficulty={setDifficulty} enterAnim={enterAnim}/>,
          "settingsScreen": <SettingsScreen changeScreen={(currentScreen, targetScreen) => changeScreen(currentScreen, targetScreen)} 
                      background={Background}/>,
          "gameScreen": <GameScreen changeScreen={(currentScreen, targetScreen) => changeScreen(currentScreen, targetScreen)} 
                      difficulty={difficulty} currentMode={currentMode} livesCount={livesCount} heart_full={Heart_Full} heart_empty={Heart_Empty} 
                      timer={Timer} />
        }[currentScreen]
      }
    </div>
  );
}

export default App;
