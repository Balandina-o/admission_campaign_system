import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

const SpecialityCardUnit = ({ id, name, cypher, type, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="p-2 card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div style={{ width: "70px", background: "rgb(180,182,186)", textAlign: "center" }}>
                        {cypher}
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <div >
                            <b>{name}</b>
                        </div>
                        <div>
                            Программа подготовки <i>{type.toLowerCase()}</i>
                        </div>
                    </div>
                </div>

                <div>
                    <Button
                        variant="primary"
                        style={{ width: "35px", height: "35px", fontSize: "11px" }}
                        className="bottom-0 end-0 me-3 fa fa-trash"
                        onClick={() => onDelete(id, name)}
                    >
                    </Button>

                    <Button
                        variant="primary"
                        style={{ width: "35px", height: "35px", fontSize: "13px" }}
                        className="bottom-0 end-0 me-3 fa fa-pencil"
                        onClick={() => navigate(`/editSpeciality/${id}`)}
                    >
                        &#9998;
                    </Button>

                </div>
            </div>
        </div>
    )
}

SpecialityCardUnit.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    cypher: PropTypes.string,
    type: PropTypes.string,
    onDelete: PropTypes.func,
}

export default SpecialityCardUnit
