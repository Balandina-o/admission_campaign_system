import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const DirecrionsCardUnit = ({ id, name, cypher, acronym, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="p-2 card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div>
                        {acronym}
                    </div>
                    <div>
                        <div>
                            {name}
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
                        onClick={() => navigate(`/editSpeciality/${id}`)}
                    >
                        &#9998;
                    </Button>
                </div>
            </div>
        </div >
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
