//import logo from './logo.svg';
import './App.css';
import React from "react";
//where you import componente, like menu app in last lab
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";

const exerciseData = [
  {
    "appName": "Health Help",
    "exerciseName": [
      {
        "exerciseItem": "Pushups"
      },{
        "exerciseItem": "Running"
      },{
        "exerciseItem": "Planks",
      }
    ]
  }
];


//How do I make multiple pages in React??


function App() {
  return (
    <div className="App">
      <DurationExercise name={exerciseData}/>
      <RepetitionExercise name={exerciseData}/>
    </div>
  );
}

export default App;
