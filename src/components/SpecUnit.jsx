import React from 'react'
import PropTypes from 'prop-types'

const SpecUnit = ({ name, cypher, type, clicked }) => {

  return (
    <div className="p-2 card" onClick={clicked}>
      <div className="d-flex">
        <div>
          {name}
        </div>
        <div>
          {cypher}
        </div>
      </div>
      <div>
        {type}
      </div>
    </div>
  )
}

SpecUnit.propTypes = {
  name: PropTypes.string,
  cypher: PropTypes.string,
  type: PropTypes.string,
  clicked: PropTypes.func,
}

export default SpecUnit
