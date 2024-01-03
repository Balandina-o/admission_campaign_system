import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const SpecialityCardUnit = ({name, cypher, type}) => {
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
                style={{ width: "35px", height: "35px", fontSize: "10px"}}
                className="bottom-0 end-0 me-3 pt-0"
                >
                &#128465;
            </Button>
            <Button
                variant="primary"
                style={{ width: "35px", height: "35px", fontSize: "16px"}}
                className="bottom-0 end-0 me-3 pt-0"
                >
                &#62;
            </Button>
        </div>
    </div>
    </div>
  )
}

SpecialityCardUnit.propTypes = {
    name: PropTypes.string,
    cypher: PropTypes.string,
    type: PropTypes.string
}

export default SpecialityCardUnit
