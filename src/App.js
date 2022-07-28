import logo from './logo.svg';
import './App.css';
import { useState, setState } from 'react';
import TitleScreen from './Components/TitleScreen';
import DifficultyScreen from './Components/DifficultyScreen';
import SettingsScreen from './Components/SettingsScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState("titleScreen");

  const leaveAnim = (currentScreen, targetScreen) => {
    if (document.getElementById(currentScreen).classList.contains("flyIn")){
      document.getElementById(currentScreen).classList.remove("flyIn")
    }
    document.getElementById(currentScreen).classList.add("flyOut")
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
          "difficultyScreen": <DifficultyScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)}/>,
          "settingsScreen": <SettingsScreen leaveAnim={(currentScreen, targetScreen) => leaveAnim(currentScreen, targetScreen)} />
        }[currentScreen]
      }
    </div>
  );
}

export default App;
