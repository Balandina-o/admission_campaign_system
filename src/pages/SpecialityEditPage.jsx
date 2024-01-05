import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from "../App";

const SpecialityEditPage = () => {
    const { specialitiesFromStore } = useContext(Context);
    const { id } = useParams();

    const [name, setName] = useState(""); //`${id}`
    const [cypher, setCypher] = useState("");
    const [type, setType] = useState("");


    useEffect(() => void (async () => {
        console.log(id);
        const spec = specialitiesFromStore.findSpeciality(id);
        setName(spec.name);
        setCypher(spec.cypher);
        setType(spec.type);
    })(), [])

    return (
        <div>
            <div style={{ width: "100%", background: "white" }}>
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
                                <button type="button" className="btn btn-primary mt-4 mb-2" style={{ float: "right" }}>Сохранить основные данные</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialityEditPage
