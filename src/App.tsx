// import { useState } from 'react';
import './App.css';
import PlayerCard from './components/Player';

const PlayerList = [
  {name: "joueur1", pv: 20}
]

function App() {

  return (
      <div>
        <PlayerCard Player={PlayerList[0]}/>
      </div>
  )
}

export default App