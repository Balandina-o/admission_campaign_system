import React from 'react'
import PropTypes from 'prop-types'

import './css_components/SpecUnit.css'

const SpecUnit = ({ name, cypher, type, clicked }) => {

  return (
    <div className='cardSpec'>
      <div className="p-3 card" onClick={clicked}>
        <div className="d-flex">{/* flex-wrap */}
          <div style={{ paddingRight: '5px' }}>
            <b> {name}</b>
          </div>
          <div >
            <div style={{ background: "#CFCFCF", borderRadius: '5px' }}>
              {cypher}
            </div>

          </div>
        </div>
        <div>
          Программа подготовки <i>{type.toLowerCase()}</i>
        </div>
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
