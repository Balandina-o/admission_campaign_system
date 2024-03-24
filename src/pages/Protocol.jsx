import React, { useContext, useEffect } from 'react'
import { Context } from "../App";
import { useState } from 'react';
import "../pages/styles/ProtocolStyle.css";

const Protocol = () => {
    const { protocolParametersFromStore } = useContext(Context);
    const { statementsFromStore } = useContext(Context);
    const { specialitiesFromStore } = useContext(Context);
    const [specCypherFromId, setSpecCypherFromId] = useState("");
    const [specTypeFromId, setSpecTypeFromId] = useState("");
    const [currentSpecId, setCurrentSpecId] = useState("");
    const [totalNumberOfStatements, setTotalNumberOfStatements] = useState("");
    const [admitted, setAdmitted] = useState("");

    const columns = [ //Массив объектов с заголовками столбцов таблицы
        { heading: "ФИО" },
        { heading: "Возраст" },
        { heading: "Пол" },
        { heading: "Номер телефона" },
        { heading: "Адрес" }
    ]

    useEffect(() => void (async () => {
        let currentId = protocolParametersFromStore.speciality;
        let currentNumber = protocolParametersFromStore.number;
        let totNumState = statementsFromStore.findStatementsBySpec(currentId).length;
        let minus = totNumState - Number(currentNumber);

        setCurrentSpecId(currentId);
        setTotalNumberOfStatements(totNumState);
        setSpecCypherFromId(specialitiesFromStore.findSpeciality(currentId).cypher)
        setSpecTypeFromId(specialitiesFromStore.findSpeciality(currentId).type)
        console.log("currentNumber", currentNumber);
        console.log("totalNumberOfStatements", totNumState);
        console.log('minus', minus);
        if (minus < 0) {
            setAdmitted(totNumState)
        } else {
            setAdmitted(currentNumber)
        }
    })(), [])

    return (
        <div style={{ background: "white" }}>
            <div className='protocol_header'>
                ПРОТОКОЛ<br></br>
                конкурсного отбора граждан, изъявивших желание пройти обучение по программе военной подготовки<br></br>
                {specTypeFromId} в военном учебном центре при<br></br>
                ______________________________________________________________________<br></br>
                (наименование федеральной государственной образовательной организации высшего образования)<br></br>
                по военно-учетной специальности _________________<u>{specCypherFromId}</u>____________<br></br>
                (код военно-учетной специальности)<br></br>

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
            <div className='statistics'>
                Изъявили желание пройти обучение по программе военной подготовки – __<u>{totalNumberOfStatements}</u>__ чел.<br></br>
                Допущены к военной подготовке – __{admitted}__ чел.
            </div>
        </div>

    )
}

export default Protocol
