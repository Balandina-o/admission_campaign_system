import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../App";

const ProtocolWindow = () => {
    const [spec, setSpec] = useState("");
    const [nummber, setNumber] = useState("");
    const { directionsFromStore } = useContext(Context);
    const { protocolParameters } = useContext(Context);

    function writeProtocolParametersIntoStore() {
        protocolParameters.setSpec(spec);
        protocolParameters.setNumber(nummber);
    }

    useEffect(() => void (async () => {
        const selectDir = document.getElementById('selectDir');
        const listOfDir = directionsFromStore.dirList;
        // selectDir.innerHTML = "";
        for (let i = 0; i < listOfDir.length; i++) {
            let opt = document.createElement('option');
            opt.value = listOfDir[i].id;
            opt.innerHTML = listOfDir[i].name;
            selectDir.appendChild(opt);
        }
    })(), [])

    return (
        <div>
            <div style={{ width: "100%", background: "white", padding: "10px" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-inline" acceptCharset="UTF-8" method="get">
                                <div className="d-flex justify-content-between" style={{ paddingTop: "10px" }}>
                                    <h3>Формирование протокола</h3>
                                </div>
                                <hr></hr>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>ВУС: </label>
                                    <select id="selectDir" onChange={(event) => setSpec(event.target.value)} className="form-select w-100">
                                        <option disabled selected>--Выберите специальность--</option>
                                    </select>
                                </div>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>Количество вакантных мест: </label>
                                    <input type="number" id="secondName" onChange={(event) => setNumber(event.target.value)} placeholder="Введите кол-во вакантных мест" className="form-control w-100" />
                                </div>
                                <Link to={'/protocol'}>
                                    <button type="button" className="btn btn-primary mt-4 mb-2" onClick={writeProtocolParametersIntoStore} style={{ float: "right" }}>Сгенерировать</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtocolWindow
