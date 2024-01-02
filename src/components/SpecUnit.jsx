import React from 'react'

const SpecUnit = ({name, cypher, type}) => {
  return (
    <div class="p-2 card">
        <div class="d-flex">
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

export default SpecUnit
