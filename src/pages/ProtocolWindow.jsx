import React from 'react'
import { Link } from 'react-router-dom'

const ProtocolWindow = () => {
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
                                    <select id="selectDir" className="form-select w-100">
                                    </select>
                                </div>
                                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                                    <label style={{ width: "150px" }}>Количество вакантных мест: </label>
                                    <input type="number" id="secondName" placeholder="Введите фамилию кандидата" className="form-control w-100" />
                                </div>
                                <Link to={'/protocol'}>
                                    <button type="button" className="btn btn-primary mt-4 mb-2" style={{ float: "right" }}>Сгенерировать</button>
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
