import React, { useContext, useEffect } from 'react'
import { Context } from "../App";

const Protocol = () => {
    const { protocolParametersFromStore } = useContext(Context);
    const { statementsFromStore } = useContext(Context);
    const columns = [ //Массив объектов с заголовками столбцов таблицы
        { heading: "ФИО" },
        { heading: "Возраст" },
        { heading: "Пол" },
        { heading: "Номер телефона" },
        { heading: "Адрес" }
    ]

    useEffect(() => void (async () => {
        // console.log("sss", protocolParametersFromStore.number);
        console.log(statementsFromStore.findStatementsBySpec(parseInt(protocolParametersFromStore.number)));
        // console.log(protocolParametersFromStore.number);
    })(), [])

    return (
        <div style={{ background: "white" }}>
            <table>
                <thead>
                    <tr>
                        {columns.map((item, index) => <th key={index}>{item.heading}</th>)}
                    </tr>
                </thead>
                {/* <tbody>
                <>
                    {users.usersList1.map((user) => {
                        return (
                            <React.Fragment key={user.id}>
                                <tr>
                                    <td>{user.lastName} {user.firstName} {user.maidenName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </>
            </tbody> */}
            </table>
        </div>

    )
}

export default Protocol
