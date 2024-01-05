import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../App";

const DirectionEditPage = () => {
    const navigate = useNavigate();
    const { directionsFromStore } = useContext(Context);
    const { id } = useParams();

    const [name, setName] = useState("");
    const [cypher, setCypher] = useState("");
    const [acronym, setAcronym] = useState("");

    const updateExistingDir = async () => {
        const dirForEdit = {
            name: name,
            cypher: cypher,
            acronym: acronym,
        };
        await window.electronAPI.updateCurrentDir(id, dirForEdit);
        directionsFromStore.updateDirInStore(id, dirForEdit);
        navigate("/directions");
    };

    useEffect(() => void (async () => {
        const dir = directionsFromStore.findDirection(id);
        setName(dir.name);
        setCypher(dir.cypher);
        setAcronym(dir.acronym);
    })(), [])

    return (
        <div>
            <div style={{ width: "100%", background: "white", padding: "10px" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-inline">
                                <div>
                                    <h3>Редактирование направления</h3>
                                </div>
                                <hr></hr>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>Наименование: </label>
                                    <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Введите наименование новой специальности" className="form-control w-100" />
                                </div>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>Шифр: </label>
                                    <input id="cypher" value={cypher} onChange={(event) => setCypher(event.target.value)} placeholder="Введите шифр специальности" className="form-control w-100" />
                                </div>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>Аббревиатура: </label>
                                    <input id="acronym" value={acronym} onChange={(event) => setAcronym(event.target.value)} placeholder="Введите аббревиатуру направления" className="form-control w-100" />
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <label style={{ width: "340px", whitespace: "nowrap" }} className="form-check-label">Осуществлять прием на основе баллов ЕГЭ </label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked />
                                </div>
                                <button type="button" onClick={updateExistingDir} className="btn btn-primary mt-4 mb-2" >Сохранить данные</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectionEditPage
