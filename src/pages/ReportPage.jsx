import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../App"
import { getCurrentDate } from '../operations/AuxiliaryOperations'
import "../pages/styles/ReportStyle.css";

const ReportPage = () => {
    const { specialitiesFromStore } = useContext(Context);
    const { directionsFromStore } = useContext(Context);
    const { statementsFromStore } = useContext(Context);
    const [numberStatementsTotal, setNumberStatementsTotal] = useState([]);
    const [numberOfCadr, setNumberOfCadr] = useState([]);


    function writeIntoFile() {
    }

    useEffect(() => void (async () => {
        let numberStateT = statementsFromStore.getNumberOfStatements();
        setNumberStatementsTotal(numberStateT);
        let numberC = statementsFromStore.getNumberOfStatementsOfCadr(specialitiesFromStore.getListOfSpecForCadr());
        setNumberOfCadr(numberC);
    })(), [])


    const reportComp = () => {
        return (
            <div style={{ background: "white" }}>
                <div className='report_header'>
                    <b>ОТЧЕТ</b><br></br>
                    по приемной кампании на {getCurrentDate()}
                    <hr></hr>
                </div>
                <div className='report_body'>
                    Так, на момент генерации отчета в системе насчитывается:<br></br>
                    <div className='report_statistics_container'>
                        Специальностей всего - {specialitiesFromStore.getNumberOfSpec()}<br></br>
                        Направлений всего - {directionsFromStore.getNumberOfDir()}<br></br>
                        Заявлений кандидатов всего - {numberStatementsTotal}<br></br>
                        <br></br>
                        Заявлений кандидатов офицеров запаса - {numberOfCadr}<br></br>
                        Заявлений кандидатов кадровых офицеров - {numberStatementsTotal - numberOfCadr}<br></br>
                    </div>
                    <button required type="button" className="btn btn-primary mt-4 mb-2" onClick={writeIntoFile}>Скачать отчет</button>
                </div>
            </div>
        )
    }

    return (
        reportComp()
    )
}

export default ReportPage
