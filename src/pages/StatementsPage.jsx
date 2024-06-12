import React, { useState, useEffect, useContext } from "react";
import StatementsBar from "../components/StatementsBar";
import SpecBar from "../components/SpecBar";
import SpecUnit from "../components/SpecUnit";
import StatementCardUnit from "../components/StatementCardUnit";
import { Context } from "../App";
import "../pages/styles/StatementsPage.css";

const StatementsPage = () => {
  const { specialitiesFromStore } = useContext(Context);
  const { directionsFromStore } = useContext(Context);
  const { statementsFromStore } = useContext(Context);

  const [specialities, setSpecialities] = useState([])
  const [states, setStates] = useState([])
  const [selectedSpec, setSelectedSpec] = useState(null)

  function selectSpec(id) {
    const spec = specialities.find(x => x.id == id)
    setSelectedSpec(spec);
  }

  useEffect(() => void (async () => {
    const listOfSpec = await window.electronAPI.getSpecialities();
    const listOfDir = await window.electronAPI.getDirections();
    const listOfState = await window.electronAPI.getStatements();

    specialitiesFromStore.setSpecialities(listOfSpec);
    directionsFromStore.setDirections(listOfDir);
    statementsFromStore.setStatements(listOfState);

    setSpecialities(listOfSpec);
    setStates(listOfState);
  })(), [])

  return (
    <div className="main_content" style={{ display: "flex" }}>
      <div className="content" style={{ background: "white", width: "40%" }}>
        <SpecBar totalScore={specialities.length} ></SpecBar>
        <div>
          {specialities.map(item => (
            <SpecUnit
              key={item.id}
              id={item.id}
              name={item.name}
              cypher={item.cypher}
              type={item.type}
              clicked={() => {
                selectSpec(item.id)
              }}
            />
          ))}
        </div>
      </div>
      <div className="content" style={{ background: "white", width: "70%" }}>
        <StatementsBar totalScore={states.length} style={{ flexgrow: "1" }}></StatementsBar>
        <div >
          {selectedSpec && selectedSpec.Statements.sort((a, b) => a.secondName.localeCompare(b.secondName)).map(item => (
            <StatementCardUnit
              key={item.id}
              id={item.id}
              lastName={item.lastName}
              firstName={item.firstName}
              secondName={item.secondName}
              gender={item.gender}
              birthday={item.birthday}
              specialityId={item.specialityId}
              group={item.group}
              directionId={item.directionId}
              totalScore={item.totalScore}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default StatementsPage;
