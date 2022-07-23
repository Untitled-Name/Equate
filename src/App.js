import logo from './logo.svg';
import './App.css';
import TitleScreen from './Components/TitleScreen';

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet"/>
      </head>
      <TitleScreen />
    </div>
  );
}

export default App;
