import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

const SpecialityCardUnit = ({ id, name, cypher, type }) => {
    const navigate = useNavigate();

    return (
        <div className="p-2 card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div>
                        {cypher}
                    </div>
                    <div>
                        <div>
                            {name}
                        </div>
                        <div>
                            {type}
                        </div>
                    </div>
                </div>

                <div>
                    <Button
                        variant="primary"
                        style={{ width: "35px", height: "35px", fontSize: "10px" }}
                        className="bottom-0 end-0 me-3 pt-0"
                    >
                        &#128465;
                    </Button>

                    <Button
                        variant="primary"
                        style={{ width: "35px", height: "35px", fontSize: "16px" }}
                        className="bottom-0 end-0 me-3 pt-0"
                        onClick={() => navigate(`/editSpeciality/${id}`)}
                    >
                        &#62;
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
    type: PropTypes.string
}

export default SpecialityCardUnit
