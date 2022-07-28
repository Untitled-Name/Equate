import logo from './logo.svg';
import './App.css';
import { useState, setState } from 'react';
import TitleScreen from './Components/TitleScreen';
import DifficultySelect from './Components/DifficultySelect';
import Settings from './Components/Settings';

function App() {
  const [currentScreen, setCurrentScreen] = useState("titleScreen")

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet"/>
      </head>
      {
        {
          "titleScreen": <TitleScreen onPress={screen => setCurrentScreen(screen)}/>,
          "difficultySelect": <DifficultySelect onPress={screen => setCurrentScreen(screen)}/>,
          "settings": <Settings onPress={screen => setCurrentScreen(screen)} />
        }[currentScreen]
      }
    </div>
  );
}

export default App;
