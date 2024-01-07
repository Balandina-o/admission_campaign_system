import React, { useState, useEffect, useContext } from 'react'
import DirectionBar from '../components/DirectionBar';
import { useNavigate } from "react-router-dom";
import DirecrionsCardUnit from '../components/DirecrionsCardUnit';
import { Context } from "../App";
import DeleteSpecConfirmModal from '../components/DeleteSpecConfirmModal';

const DirectionsPage = () => {
  const navigate = useNavigate();
  const { directionsFromStore } = useContext(Context);
  const [directions, setDirections] = useState([]);
  const [showCreateDeleteDirConfirmModal, setShowCreateDeleteDirConfirmModal] = useState();
  const [selectedDirName, setSelectedDirName] = useState([]);

  const deleteDir = async (id_dir, name) => {
    setSelectedDirName(name);
    setShowCreateDeleteDirConfirmModal(true);
    await window.electronAPI.deleteExistingDir(id_dir);
    setDirections(directionsFromStore.removeDirInStore(id_dir));
    navigate("/directions");
  };

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
              onDelete={deleteDir}
            />
          ))}
        </div>
      </div>
      <DeleteSpecConfirmModal
        show={showCreateDeleteDirConfirmModal}
        onClose={() => setShowCreateDeleteDirConfirmModal(false)}
        selectedSpecName={selectedDirName}>
      </DeleteSpecConfirmModal>
    </div>

  )
}

export default DirectionsPage
