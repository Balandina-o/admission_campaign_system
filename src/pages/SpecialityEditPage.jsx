import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from "../App";

const SpecialityEditPage = () => {
    const navigate = useNavigate();
    const { specialitiesFromStore } = useContext(Context);
    const { userFromStore } = useContext(Context);
    const { id } = useParams();

    const [name, setName] = useState("");
    const [cypher, setCypher] = useState("");
    const [type, setType] = useState("");
    const [exam, setExam] = useState("");

    const [spanShower, setSpanShower] = useState(false);

    const updateExistingSpec = async () => {
        const specForEdit = {
            name: name,
            cypher: cypher,
            type: type,
            exam: exam,
        };

        await window.electronAPI.updateCurrentSpec(id, specForEdit, userFromStore.user.login);
        specialitiesFromStore.updateSpecInStore(id, specForEdit);
        navigate("/spec");
    };

    useEffect(() => void (async () => {
        const listOfState = await window.electronAPI.getStatements();
        if (listOfState.some((x) => x.SpecialityId == id)) {
            document.getElementById("checkboxExam").disabled = true;
            setSpanShower(true);
        }

        const spec = specialitiesFromStore.findSpeciality(id);
        setName(spec.name);
        setCypher(spec.cypher);
        setType(spec.type);

        if (spec.exam == "1") {
            document.getElementById("checkboxExam").checked = true;
        } else {
            document.getElementById("checkboxExam").checked = false;
        }
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
                                <div className='mt-3' style={{ marginBottom: '7px' }}>
                                    <label >Осуществлять прием по результатам баллов ЕГЭ:</label>
                                    <input style={{ width: "50px" }} id="checkboxExam" type="checkbox" onChange={(event) => setExam(event.target.checked)} />

                                </div>
                                {spanShower &&
                                    <div>
                                        <span style={{ background: '#CFCFCF', padding: '8px', borderRadius: '7px' }} id='myspan'>Нельзя изменить тип специальности, пока существуют заявления, прикрепленные к ней</span>
                                    </div>
                                }
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
