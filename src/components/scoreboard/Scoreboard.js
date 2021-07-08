import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
  return (

    <div className='time'> {new Date(props.count*1000).toISOString().slice(11, 19)} </div>
  );
}

export default Scoreboard;
