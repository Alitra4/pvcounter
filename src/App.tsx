// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import PlayerCard from './components/Player';

const PlayerList = [
  {name: "Riri", pv: 20},
  {name: "Fifi", pv: 20},
  {name: "Loulou", pv: 20}
]



function App() {
  const [PlayerPV, setPlayerPV] = useState(PlayerList[0].pv)
  return (
      <div>
        {/* <PlayerCard Player={PlayerList[0]}/> */}
        <p>{PlayerList[0].name}</p>
        <p>{PlayerPV}</p>
        <button onClick={() => setPlayerPV(PlayerList[0].pv)}>reset</button>
        <button onClick={() => setPlayerPV(PlayerPV+1)}>+1</button>
        <button onClick={() => setPlayerPV(PlayerPV-1)}>-1</button>
        <button onClick={() => setPlayerPV(PlayerPV+5)}>+5</button>
        <button onClick={() => setPlayerPV(PlayerPV-5)}>-5</button>
      </div>
  )
}

export default App