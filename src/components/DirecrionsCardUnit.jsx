import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import "../components/css_components/DirectionCardUnitStyle.css";

const DirecrionsCardUnit = ({ id, name, cypher, acronym, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="p-2 card">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="acr">
                            {acronym}
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <div>
                                <b>{name}</b>
                            </div>
                            <div>
                                {cypher}
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
                            onClick={() => { navigate(`/editDirection/${id}`), console.log(`${id}`) }}
                        >
                            &#9998;
                        </Button>

                    </div>
                </div>
            </div >
        </div>
    )
}

DirecrionsCardUnit.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    cypher: PropTypes.string,
    acronym: PropTypes.string,
    onDelete: PropTypes.func,
}

export default DirecrionsCardUnit
