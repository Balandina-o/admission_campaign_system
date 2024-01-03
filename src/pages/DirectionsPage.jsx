import React, { useContext, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Context } from "../App"

const DirectionsPage = () => {
  const [directions, setDirections] = useState([]);
  const campaign = useContext(Context);


  useEffect(() => {
    const dir = campaign.getDirections();
    setDirections(dir);
  }, [])

  return (
    <div className="p-2 card">
      {directions.map(x => (
        <div className="d-flex justify-content-between align-items-center" key={x.id}>
          <div>
            <div>
              {x.name}
            </div>
            <div>
              {x.cypher}
            </div>
            <div>
              {x.acronym}
            </div>
          </div>
          <Button
            variant="primary"
            style={{ width: "35px", height: "35px", fontSize: "16px" }}
            className="bottom-0 end-0 me-3 pt-0"
          >
            &#62;
          </Button>
        </div>
      ))}
    </div>
  )
}

export default DirectionsPage
