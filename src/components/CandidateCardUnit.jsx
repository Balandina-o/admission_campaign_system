import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const CandidateCardUnit = ({fullName, group}) => {
  return (
    <div className="p-2 card">
        <div className="d-flex justify-content-between align-items-center">
        <div>
        <div>
                {fullName}
            </div>
            <div>
                {group}
            </div>

        </div>  
        <Button
            variant="primary"
            style={{ width: "35px", height: "35px", fontSize: "16px"}}
            className="bottom-0 end-0 me-3 pt-0"
            >
            &#62;
        </Button>
        </div>
    </div>
  )
}

CandidateCardUnit.propTypes = {
  fullName: PropTypes.string,
  group: PropTypes.string,
}

export default CandidateCardUnit