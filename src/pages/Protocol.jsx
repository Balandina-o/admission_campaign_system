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
        <div style={{ background: "white" }} >
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

                            <th>№ п/п</th>
                            <th>Фамилия, имя, отчество (при наличии), дата рождения</th>
                            <th>Код специальности (направление подготовки)</th>
                            <th>Результат медицинского освидетельствования</th>
                            <th>Результаты профессионального психологического отбора</th>
                            <th>Преимущественное право</th>
                            <tr>
                                <td colSpan="4">
                                    Оценка уровня физической подготовленности
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Сила
                                </td>
                                <td>
                                    Быстрота
                                </td>
                                <td>
                                    Выносливость
                                </td>
                                <td style={{ width: "250px" }}>
                                    Результат (по 100 бальной шкале)
                                </td>
                            </tr>

                            <th>Оценка текущей успеваемости (по 100 бальной шкале)</th>
                            <th>Итоговый результат</th>
                            <th>Решение о допуске к военной подготовке (причина недопуска к конкурсному отбору)</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <tr>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                            </tr>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {statementsFromStore.findStatementsBySpec(currentSpecId).map((state) => {
                                return (
                                    <React.Fragment key={state.id}>
                                        <tr>
                                            <td>1</td>
                                            <td>{state.secondName} {state.firstName} {state.lastName}, {state.birthday}</td>
                                            <td>{specCypherFromId}</td>
                                            <td>{state.moCat}</td>
                                            <td>{state.ppo}</td>
                                            <td>{state.pp}</td>
                                            <tr>
                                                <td style={{ width: "39px" }}>
                                                    {state.fpS}
                                                </td>
                                                <td>{state.fpB}</td>
                                                <td>{state.fpV}</td>
                                                <td>{state.fpFinal}</td>
                                            </tr>
                                            <td>{state.auDec}</td>
                                            <td>{state.totalScore}</td>
                                            <td>Годен</td>
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
