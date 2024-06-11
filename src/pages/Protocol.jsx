import React, { useContext, useEffect } from 'react'
import { Context } from "../App";
import { useState } from 'react';
import "../pages/styles/ProtocolStyle.css";

const Protocol = () => {
    const { protocolParametersFromStore } = useContext(Context);
    const { statementsFromStore } = useContext(Context);
    const { specialitiesFromStore } = useContext(Context);
    const { directionsFromStore } = useContext(Context);

    const [specCypherFromId, setSpecCypherFromId] = useState("");
    const [specTypeFromId, setSpecTypeFromId] = useState("");
    // const [currentSpecId, setCurrentSpecId] = useState("");
    const [totalNumberOfStatements, setTotalNumberOfStatements] = useState("");
    const [admitted, setAdmitted] = useState("");

    const [slicedArray, setSlicedArray] = useState([]);


    useEffect(() => void (async () => {
        let currentId = protocolParametersFromStore.speciality;
        let currentNumber = protocolParametersFromStore.number;
        let totNumState = statementsFromStore.findStatementsBySpec(currentId).length;
        let minus = totNumState - Number(currentNumber);

        //setCurrentSpecId(currentId);
        setTotalNumberOfStatements(totNumState);
        setSpecCypherFromId(specialitiesFromStore.findSpeciality(currentId).cypher)
        setSpecTypeFromId(specialitiesFromStore.findSpeciality(currentId).type)
        console.log("currentNumber", currentNumber);
        console.log("totalNumberOfStatements", totNumState);
        console.log('minus', minus);
        console.log('currentSpecId', currentId);

        if (minus < 0) {
            setAdmitted(totNumState)
        } else {
            setAdmitted(currentNumber)
        }
        //................................................................................................
        setSlicedArray(statementsFromStore.findStatementsBySpec(currentId).slice(0, admitted));


    })(), [slicedArray])

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
                            <td rowSpan="2" width="4%"><b>№ п/п</b></td>
                            <td rowSpan="2" width="25%"><b>Фамилия, имя, отчество (при наличии), дата рождения</b></td>
                            <td rowSpan="2" width="7%"><b>Код специальности (направление подготовки)</b></td>
                            <td rowSpan="2" width="6%"><b>Результат медицинского освидетельствования</b></td>
                            <td rowSpan="2" width="7%"><b>Результаты профессионального психологического отбора</b></td>
                            <td rowSpan="2" width="5%"><b className="vertical-text">Преимущественное право</b></td>
                            <td colSpan="4" width="16%"><b>Оценка уровня физической подготовленности</b></td>
                            <td rowSpan="2" width="7%"><b>Оценка текущей успеваемости (по 100 бальной шкале)</b></td>
                            <td rowSpan="2" width="7%"><b>Итоговый результат</b></td>
                            <td rowSpan="2" width="15%"><b>Решение о допуске к военной подготовке(причина недопуска к конкурсному отбору)</b> </td>
                        </tr>
                        <tr>
                            <td><b>Сила</b></td>
                            <td><b>Быстрота</b></td>
                            <td><b>Выносливость</b></td>
                            <td><b>Результат (по 100 бальной шкале)</b></td>
                        </tr>

                        <tr>
                            <td className="center">1</td>
                            <td className="center">2</td>
                            <td className="center">3</td>
                            <td className="center">4</td>
                            <td className="center">5</td>
                            <td className="center">6</td>
                            <td className="center">7</td>
                            <td className="center">8</td>
                            <td className="center">9</td>
                            <td className="center">10</td>
                            <td className="center">11</td>
                            <td className="center">12</td>
                            <td className="center">13</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="13" className="center"><b>1. Список граждан, допущенных к конкурсному отбору</b></td>
                        </tr>
                        <>
                            {slicedArray.map((state, index) => {
                                return (
                                    <React.Fragment key={state.id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{state.secondName} {state.firstName} {state.lastName}, {(state.birthday).replaceAll("-", '.')}</td>
                                            <td>{directionsFromStore.findDirection(state.DirectionId).cypher}</td>
                                            <td>годен</td>
                                            <td>{state.ppo === "1" ? "II" : "I"}</td>
                                            <td>нет</td>

                                            <td style={{ width: "39px" }}>
                                                {state.fpS}
                                            </td>
                                            <td>{state.fpB}</td>
                                            <td>{state.fpV}</td>
                                            <td>{state.fpFinal}</td>

                                            <td>{state.auDec}</td>
                                            <td>{state.totalScore}</td>
                                            <td>допустить</td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </>
                        <tr>
                            <td colSpan="13" className="center"><b>2. Список граждан, не допущенных к конкурсному отбору</b></td>
                        </tr>
                        <>
                            fggf
                        </>
                    </tbody>
                </table>


            </div>
            <div className='statistics' style={{ paddingBottom: '100px' }}>
                Изъявили желание пройти обучение по программе военной подготовки – __<u>{totalNumberOfStatements}</u>__ чел.<br></br>
                Допущены к военной подготовке – __{admitted}__ чел.<br></br>
                Допущены к военной подготовке – __{admitted}__ чел.<br></br>
                Допущены к военной подготовке – __{admitted}__ чел.<br></br>
                Члены комиссии<br></br>
                Секретарь<br></br>
            </div>
        </div>

    )
}

export default Protocol
