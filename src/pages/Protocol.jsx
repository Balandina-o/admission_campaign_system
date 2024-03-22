import React, { useContext, useEffect } from 'react'
import { Context } from "../App";
import { useState } from 'react';
import "../pages/styles/ProtocolStyle.css";

const Protocol = () => {
    const { protocolParametersFromStore } = useContext(Context);
    const { statementsFromStore } = useContext(Context);
    const { specialitiesFromStore } = useContext(Context);
    const [specNameFromId, setSpecNameFromId] = useState("");
    const [currentSpecId, setCurrentSpecId] = useState("");


    const columns = [ //Массив объектов с заголовками столбцов таблицы
        { heading: "ФИО" },
        { heading: "Возраст" },
        { heading: "Пол" },
        { heading: "Номер телефона" },
        { heading: "Адрес" }
    ]

    useEffect(() => void (async () => {
        let currentId = protocolParametersFromStore.speciality;
        setCurrentSpecId(currentId);
        setSpecNameFromId(specialitiesFromStore.findSpeciality(currentId).name)
        console.log(specialitiesFromStore.findSpeciality(protocolParametersFromStore.speciality).name);
        console.log(currentSpecId);


    })(), [])

    return (
        <div style={{ background: "white" }}>
            <div className='protocol_header'>
                Протокол конкурсного отбора {specNameFromId}
            </div>
            <div className='protocol_table_div'>
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map((item, index) => <th key={index}>{item.heading}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {statementsFromStore.findStatementsBySpec(currentSpecId).map((state) => {
                                return (
                                    <React.Fragment key={state.id}>
                                        <tr>
                                            <td>{state.lastName}</td>
                                            <td>{state.firstName}</td>
                                            <td>{state.gender}</td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Protocol
