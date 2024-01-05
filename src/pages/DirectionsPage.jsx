import React, { useState, useEffect, useContext } from 'react'
import DirectionBar from '../components/DirectionBar';
import DirecrionsCardUnit from '../components/DirecrionsCardUnit';
import { Context } from "../App";

const DirectionsPage = () => {
  const { directionsFromStore } = useContext(Context);
  const [directions, setDirections] = useState([]);

  useEffect(() => void (async () => {
    const directionsWhatWeGet = await window.electronAPI.getDirections();
    setDirections(directionsWhatWeGet);
    directionsFromStore.setDirections(directionsWhatWeGet);
  })(), [])

  return (
    <div>
      <DirectionBar></DirectionBar>
      <div>
        <div className="p-2 card">
          {directions.map(dir => (
            <DirecrionsCardUnit
              key={dir.id}
              id={dir.id}
              name={dir.name}
              cypher={dir.cypher}
              acronym={dir.acronym}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DirectionsPage
