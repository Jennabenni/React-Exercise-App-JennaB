/* Maintain an internal counter and include a button that increments the current value.
Start at 0

needs to display exercise at top, it says in component, must pass in the name prop*/
import React, {useState} from "react";

function RepetitionExercise({name}){

    const [lapCount, setLapCount] = useState(0);

    const handleIncrement = () => {
      setLapCount((prevCount) => prevCount + 1);
    };
    const handleReset = () => {
        setLapCount(0);
      };

    return(
        <div>
        <h2>{name}</h2>
        <h3>Laps: {lapCount}</h3>
        <button onClick={handleIncrement}>Complete lap</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;