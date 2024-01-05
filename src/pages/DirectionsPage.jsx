import React, { useState, useEffect } from 'react'
import DirectionBar from '../components/DirectionBar';
import DirecrionsCardUnit from '../components/DirecrionsCardUnit';

const DirectionsPage = () => {
  const [directions, setDirections] = useState([]);

  useEffect(() => void (async () => {
    const dir = await window.electronAPI.getDirections();
    setDirections(dir);
  })(), [])

  return (
    <div>
      <DirectionBar></DirectionBar>
      <div style={{ paddingTop: "50px" }}>
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
