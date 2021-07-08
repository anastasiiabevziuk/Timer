import React from 'react';
import './Buttons.css';
import {timerStates} from './../../common/timerStates';

function Buttons(props) {
  return (
    <div>
      <button onClick = {props.onStartStop}>{ (props.status === timerStates.STOP || props.status === timerStates.WAIT)  ? "Start" : "Stop" } </button>
      <button onClick = {props.onWait}> Wait </button>
      <button onClick = {props.onReset}> Reset </button>
    </div>
  );
}

export default Buttons;
