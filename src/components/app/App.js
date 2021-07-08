import React from "react";
import Buttons from '../buttons/Buttons';
import Scoreboard from '../scoreboard/Scoreboard';
import useAppLogics from './hook/useAppLogics';
import './App.css';

function App() {
  
const {count, status, onStartStop, onWait, onReset} = useAppLogics();

  return (
    <div className="App">
      <Scoreboard count={count}/>
      <Buttons 
      status={status}
      onStartStop = {onStartStop}
      onWait = {onWait}
      onReset = {onReset}
      />
    </div>
  );
}

export default App;