import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../App";

const SpecialityEditPage = () => {
    const navigate = useNavigate();
    const { specialitiesFromStore } = useContext(Context);
    const { id } = useParams();

    const [name, setName] = useState("");
    const [cypher, setCypher] = useState("");
    const [type, setType] = useState("");

    const updateExistingSpec = async () => {
        const specForEdit = {
            name: name,
            cypher: cypher,
            type: type,
        };
        await window.electronAPI.updateCurrentSpec(id, specForEdit);
        specialitiesFromStore.updateSpecInStore(id, specForEdit);
        navigate("/spec");
    };

    useEffect(() => void (async () => {
        console.log(id);
        const spec = specialitiesFromStore.findSpeciality(id);
        setName(spec.name);
        setCypher(spec.cypher);
        setType(spec.type);
    })(), [])

    return (
        <div>
            <div style={{ width: "100%", background: "white", padding: "10px" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-inline">
                                <div>
                                    <h3>Редактирование специальности</h3>
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
                                    <label style={{ width: "150px" }}>Подготовка: </label>
                                    <input id="type" value={type} onChange={(event) => setType(event.target.value)} placeholder="Введите тип кандидатов" className="form-control w-100" />
                                </div>
                                <button type="button" onClick={updateExistingSpec} className="btn btn-primary mt-4 mb-2" >Сохранить основные данные</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialityEditPage
