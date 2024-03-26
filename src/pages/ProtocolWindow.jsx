import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import CommonWarningModal from '../components/CommonWarningModal';
import "../pages/styles/ProtocolWindowStyle.css";

const ProtocolWindow = () => {
    const navigate = useNavigate();
    const { specialitiesFromStore } = useContext(Context);
    const { protocolParametersFromStore } = useContext(Context);

    const [spec, setSpec] = useState("");
    const [nummber, setNumber] = useState("");
    const [showCommonModal, setShowCommonModal] = useState();

    function writeProtocolParametersIntoStore() {
        protocolParametersFromStore.setSpecInStore(spec);
        protocolParametersFromStore.setNumberInStore(nummber);
        if (document.getElementById('selectSpec').value == "--Выберите специальность--" || document.getElementById('selectNum').value == "") {
            setShowCommonModal(true);
        } else {
            console.log(document.getElementById('selectSpec').value);
            console.log(document.getElementById('selectNum').validity.valid);
            navigate("/protocol");
        }
    }

    useEffect(() => void (async () => {
        const selectSpec = document.getElementById('selectSpec');
        const listOfSpec = specialitiesFromStore.specList;
        // selectDir.innerHTML = "";
        for (let i = 0; i < listOfSpec.length; i++) {
            let opt = document.createElement('option');
            opt.value = listOfSpec[i].id;
            opt.innerHTML = listOfSpec[i].name;
            selectSpec.appendChild(opt);
        }
    })(), [])

    return (
        <div>
            <div className='main_container'>
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
                                    <select required id="selectSpec" onChange={(event) => setSpec(event.target.value)} className="form-select w-100">
                                        <option disabled selected>--Выберите специальность--</option>
                                    </select>
                                </div>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>Количество вакантных мест: </label>
                                    <input type="number" id="selectNum" onChange={(event) => setNumber(event.target.value)} placeholder="Введите кол-во вакантных мест" className="form-control w-100" />
                                </div>
                                <button required type="button" className="btn btn-primary mt-4 mb-2" onClick={writeProtocolParametersIntoStore} style={{ float: "right" }}>Сгенерировать</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <CommonWarningModal
                show={showCommonModal}
                onClose={() => setShowCommonModal(false)}
            >
            </CommonWarningModal>
        </div>

    )
}

export default ProtocolWindow
