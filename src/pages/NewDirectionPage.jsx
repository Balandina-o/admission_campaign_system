import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const NewDirectionPage = () => {
    const [name, setName] = useState("");
    const [cypher, setCypher] = useState("");
    const [acronym, setAcronym] = useState("");
    const navigate = useNavigate();

    const createNewDir = async () => {
        const newDir = {
            name: name,
            cypher: cypher,
            acronym: acronym,
        };
        const res = await window.electronAPI.createDirection(newDir);
        console.log(res);
        navigate("/directions");
    };

    return (
        <div>
            <div style={{ width: "100%", background: "white", padding: "10px" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-inline">
                                <div>
                                    <h3>Создание нового направления подготовки:</h3>
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
                                <button type="button" onClick={createNewDir} className="btn btn-primary mt-4 mb-2" >Сохранить данные</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDirectionPage
