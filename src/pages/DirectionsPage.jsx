import React, { useState, useEffect, useContext } from 'react'
import DirectionBar from '../components/DirectionBar';
import { useNavigate } from "react-router-dom";
import DirecrionsCardUnit from '../components/DirecrionsCardUnit';
import { Context } from "../App";
import DeleteConfirmModal from '../components/DeleteConfirmModal';

const DirectionsPage = () => {
  const navigate = useNavigate();
  const { directionsFromStore } = useContext(Context);
  const [directions, setDirections] = useState([]);
  const [showCreateDeleteDirConfirmModal, setShowCreateDeleteDirConfirmModal] = useState();
  const [selectedDirName, setSelectedDirName] = useState([]);
  const [selectedIdState, setSelectedIdStatee] = useState('');

  async function closeExitConfirmModal(x) {
    setShowCreateDeleteDirConfirmModal(false)
    if (x == "yesDelete") {
      await window.electronAPI.deleteExistingDir(selectedIdState);
      setDirections(directionsFromStore.removeDirInStore(selectedIdState));
      navigate("/directions");
    }
  }

  const deleteDir = async (id_dir, name) => {
    setShowCreateDeleteDirConfirmModal(true);
    setSelectedIdStatee(id_dir);
    setSelectedDirName(name);
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
      <DeleteConfirmModal
        show={showCreateDeleteDirConfirmModal}
        onClose={(x) => closeExitConfirmModal(x)}
        selectedName={selectedDirName}
        text={'Вы действительно хотите удалить направление '}
      >
      </DeleteConfirmModal>
    </div>

  )
}

export default DirectionsPage
