import React from 'react'

function ResetComponent(props) {
  return (
    <>
      <button className='reset-btn' onClick={props.reset}>
        RESET
      </button>
    </>
  )
}

export default ResetComponent
