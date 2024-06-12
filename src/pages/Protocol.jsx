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

    const [totalNumberOfStatements, setTotalNumberOfStatements] = useState("");
    const [admitted, setAdmitted] = useState("");

    const [sortedArrayPassed, setSortedArrayPassed] = useState([]);
    const [sortedArrayOther, setSortedArrayOther] = useState([]);


    let passedDudes = [];
    let otherDudes = [];

    useEffect(() => {
        let currentId = protocolParametersFromStore.speciality;
        let currentNumber = protocolParametersFromStore.number;
        let totNumState = statementsFromStore.findStatementsBySpec(currentId).length;
        let minus = totNumState - Number(currentNumber);

        setTotalNumberOfStatements(totNumState);
        setSpecCypherFromId(specialitiesFromStore.findSpeciality(currentId).cypher)
        setSpecTypeFromId(specialitiesFromStore.findSpeciality(currentId).type)
        if (minus < 0) {
            setAdmitted(totNumState)
        } else {
            setAdmitted(currentNumber)
        }
        //................................................................................................
        const copyArr = [...statementsFromStore.findStatementsBySpec(currentId)];

        for (let i = 0; i < copyArr.length; i++) {
            if (copyArr[i].moCat == '9' || copyArr[i].moCat == '10' || copyArr[i].moCat == '11' || copyArr[i].moCat === null ||
                copyArr[i].ppo == '4' || copyArr.fpFinal == '0' || copyArr.fpFinal === null || copyArr.totalScore == '0' || copyArr.totalScore === null
            ) {
                otherDudes.push(copyArr[i]);
            }
            else {
                passedDudes.push(copyArr[i]);
            }
        }
        // setPassedDudesState(passedDudes);
        // setOtherDudesState(otherDudes);

        setSortedArrayPassed(passedDudes.sort((a, b) => parseFloat(b.totalScore) - parseFloat(a.totalScore)));
        setSortedArrayOther(otherDudes.sort((a, b) => parseFloat(b.totalScore) - parseFloat(a.totalScore)));

        console.log('sortedArrayPassed', sortedArrayPassed);
    }, [])

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
                            {sortedArrayPassed.map((state, index) => {
                                return (
                                    <React.Fragment key={state.id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{state.secondName} {state.firstName} {state.lastName}, {(state.birthday).split("-").reverse().join(".")}</td>
                                            <td>{directionsFromStore.findDirection(state.DirectionId).cypher}</td>
                                            <td>{(state.moCat == '9' || state.moCat == '10' || state.moCat == '11') ? 'не годен'
                                                : 'годен'}</td>
                                            <td>{state.ppo === "1" ? "I" :
                                                state.ppo === "2" ? "II" :
                                                    state.ppo === "3" ? "III" :
                                                        state.ppo === "4" ? "IV" : '-'}</td>
                                            <td>{state.pp == '2' ? 'нет' : 'есть'}</td>
                                            <td style={{ width: "39px" }}>
                                                {state.fpS != null || state.fpS != "" ? state.fpS : '-'}
                                            </td>
                                            <td>{state.fpV != null || state.fpV != "" ? state.fpV : '-'}</td>
                                            <td>{state.fpB != null || state.fpB != "" ? state.fpB : '-'}</td>
                                            <td>{state.fpFinal != null || state.fpFinal != "" ? state.fpFinal : '-'}</td>

                                            <td>{state.auDec != null ? state.auDec : '-'}</td>
                                            <td>{state.totalScore != null ? state.totalScore : '-'}</td>
                                            {
                                                index < admitted ?
                                                    <td>допустить</td> : <td>отказать</td>
                                            }
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </>
                        <tr>
                            <td colSpan="13" className="center"><b>2. Список граждан, не допущенных к конкурсному отбору</b></td>
                        </tr>
                        <>
                            {sortedArrayOther.map((state, index) => {
                                return (
                                    <React.Fragment key={state.id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{state.secondName} {state.firstName} {state.lastName}, {(state.birthday).split("-").reverse().join(".")}</td>
                                            <td>{directionsFromStore.findDirection(state.DirectionId).cypher}</td>
                                            <td>{(state.moCat == '9' || state.moCat == '10' || state.moCat == '11') ? 'не годен'
                                                : 'годен'}</td>
                                            <td>{state.ppo === "1" ? "I" :
                                                state.ppo === "2" ? "II" :
                                                    state.ppo === "3" ? "III" :
                                                        state.ppo === "4" ? "IV" : '-'}</td>
                                            <td>{state.pp == '2' ? 'нет' : 'есть'}</td>
                                            <td style={{ width: "39px" }}>
                                                {(state.fpS === null) ? '-' : state.fpS}
                                            </td>
                                            <td>{(state.fpV != null || state.fpV != undefined) ? state.fpV : '-'}</td>
                                            <td>{(state.fpB != null || state.fpB != undefined) ? state.fpB : '-'}</td>
                                            <td>{(state.fpFinal != null || state.fpFinal != undefined) ? state.fpFinal : '-'}</td>

                                            <td>{state.auDec != null ? state.auDec : '-'}</td>
                                            <td>{state.totalScore != null ? state.totalScore : '-'}</td>
                                            <td>{state.moCat == '9' ||
                                                state.moCat == '10' ||
                                                state.moCat == '11' ? 'не годен; ' : ""}
                                                {state.fpFinal == '0' ? 'не сдал ФП; ' : ""}
                                                {state.ppo == '4' ? `${state.ppo} категория ППО; ` : ""}
                                                отказать</td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </>
                    </tbody>
                </table>


            </div>
            <div className='statistics' style={{ paddingBottom: '100px', paddingLeft: '5%' }}>
                Изъявили желание пройти обучение по программе военной подготовки – __<u>{totalNumberOfStatements}</u>__ чел.<br></br>
                Допущены к военной подготовке – __{admitted}__ чел.<br></br>
                Не допущены к военной подготовке (не прошли по конкурсу) – __{sortedArrayPassed.length - admitted}__ чел.<br></br>
                Не допущены к конкурсному отбору – __{sortedArrayOther.length}__ чел.<br></br>
                Члены комиссии<br></br>
                Секретарь<br></br>
            </div>
        </div>

    )
}

export default Protocol
