/* Must increase in value when the start button is pressed
Must reset to a reasonable value (00:00 or 00:00:00 are acceptable)
All buttons may be displayed, or buttons may be displayed based on state
You must pad your digits so that single digits have a "0", e.g. 01 instead of 1.*/

import React, {useState, useEffect} from "react";

//I'm looking at the provided video
function DurationExercise({name}){
const [time, setTime] = useState(0)
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
    return(
        <div>
        <h2>{name}</h2>

        <h3>{formatTime(time)}</h3>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default DurationExercise;