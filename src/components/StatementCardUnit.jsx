import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const StatementCardUnit = ({ id, lastName, firstName, secondName, group }) => {
  const navigate = useNavigate();

  return (
    <div className="p-2 card">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div>
            {lastName} {firstName} {secondName}
          </div>
          <div>
            Учебная группа: {group}
          </div>

        </div>
        <Button
          variant="primary"
          style={{ width: "35px", height: "35px", fontSize: "16px" }}
          className="bottom-0 end-0 me-3 pt-0"
          onClick={() => navigate(`/editStatement/${id}`)}
        >
          &#62;
        </Button>
      </div>
    </div>
  )
}

StatementCardUnit.propTypes = {
  id: PropTypes.number,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  group: PropTypes.string,
}

export default StatementCardUnit
